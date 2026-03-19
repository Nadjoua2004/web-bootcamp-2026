import React, { useState } from 'react';
import Icon from './Icon';
import ScoreDisplay from './ScoreDisplay';

function QuizPanel({ quiz }) {
  const [phase, setPhase] = useState("start");
  const [cur, setCur] = useState(0);
  const [ans, setAns] = useState({});
  const [score, setScore] = useState(0);

  const totalPts = quiz.questions.reduce((s,q) => s + q.pts, 0);
  const answered = Object.keys(ans).length;

  function start() { setCur(0); setAns({}); setScore(0); setPhase("taking"); }

  function submit() {
    let s = 0;
    quiz.questions.forEach(q => { if (ans[q.id] === q.correct) s += q.pts; });
    setScore(Math.round((s / totalPts) * 100));
    setPhase("done");
  }

  if (!quiz.enabled) return (
    <div className="quiz-locked-box">
      <div className="quiz-locked-icon"><Icon name="Lock" size={40} color="#404040" /></div>
      <div className="quiz-locked-txt">This quiz is <strong>disabled</strong> by the instructor.<br/>Check back later or ask your instructor to activate it.</div>
    </div>
  );

  if (quiz.questions.length === 0) return (
    <div className="quiz-locked-box">
      <div className="quiz-locked-icon"><Icon name="FileQuestion" size={40} color="#404040" /></div>
      <div className="quiz-locked-txt">No questions found for this session yet.</div>
    </div>
  );

  if (phase === "start") return (
    <div className="quiz-start-box">
      <div className="quiz-start-h">Knowledge Check</div>
      <p className="quiz-start-s">Verify your understanding of this session's concepts.</p>
      <div className="quiz-stats-row">
        <div style={{textAlign:"center"}}>
          <span className="qstat-val">{quiz.questions.length}</span>
          <span className="qstat-lbl">Questions</span>
        </div>
        <div style={{textAlign:"center"}}>
          <span className="qstat-val">{totalPts}</span>
          <span className="qstat-lbl">Points</span>
        </div>
      </div>
      <button className="btn-primary-blue" onClick={start} style={{width:"100%"}}>Start Quiz</button>
    </div>
  );

  if (phase === "done") return (
    <div style={{animation: "slideUp 0.4s ease-out"}}>
      <ScoreDisplay score={score} />
      <button className="btn-stone" style={{width:"100%",marginTop:"24px"}} onClick={start}>Retake Quiz</button>
    </div>
  );

  const q = quiz.questions[cur];
  const pct = Math.round(((cur + 1) / quiz.questions.length) * 100);

  return (
    <div className="quiz-taking-box">
      <div className="prog-wrap">
        <div className="prog-labels">
          <span>PROGRESS</span>
          <span>{pct}%</span>
        </div>
        <div className="prog-track">
          <div className="prog-fill" style={{width:`${pct}%`}}/>
        </div>
      </div>

      <div className="q-num-row">
        <div className="q-num-lbl">Question {cur + 1}</div>
        <div className="q-pts">{q.pts} PTS</div>
      </div>
      <div className="q-text">{q.text}</div>
      
      <div className="opts-list">
        {q.opts.map((o,i) => (
          <div key={i} 
            className={`opt-btn ${ans[q.id] === i ? "sel" : ""}`}
            onClick={() => setAns(a => ({...a, [q.id]: i}))}
          >
            <div className="opt-ltr">{String.fromCharCode(65 + i)}</div>
            <span>{o}</span>
          </div>
        ))}
      </div>

      <div className="quiz-nav-row">
        <div className="q-dots">
          {quiz.questions.map((_,i) => (
            <div key={i} 
              className={`q-dot ${i===cur?"cur":""} ${ans[quiz.questions[i].id]!==undefined?"ans":""}`} 
              onClick={()=>setCur(i)}
            />
          ))}
        </div>
        <div style={{display:"flex",gap:"12px"}}>
          {cur > 0 && <button className="btn-stone" onClick={()=>setCur(c=>c-1)}>Back</button>}
          {cur < quiz.questions.length-1
            ? <button className="btn-primary-blue" onClick={()=>setCur(c=>c+1)} disabled={ans[q.id]===undefined}>Next</button>
            : <button className="btn-primary-blue" onClick={submit} disabled={answered < quiz.questions.length}>Complete</button>
          }
        </div>
      </div>
    </div>
  );
}

export default QuizPanel;
