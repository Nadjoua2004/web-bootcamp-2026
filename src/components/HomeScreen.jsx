import React from 'react';
import Icon from './Icon';
import { SESSIONS } from '../data/sessions';

function HomeScreen({ onStart }) {
  const S = SESSIONS;
  return (
    <div className="home-wrap">
      <div className="home-eyebrow">Developer Bootcamp 2026</div>
      <h1 className="home-h1">Master the <span>Modern Stack</span>.</h1>
      <p className="home-p">Master React, Node.js, and MongoDB through intensive, project-based learning. Follow the roadmap from core basics to production-ready architecture.</p>

      <div className="home-stats">
        <div className="stat-tile">
          <Icon name="Calendar" size={24} color="#3b82f6" style={{marginBottom:"12px"}} />
          <span className="stat-v">02</span>
          <span className="stat-l">Weeks</span>
        </div>
        <div className="stat-tile">
          <Icon name="BookOpen" size={24} color="#3b82f6" style={{marginBottom:"12px"}} />
          <span className="stat-v">10</span>
          <span className="stat-l">Sessions</span>
        </div>
        <div className="stat-tile">
          <Icon name="Code" size={24} color="#3b82f6" style={{marginBottom:"12px"}} />
          <span className="stat-v">03</span>
          <span className="stat-l">Projects</span>
        </div>
        <div className="stat-tile">
          <Icon name="Award" size={24} color="#3b82f6" style={{marginBottom:"12px"}} />
          <span className="stat-v">01</span>
          <span className="stat-l">Certificate</span>
        </div>
      </div>

      <div className="weeks-grid">
        <div className="week-tile">
          <div className="week-tile-h">
            <Icon name="Terminal" size={20} color="#3b82f6" />
            <span>Week 1: Foundations</span>
            <span className="w-badge b-onsite">Phase 1</span>
          </div>
          {S.filter(s => s.week === 1).map(s => (
            <div key={s.id} className="week-item">{s.title}</div>
          ))}
        </div>
        <div className="week-tile">
          <div className="week-tile-h">
            <Icon name="Server" size={20} color="#3b82f6" />
            <span>Week 2: Mastery</span>
            <span className="w-badge b-online">Phase 2</span>
          </div>
          {S.filter(s => s.week === 2).map(s => (
            <div key={s.id} className="week-item">{s.title}</div>
          ))}
        </div>
      </div>
      <button className="btn-primary-blue" onClick={onStart}>
        Start Day 1 →
      </button>
    </div>
  );
}

export default HomeScreen;
