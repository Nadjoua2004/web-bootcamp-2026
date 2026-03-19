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

  // Sync session quiz state with admin toggle
  const sessionWithQuizState = activeSession ? {
    ...activeSession,
    quiz: { ...activeSession.quiz, enabled: quizStates[activeSession.id] }
  } : null;

  return (
    <div className="app-shell">
      <Sidebar 
        activeId={activeId} 
        onSelect={handleSelect} 
        onHome={handleHome} 
        onAdmin={() => setIsAdmin(true)}
      />
      <main className="main-area">
        <Topbar 
          onAdmin={() => setIsAdmin(true)} 
          current={activeSession}
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
