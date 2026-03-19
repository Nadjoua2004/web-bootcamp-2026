import React from 'react';
import Icon from './Icon';

function Block({ b }) {
  switch(b.t) {
    case "text":  return <p className="c-text">{b.v}</p>;
    case "sub":   return <p className="c-subh">{b.v}</p>;
    case "hi":    return <div className="c-hi"><Icon name="Lightbulb" size={18} style={{marginTop:"3px",flexShrink:0}} /><span>{b.v}</span></div>;
    case "warn":  return <div className="c-warn"><Icon name="AlertTriangle" size={18} style={{marginTop:"3px",flexShrink:0}} /><span>{b.v}</span></div>;
    case "steps": return (
      <div className="c-steps">
        {b.v.map((s,i) => (
          <div className="c-step-row" key={i}>
            <span className="c-step-n">{i+1}</span><span>{s}</span>
          </div>
        ))}
      </div>
    );
    case "code": return (
      <div className="code-wrap">
        <span className="code-lang">{b.lang}</span>
        <pre>{b.v}</pre>
      </div>
    );
    case "table": return (
      <div style={{overflowX:"auto",margin:"12px 0"}}>
        <table className="data-tbl">
          <thead><tr>{b.hdrs.map((h,i) => <th key={i}>{h}</th>)}</tr></thead>
          <tbody>{b.rows.map((r,i) => <tr key={i}>{r.map((c,j) => <td key={j}>{c}</td>)}</tr>)}</tbody>
        </table>
      </div>
    );
    default: return null;
  }
}

export default Block;
