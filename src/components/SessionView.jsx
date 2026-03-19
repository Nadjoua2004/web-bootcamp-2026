import React from 'react';
import Icon from './Icon';
import SectionCard from './SectionCard';
import QuizPanel from './QuizPanel';
import ProjectManagerApp from './demos/ProjectManager/ProjectManagerApp';

function SessionView({ session }) {
  const isW1D1 = session.id === 1;
  return (
    <>
      <div className="day-hero">
        <div className="hero-tag">{session.tag}</div>
        <div className="hero-h1">{session.title}</div>
        <p className="hero-sub">{session.type === "onsite" ? "Onsite Session" : "Online Session"} · {session.duration} · {session.topics.length} Key Topics</p>
        <div className="hero-chips">
          <span className="hchip hchip-blue">
            <Icon name="Book" size={12} style={{marginRight:"6px"}} />
            {session.sections.filter(s => s.type === "concept").length} Topics
          </span>
          {session.sections.some(s => s.type === "coding") && (
            <span className="hchip hchip-green">
              <Icon name="Code" size={12} style={{marginRight:"6px"}} />
              Practical
            </span>
          )}
          {session.quiz.enabled && (
             <span className="hchip hchip-amber">
               <Icon name="CheckCircle" size={12} style={{marginRight:"6px"}} />
               Quiz Active
             </span>
          )}
        </div>
      </div>

      <div className="s-card" style={{marginBottom:"12px"}}>
        <div className="s-head" style={{cursor:"default"}}>
          <div className="s-icon icon-blue"><Icon name="List" size={18} /></div>
          <span className="s-title">Session Topics</span>
        </div>
        <div className="s-body">
          {session.topics.map((t,i) => (
            <div key={i} style={{display:"flex",gap:"10px",alignItems:"flex-start",marginBottom:"6px",fontSize:"13.5px",color:"#a3a3a3"}}>
              <span style={{color:"#3b82f6",fontFamily:"'JetBrains Mono',monospace",fontSize:"10px",minWidth:"18px",paddingTop:"3px"}}>{i+1}.</span>
              <span>{t}</span>
            </div>
          ))}
        </div>
      </div>

      {session.sections.map((sec,i) => (
        <SectionCard key={i} section={sec} defaultOpen={i === 0}/>
      ))}

      {isW1D1 && (
        <div className="s-card" style={{marginTop:"32px"}}>
          <div className="s-head" style={{cursor:"default"}}>
            <div className="s-icon icon-green"><Icon name="Wrench" size={18} /></div>
            <span className="s-title">Live Demo — Project Manager App</span>
            <span style={{fontSize:"10px",fontFamily:"'JetBrains Mono',monospace",padding:"2px 8px",background:"rgba(52,211,153,.1)",border:"1px solid rgba(52,211,153,.2)",color:"#34d399",borderRadius:"4px"}}>LIVE</span>
          </div>
          <div className="s-body" style={{paddingTop:"16px"}}>
            <p className="c-text" style={{marginBottom:"20px"}}>This is a **live React application** demonstrating the core features you will build this week. Explore the components and state management in action.</p>
            <ProjectManagerApp/>
          </div>
        </div>
      )}

      <div className="quiz-card">
        <div className="quiz-card-head">
          <div className="s-icon" style={{background:"rgba(245,158,11,.08)",border:"1px solid rgba(245,158,11,.2)",width:"32px",height:"32px",borderRadius:"7px",display:"flex",alignItems:"center",justifyContent:"center"}}><Icon name="FileText" size={16} color="#f59e0b" /></div>
          <span className="s-title">Session Quiz</span>
        </div>
        <div className="quiz-body">
          <QuizPanel quiz={session.quiz}/>
        </div>
      </div>
    </>
  );
}

export default SessionView;
