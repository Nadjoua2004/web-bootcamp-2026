import React from 'react';
import PMButton from './PMButton';

function PMNoProject({ onAdd }) {
  return (
    <div style={{marginTop:"80px",textAlign:"center",width:"60%"}}>
      <div style={{fontSize:"32px",marginBottom:"12px"}}>📋</div>
      <h2 style={{fontSize:"18px",fontWeight:"700",color:"#78716c",marginBottom:"8px"}}>No Project Selected</h2>
      <p style={{color:"#57534e",marginBottom:"20px"}}>Select a project or start a new one</p>
      <PMButton onClick={onAdd}>Create new project</PMButton>
    </div>
  );
}

export default PMNoProject;
