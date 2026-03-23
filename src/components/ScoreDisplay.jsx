import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import useSound from 'use-sound';

function ScoreDisplay({ score }) {
  // Sound setup
  const [playBoo] = useSound('/sounds/boo.mp3', { volume: 0.5 });
  const [playOk] = useSound('/sounds/ok.mp3', { volume: 0.5 });
  const [playClap] = useSound('/sounds/clap.mp3', { volume: 0.5 });

  const r = 60, circ = 2 * Math.PI * r;
  const fill = circ - (score / 100) * circ;

  // Determine feedback based on score ranges: 0-39, 40-69, 70-100
  let clr, emojis, msg, title, soundEffect;

  if (score <= 39) {
    clr = "#f87171"; // Red
    emojis = "😩";
    title = "Keep Studying!";
    msg = "Take time to re-read the concepts before moving on.";
    soundEffect = playBoo;
  } else if (score <= 69) {
    clr = "#60a5fa"; // Blue
    emojis = "🙂";
    title = "Good Work!";
    msg = "Good work! Review any sections you weren't sure about.";
    soundEffect = playOk;
  } else {
    clr = "#34d399"; // Green
    emojis = "🎉✨";
    title = "Excellent!";
    msg = "Excellent! You've nailed this session's content.";
    soundEffect = playClap;
  }

  useEffect(() => {
    // Trigger sound effects on mount
    if (soundEffect) soundEffect();

    // Trigger confetti ONLY for Excellent scores (70+)
    if (score >= 70) {
      const duration = 3 * 1000;
      const end = Date.now() + duration;

      const frame = () => {
        confetti({
          particleCount: 2,
          angle: 270,
          spread: 160,
          origin: { x: Math.random(), y: -0.1 },
          colors: [clr, '#ffffff', '#fbbf24'],
          gravity: 0.8,
          scalar: 1.2,
          drift: 0,
        });

        if (Date.now() < end) {
          requestAnimationFrame(frame);
        }
      };
      frame();
    }
  }, [score, soundEffect, clr]);

  // Screen shake animation variants
  const shakeVariants = {
    shake: {
      x: [0, -10, 10, -10, 10, -5, 5, 0],
      transition: { duration: 0.5 }
    }
  };

  return (
    <motion.div 
      className="score-wrap"
      variants={shakeVariants}
      animate="shake"
      style={{ overflow: 'hidden', position: 'relative' }}
    >
      <div className="ring-wrap">
        <svg className="ring-svg" viewBox="0 0 148 148">
          <circle className="ring-bg" cx="74" cy="74" r={r}/>
          <motion.circle 
            className="ring-fg" 
            cx="74" 
            cy="74" 
            r={r}
            stroke={clr}
            strokeDasharray={circ}
            initial={{ strokeDashoffset: circ }}
            animate={{ strokeDashoffset: fill }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />
        </svg>
        <div className="ring-text-inner">
          <motion.span 
            className="ring-val" 
            style={{color:clr}}
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5, type: "spring" }}
          >
            {score}
          </motion.span>
          <span className="ring-sub">/100</span>
        </div>
      </div>
      
      <motion.div 
        className="score-title"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <span style={{ fontSize: '1.5em', marginRight: '8px' }}>{emojis}</span> 
        {title}
      </motion.div>
      
      <motion.p 
        className="score-msg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        {msg}
      </motion.p>
    </motion.div>
  );
}

export default ScoreDisplay;
