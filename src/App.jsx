import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import AdminPanel from './components/AdminPanel';
import HomeScreen from './components/HomeScreen';
import SessionView from './components/SessionView';
import { SESSIONS } from './data/sessions';

function App() {
  const [activeId, setActiveId] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [quizStates, setQuizStates] = useState(() => {
    const obj = {};
    SESSIONS.forEach(s => obj[s.id] = s.quiz.enabled);
    return obj;
  });

  const activeSession = SESSIONS.find(s => s.id === activeId);

  const toggleQuiz = (id) => {
    setQuizStates(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const handleStart = () => setActiveId(1);
  const handleHome = () => setActiveId(null);
  const handleSelect = (id) => setActiveId(id);

  const [sideOpen, setSideOpen] = useState(false);

  // Sync session quiz state with admin toggle
  const sessionWithQuizState = activeSession ? {
    ...activeSession,
    quiz: { ...activeSession.quiz, enabled: quizStates[activeSession.id] }
  } : null;

  const handleNavSelect = (id) => {
    setActiveId(id);
    setSideOpen(false);
  };

  const handleNavHome = () => {
    setActiveId(null);
    setSideOpen(false);
  };

  return (
    <div className="app-shell">
      {sideOpen && <div className="mob-overlay show" onClick={() => setSideOpen(false)} />}
      <Sidebar 
        activeId={activeId} 
        onSelect={handleNavSelect} 
        onHome={handleNavHome} 
        onAdmin={() => { setIsAdmin(true); setSideOpen(false); }}
        isOpen={sideOpen}
      />
      <main className="main-area">
        <Topbar 
          onAdmin={() => setIsAdmin(true)} 
          current={activeSession}
          onMenuClick={() => setSideOpen(true)}
        />
        <div className="page-content">
          {activeId === null ? (
            <HomeScreen onStart={handleStart} />
          ) : (
            <SessionView session={sessionWithQuizState} />
          )}
        </div>
      </main>

      {isAdmin && (
        <AdminPanel 
          quizStates={quizStates} 
          onToggle={toggleQuiz} 
          onClose={() => setIsAdmin(false)} 
        />
      )}
    </div>
  );
}

export default App;
