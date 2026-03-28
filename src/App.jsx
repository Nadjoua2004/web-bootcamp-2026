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
  const [quizStates, setQuizStates] = useState({});

  // Fetch quiz states from backend
  const fetchStates = async () => {
    try {
      const res = await fetch('/api/quiz-status');
      if (res.ok) {
        const data = await res.json();
        setQuizStates(data);
      }
    } catch (err) {
      console.error("Failed to sync quiz states:", err);
    }
  };

  // Initial fetch and polling
  useEffect(() => {
    fetchStates();
    const interval = setInterval(fetchStates, 10000); // Poll every 10s
    return () => clearInterval(interval);
  }, []);

  const activeSession = SESSIONS.find(s => s.id === activeId);

  const toggleQuiz = async (id, password) => {
    const nextState = !quizStates[id];
    try {
      const res = await fetch('/api/quiz-status', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, enabled: nextState, password })
      });
      if (res.ok) {
        setQuizStates(prev => ({ ...prev, [id]: nextState }));
      } else {
        const err = await res.json();
        alert(`Error: ${err.error || "Failed to toggle quiz"}`);
      }
    } catch (err) {
      alert("Network error. Please try again.");
    }
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
