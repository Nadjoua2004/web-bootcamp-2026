import React from 'react';
import PMButton from './PMButton';

function PMSidebar({ projects, selectedId, onSelect, onAdd }) {
  return (
    <aside style={{
      width:"224px",flexShrink:0,
      background:"#1c1917",padding:"40px 20px",
      borderRight:"1px solid #292524",borderRadius:"0 12px 12px 0"
    }}>
      <h2 style={{marginBottom:"24px",fontWeight:"700",textTransform:"uppercase",fontSize:"15px",color:"#d6d3d1",letterSpacing:"1px"}}>Your Projects</h2>
      <PMButton onClick={onAdd}>+ Add a Project</PMButton>
      <ul style={{marginTop:"24px",listStyle:"none",padding:0}}>
        {projects.map(p => (
          <li key={p.id}>
            <button
              onClick={() => onSelect(p.id)}
              style={{
                width:"100%",textAlign:"left",padding:"6px 8px",borderRadius:"4px",
                marginBottom:"2px",cursor:"pointer",border:"none",
                background: p.id === selectedId ? "#292524" : "transparent",
                color: p.id === selectedId ? "#e7e5e4" : "#78716c",
                fontFamily:"inherit",fontSize:"13px",transition:"all .12s ease"
              }}
            >{p.title}</button>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default PMSidebar;
