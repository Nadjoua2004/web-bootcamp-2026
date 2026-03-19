import React, { useState } from 'react';
import Icon from './Icon';
import Block from './Block';

function SectionCard({ section, defaultOpen }) {
  const [open, setOpen] = useState(defaultOpen);
  const isCoding = section.type === "coding";

  return (
    <div className="s-card">
      <div className="s-head" onClick={() => setOpen(!open)}>
        <div className={`s-icon ${isCoding ? "icon-green" : "icon-blue"}`}>
          <Icon name={isCoding ? "Terminal" : "BookOpen"} size={18} />
        </div>
        <span className="s-title">{section.title}</span>
        <div className={`s-chevron ${open ? "open" : ""}`}>
          <Icon name="ChevronDown" size={14} />
        </div>
      </div>
      {open && (
        <div className="s-body">
          {isCoding ? (
            <div className="coding-block">
              <div className="coding-hd">
                <Icon name="Zap" size={20} color="#34d399" />
                <span className="coding-hd-title">Practical Lab</span>
              </div>
              <p className="coding-prompt">"Follow the live-coding session to implement these features in your workspace."</p>
              <div className="coding-lbl">Objective</div>
              <p className="coding-goals">{section.goals}</p>
              <div className="coding-lbl" style={{marginTop:"16px"}}>Key Steps</div>
              {section.steps.map((s,i) => (
                <div className="coding-step-row" key={i}>
                  <span className="coding-step-n">{i+1}.</span>
                  <span>{s}</span>
                </div>
              ))}
            </div>
          ) : (
            <div style={{animation: "fadeIn 0.4s ease"}}>
              {section.content.map((b,i) => <Block key={i} b={b}/>)}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default SectionCard;
