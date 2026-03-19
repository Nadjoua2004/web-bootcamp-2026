import React from 'react';
import Icon from './Icon';
import { SESSIONS } from '../data/sessions';

function Sidebar({ activeId, onSelect, onHome, onAdmin }) {
  const w1 = SESSIONS.filter(s => s.week === 1);
  const w2 = SESSIONS.filter(s => s.week === 2);

  const renderNavGroup = (sessions, label) => (
    <>
      <div className="week-header">{label}</div>
      {sessions.map(s => (
        <button key={s.id} 
          className={`nav-btn ${activeId === s.id ? "active" : ""}`} 
          onClick={() => onSelect(s.id)}
        >
          <div className="nav-num">
            <Icon name={s.icon || "BookOpen"} size={14} strokeWidth={2} color={activeId === s.id ? "#3b82f6" : "#404040"} />
          </div>
          <div className="nav-content">
            <div className="nav-name">{s.title}</div>
            <div className="nav-dur">{s.duration}</div>
          </div>
          <div className="nav-badges">
            <span className={`badge-type ${s.type === "onsite" ? "b-onsite" : "b-online"}`}>{s.type}</span>
            {s.quiz.questions.length > 0 && (
              <div className={`quiz-pip ${s.quiz.enabled ? "pip-on" : "pip-off"}`}/>
            )}
          </div>
        </button>
      ))}
    </>
  );

  return (
    <aside className="sidebar">
      <div className="sidebar-top">
        <div className="brand-row">
          <div className="brand-dot" />
          <div className="brand-title">WEB<span>BOOTCAMP</span></div>
        </div>
        <div className="brand-sub">Modern Stack Mastery · 2026</div>
      </div>
      <nav className="nav-scroll">
        <button className={`nav-btn ${activeId === null ? "active" : ""}`} onClick={onHome}>
          <div className="nav-num">
            <Icon name="Home" size={14} strokeWidth={2} color={activeId === null ? "#3b82f6" : "#404040"} />
          </div>
          <div className="nav-content">
            <div className="nav-name">Overview</div>
            <div className="nav-dur">Program intro</div>
          </div>
        </button>
        {renderNavGroup(w1, "Week 1 — Frontend")}
        {renderNavGroup(w2, "Week 2 — Backend")}
      </nav>
      <div className="sidebar-foot">
        <button className="admin-toggle-btn" onClick={onAdmin}>
          <Icon name="Settings" size={14} />
          Admin Panel
        </button>
      </div>
    </aside>
  );
}

export default Sidebar;
