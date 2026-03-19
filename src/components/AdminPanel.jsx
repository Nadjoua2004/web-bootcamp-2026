import React, { useState } from 'react';
import Icon from './Icon';
import { ADMIN_PW, SESSIONS } from '../data/sessions';

function AdminPanel({ quizStates, onToggle, onClose }) {
  const [phase, setPhase] = useState("login");
  const [pw, setPw] = useState("");
  const [err, setErr] = useState("");

  function login(e) {
    e.preventDefault();
    if (pw === ADMIN_PW) { setPhase("panel"); setErr(""); }
    else { setErr("Invalid master key."); }
  }

  return (
    <div className="adm-overlay" onClick={onClose}>
      <div className="adm-modal" onClick={e => e.stopPropagation()}>
        <div className="adm-head">
          <div className="adm-head-title">
            <Icon name="Shield" size={16} color="#3b82f6" />
            Instructor Control
          </div>
          <button className="close-x" onClick={onClose}><Icon name="X" size={14} /></button>
        </div>

        <div className="adm-body">
          {phase === "login" ? (
            <form onSubmit={login}>
              <p className="adm-login-sub">Access restricted to bootcamp instructors. Enter the master key to manage session quizzes.</p>
              <div className="field-wrap">
                <div className="field-icon"><Icon name="Lock" size={14} /></div>
                <input 
                  type="password" 
                  autoFocus
                  className={`text-field ${err ? "err" : ""}`}
                  placeholder="Master Key"
                  value={pw}
                  onChange={e => setPw(e.target.value)}
                />
                {err && <div className="field-err">{err}</div>}
              </div>
              <button type="submit" className="btn-primary-blue" style={{width:"100%"}}>Verify Identity</button>
            </form>
          ) : (
            <div className="admin-list">
              {SESSIONS.map(s => (
                <div key={s.id} className="adm-row">
                  <div>
                    <div className="adm-day-name">Day {s.id}: {s.title}</div>
                    <div className="adm-day-meta">Session Quiz</div>
                  </div>
                  <label className="toggle-sw">
                    <input 
                      type="checkbox" 
                      checked={quizStates[s.id]} 
                      onChange={() => onToggle(s.id)} 
                    />
                    <span className="toggle-track"/>
                  </label>
                </div>
              ))}
              <div className="adm-ok">All changes synced.</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default AdminPanel;
