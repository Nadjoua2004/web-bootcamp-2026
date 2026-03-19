import React, { useState } from 'react';
import PMButton from './PMButton';

function PMSelectedProject({ project }) {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState('');
  const formatted = new Date(project.duedate).toLocaleDateString('en-US',{year:'numeric',month:'short',day:'numeric'});

  function addTask(e) {
    e.preventDefault();
    if (!taskInput.trim()) return;
    setTasks(t => [...t, { id: Date.now(), title: taskInput }]);
    setTaskInput('');
  }
  function removeTask(id) { setTasks(t => t.filter(x => x.id !== id)); }

  return (
    <div style={{width:"520px",marginTop:"48px",padding:"0 8px"}}>
      <header style={{paddingBottom:"14px",marginBottom:"14px",borderBottom:"2px solid #d6d3d1"}}>
        <h1 style={{fontSize:"26px",fontWeight:"700",color:"#57534e",marginBottom:"4px"}}>{project.title}</h1>
        <p style={{color:"#a8a29e",marginBottom:"8px",fontSize:"13px"}}>{formatted}</p>
        <p style={{color:"#57534e",whiteSpace:"pre-wrap",fontSize:"14px"}}>{project.description}</p>
      </header>
      <h2 style={{fontSize:"14px",fontWeight:"700",textTransform:"uppercase",color:"#78716c",letterSpacing:"1px",marginBottom:"10px"}}>Tasks</h2>
      <form onSubmit={addTask} style={{display:"flex",gap:"8px",marginBottom:"14px"}}>
        <input
          value={taskInput}
          onChange={e => setTaskInput(e.target.value)}
          placeholder="Add a task..."
          style={{flex:1,padding:"6px 8px",background:"#e7e5e4",border:"none",borderBottom:"2px solid #d6d3d1",color:"#57534e",outline:"none",borderRadius:"2px",fontFamily:"inherit",fontSize:"13px"}}
        />
        <PMButton type="submit">Add Task</PMButton>
      </form>
      {tasks.length === 0
        ? <p style={{color:"#57534e",fontSize:"13px"}}>No tasks yet. Add one above.</p>
        : (
          <ul style={{listStyle:"none",padding:0}}>
            {tasks.map(t => (
              <li key={t.id} style={{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"6px 0",borderBottom:"1px solid #e7e5e4"}}>
                <span style={{fontSize:"13.5px",color:"#57534e"}}>{t.title}</span>
                <button onClick={() => removeTask(t.id)} style={{background:"none",border:"none",color:"#a8a29e",cursor:"pointer",fontSize:"11px",fontFamily:"inherit"}}>✕ Clear</button>
              </li>
            ))}
          </ul>
        )
      }
    </div>
  );
}

export default PMSelectedProject;
