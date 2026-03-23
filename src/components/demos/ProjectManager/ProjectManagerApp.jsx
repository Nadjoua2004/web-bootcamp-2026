import React, { useState } from 'react';
import PMSidebar from './PMSidebar';
import PMNewProject from './PMNewProject';
import PMNoProject from './PMNoProject';
import PMSelectedProject from './PMSelectedProject';

function ProjectManagerApp() {
  const [state, setState] = useState({ selectedId: undefined, projects: [] });

  function startAdd() { setState(s => ({...s, selectedId: null})); }
  function select(id)  { setState(s => ({...s, selectedId: id})); }
  function cancel()    { setState(s => ({...s, selectedId: undefined})); }
  function addProject(data) {
    setState(s => ({
      ...s,
      selectedId: undefined,
      projects: [...s.projects, { ...data, id: Math.random() }]
    }));
  }

  const selected = state.projects.find(p => p.id === state.selectedId);
  let main;
  if (state.selectedId === null) main = <PMNewProject onAdd={addProject} onCancel={cancel}/>;
  else if (state.selectedId === undefined) main = <PMNoProject onAdd={startAdd}/>;
  else main = <PMSelectedProject project={selected}/>;

  return (
    <div className="pm-app">
      <PMSidebar
        projects={state.projects}
        selectedId={state.selectedId}
        onSelect={select}
        onAdd={startAdd}
      />
      <div className="pm-main">
        {main}
      </div>
    </div>
  );
}

export default ProjectManagerApp;
