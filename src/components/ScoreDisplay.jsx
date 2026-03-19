import React from 'react';

function ScoreDisplay({ score }) {
  const r = 60, circ = 2 * Math.PI * r;
  const fill = circ - (score / 100) * circ;
  const clr = score >= 80 ? "#34d399" : score >= 50 ? "#60a5fa" : "#f87171";
  const emoji = score >= 80 ? "🏆" : score >= 50 ? "👍" : "📚";
  const msg = score >= 80 ? "Excellent! You've nailed this session's content."
    : score >= 50 ? "Good work! Review any sections you weren't sure about."
    : "Take time to re-read the concepts before moving on.";

  return (
    <div className="score-wrap">
      <div className="ring-wrap">
        <svg className="ring-svg" viewBox="0 0 148 148">
          <circle className="ring-bg" cx="74" cy="74" r={r}/>
          <circle className="ring-fg" cx="74" cy="74" r={r}
            stroke={clr}
            strokeDasharray={circ}
            strokeDashoffset={fill}/>
        </svg>
        <div className="ring-text-inner">
          <span className="ring-val" style={{color:clr}}>{score}</span>
          <span className="ring-sub">/100</span>
        </div>
      </div>
      <div className="score-title">{emoji} {score >= 80 ? "Excellent!" : score >= 50 ? "Good Work!" : "Keep Studying!"}</div>
      <p className="score-msg">{msg}</p>
    </div>
  );
}

export default ScoreDisplay;
