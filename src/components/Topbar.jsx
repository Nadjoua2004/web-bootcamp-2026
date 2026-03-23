import React from 'react';
import Icon from './Icon';

function Topbar({ current, onAdmin, onMenuClick }) {
  return (
    <div className="topbar">
      <div className="topbar-left">
        <button className="ham-btn" onClick={onMenuClick}>
          <Icon name="Menu" size={20} />
        </button>
        <div className="topbar-tag">Training</div>
        {current && <Icon name="ChevronRight" size={14} color="#404040" className="topbar-chevron" />}
        <div className="topbar-title">{current ? current.title : "MERN Stack Bootcamp"}</div>
      </div>
      <div className="topbar-right">
        {current && (
          <div className="dur-chip">
            <Icon name="Clock" size={12} style={{marginRight:"8px"}} />
            {current.duration}
          </div>
        )}
        <span style={{fontFamily:"'JetBrains Mono',monospace",fontSize:"10px",padding:"4px 10px",background:"rgba(59, 130, 246, 0.08)",border:"1px solid rgba(59, 130, 246, 0.2)",borderRadius:"6px",color:"#60a5fa"}}>
          10 Sessions
        </span>
      </div>
    </div>
  );
}

export default Topbar;
