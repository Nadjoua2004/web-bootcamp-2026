import React from 'react';

function PMButton({ children, variant = "stone", ...props }) {
  const cls = variant === "dark"
    ? "px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-900 text-sm cursor-pointer border-none"
    : "px-4 py-2 text-xs rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100 cursor-pointer border-none";
  return <button className={cls} style={{fontFamily:"inherit"}} {...props}>{children}</button>;
}

export default PMButton;
