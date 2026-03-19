import React from 'react';

function PMInput({ label, textarea, inputRef, ...props }) {
  return (
    <p style={{display:"flex",flexDirection:"column",gap:"4px",margin:"16px 0"}}>
      <label style={{fontSize:"12px",fontWeight:"bold",textTransform:"uppercase",color:"#78716c"}}>{label}</label>
      {textarea
        ? <textarea ref={inputRef} style={{width:"100%",padding:"4px",borderBottom:"2px solid #d6d3d1",background:"#e7e5e4",color:"#57534e",outline:"none",borderRadius:"2px",minHeight:"80px",resize:"vertical",fontFamily:"inherit"}} {...props}/>
        : <input ref={inputRef} style={{width:"100%",padding:"4px",borderBottom:"2px solid #d6d3d1",background:"#e7e5e4",color:"#57534e",outline:"none",borderRadius:"2px",fontFamily:"inherit"}} {...props}/>
      }
    </p>
  );
}

export default PMInput;
