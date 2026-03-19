import React, { useRef, useState } from 'react';
import PMButton from './PMButton';
import PMInput from './PMInput';

function PMNewProject({ onAdd, onCancel }) {
  const titleRef = useRef();
  const descRef  = useRef();
  const dateRef  = useRef();
  const [err, setErr] = useState('');

  function handleSave() {
    const title = titleRef.current.value.trim();
    const desc  = descRef.current.value.trim();
    const date  = dateRef.current.value.trim();
    if (!title || !desc || !date) { setErr('Please fill in all fields.'); return; }
    onAdd({ title, description: desc, duedate: date });
    setErr('');
  }

  return (
    <div style={{width:"520px",marginTop:"48px",padding:"0 8px"}}>
      <menu style={{display:"flex",alignItems:"center",justifyContent:"flex-end",gap:"12px",marginBottom:"12px",listStyle:"none",padding:0}}>
        <li><button onClick={onCancel} style={{background:"none",border:"none",color:"#a8a29e",cursor:"pointer",fontSize:"14px",fontFamily:"inherit"}}>Cancel</button></li>
        <li><PMButton variant="dark" onClick={handleSave}>Save</PMButton></li>
      </menu>
      {err && <p style={{color:"#ef4444",fontSize:"13px",marginBottom:"8px"}}>{err}</p>}
      <PMInput label="Title" inputRef={titleRef} type="text" />
      <PMInput label="Description" inputRef={descRef} textarea />
      <PMInput label="Due Date" inputRef={dateRef} type="date" />
    </div>
  );
}

export default PMNewProject;
