export const ADMIN_PW = "mern2026";

export const SESSIONS = [
  /* ── W1 D1 ── */
  {
    id:1, week:1, type:"onsite", slug:"w1d1", icon: "Code",
    title:"Core React Basics", duration:"5–6 Hours", tag:"Week 1 · Day 1",
    topics:[
      "Virtual DOM concept & why React is faster",
      "Environment setup: Node.js, Vite",
      "Project structure: src / components / pages / assets",
      "JSX syntax & embedding JavaScript",
      "Functional components & component reuse"
    ],
    sections:[
      {
        type:"concept", title:"Introduction to Node & React",
        content:[
          {t:"text", v:"Node.js is a JavaScript runtime built on Chrome's V8 engine. Before Node, JavaScript could only run inside browsers. Node allows JavaScript to run anywhere, enabling powerful tools like Vite and backend servers."},
          {t:"sub", v:"What is React & Why use it?"},
          {t:"text", v:"Created by Facebook (Meta) in 2013, React is a JavaScript library for building user interfaces. It revolutionized web development with its unique approach:"},
          {t:"steps", v:["Declarative UI: Describe what the UI should look like for a given state, and React figures out how to update the DOM efficiently.","Component-Based: Build encapsulated components that manage their own state, then compose them into complex UIs.","State Management: React tracks 'state'—data that changes over time—and automatically re-renders components when state updates."]},
          {t:"sub", v:"Trusted by Top Companies"},
          {t:"html", v:"<div style='display:flex;gap:16px;align-items:center;margin:12px 0;opacity:0.8;font-weight:bold;font-size:18px;'><span><i class='fab fa-meta'></i> Meta</span><span><i class='fab fa-instagram'></i> Instagram</span><span><i class='fab fa-airbnb'></i> Airbnb</span><span>Netflix</span><span>Uber</span></div>"},
          {t:"sub", v:"How it Works: Real DOM vs Virtual DOM"},
          {t:"text", v:"The browser's Document Object Model (DOM) is a tree representation of the HTML page. Updating the Real DOM directly is slow because it causes layout recalculations and repaints."},
          {t:"text", v:"React uses a lightweight, in-memory copy called the Virtual DOM. When state changes, React updates the Virtual DOM first, compares it to the previous version (Diffing), and applies only the necessary changes to the Real DOM (Reconciliation)."},
          {t:"img", url:"/virtual_dom.png", alt:"Virtual DOM vs Real DOM Illustration"}
        ]
      },
      {
        type:"concept", title:"Environment Setup with Vite",
        content:[
          {t:"sub", v:"Step 1 — Install Node.js"},
          {t:"text", v:"Node.js is the JavaScript runtime that powers React's development tools and npm (Node Package Manager). Download the LTS version from nodejs.org."},
          {t:"code", lang:"bash", v:"node --version   # Should print v20.x.x\nnpm --version    # Should print 10.x.x"},
          {t:"sub", v:"npm vs yarn vs pnpm"},
          {t:"text", v:"While installing dependencies, you might hear about different package managers:"},
          {t:"table", hdrs:["Manager","Description"], rows:[["npm","Node Package Manager. The default that comes with Node.js. It's solid, reliable, and widely used."],["yarn","Created by Facebook to fix early performance and security issues in npm. Still very popular."],["pnpm","Performant npm. It creates a global store of packages and uses hard links to save massive amounts of disk space and install time. Highly recommended for advanced users!"]]},
          {t:"sub", v:"Step 2 — Create a React Project with Vite"},
          {t:"text", v:"Vite (French for 'fast') is the modern build tool that replaces Create React App. Why Vite? Moreso than ever, speed matters:"},
          {t:"steps", v:["Fast Server Start: Starts in milliseconds because it serves files instantly using native ES Modules.","HMR (Hot Module Replacement): Edits to your code update the browser instantly. The app's state is preserved without a full page reload!","No Bulky Bundling in Dev: It avoids bundling the entire application during development. Building is done only for production."]},
          {t:"code", lang:"bash", v:"npm create vite@latest project-manager -- --template react\ncd project-manager\nnpm install\nnpm run dev"},
          {t:"hi", v:"Vite's dev server runs on http://localhost:5173. Every time you save a file, the browser reflects the change instantly."},
          {t:"sub", v:"Recommended Project Structure"},
          {t:"text", v:"A typical React project structured for scalability might look like this screenshot:"},
          {t:"code", lang:"text", v:"src/\n  assets/       ← images, icons, global CSS\n  components/   ← reusable generic UI pieces (buttons, inputs)\n  pages/        ← full-page views associated with routes\n  hooks/        ← custom reusable React logic\n  services/     ← API calls and external integrations\n  utils/        ← plain JavaScript helper functions\n  App.jsx       ← root component containing primary layout\n  main.jsx      ← entry point that attaches React to the DOM"},
          {t:"text", v:"Each folder has a specific role in the application, keeping your codebase organized as it grows."}
        ]
      },
      {
        type:"concept", title:"JSX — JavaScript XML Syntax",
        content:[
          {t:"text", v:"JSX is a syntax extension for React. Under the hood, it compiles directly to plain JS objects using `React.createElement()`. We use JSX because writing bare JS objects to build UIs is extremely verbose and difficult to visually parse."},
          {t:"table", hdrs:["HTML","JSX"], rows:[["class=\"box\"","className=\"box\""],["for=\"email\"","htmlFor=\"email\""],["<img>","<img /> (always self-close)"],["style=\"color:red\"","style={{ color: 'red' }}"],["<!-- comment -->","{/* comment */}"]]},
          {t:"sub", v:"Embedding JavaScript Expressions"},
          {t:"text", v:"You can embed ANY valid JavaScript expression inside JSX using curly braces `{}`. This brings the full power of JavaScript directly into your UI templating."},
          {t:"code", lang:"jsx", v:"function DeliveryTracker() {\n  const courier = 'Alice';\n  const isDelivered = false;\n  const items = 5;\n\n  // Using an external function for calculations\n  const formatEstimate = (mins) => `${mins} minutes`;\n\n  return (\n    <div className=\"tracker-card\">\n      <h3>Courier: {courier.toUpperCase()}</h3>  {/* calling JS string methods */}\n      <p>Items: {items * 2}</p>       {/* expressions */}\n      \n      {/* conditional rendering via ternary operator */}\n      <span className={isDelivered ? 'badge-good' : 'badge-warn'}>\n        {isDelivered ? 'Delivered' : 'En Route'}\n      </span>\n\n      <p>ETA {formatEstimate(15)}</p> {/* calling a function */}\n    </div>\n  );\n}"},
          {t:"warn", v:"You cannot use purely structural JS statements like `if/else`, `switch`, or `for` loops directly inside the JSX return block. Always use expressions: ternaries (`a ? b : c`) or logical AND (`condition && <Element />`) for logic inside JSX."}
        ]
      },
      {
        type:"concept", title:"Functional Components",
        content:[
          {t:"text", v:"A component is an independent, reusable piece of UI. Think of them like LEGO blocks — each block does one thing, and you combine them to build the complete interface."},
          {t:"code", lang:"jsx", v:"// components/TaskCard.jsx\nfunction TaskCard() {\n  return (\n    <div className=\"task-card\">\n      <h3>Build login page</h3>\n      <p>Status: In Progress</p>\n    </div>\n  );\n}\nexport default TaskCard;"},
          {t:"sub", v:"Composition — building with blocks"},
          {t:"code", lang:"jsx", v:"import TaskCard from './TaskCard';\n\nfunction TaskList() {\n  return (\n    <div>\n      <TaskCard />\n      <TaskCard />\n      <TaskCard />\n    </div>\n  );\n}"},
          {t:"hi", v:"Golden rule: every component should do ONE thing well. A Header renders navigation. A TaskCard renders a single task. Small, focused components are easy to reuse and test."}
        ]
      },
      {
        type:"coding", title:"Practical Lab — Project Manager UI: Base Components",
        goals:"Set up the Vite project and build the shell of the Project Manager application featuring a sign-in screen and a home view. Practice composition without state.",
        steps:[
          "Create 'src/components/' folder. Add 'SignInPage.jsx' and 'HomePage.jsx'.",
          "Copy the layout code for 'SignInPage' below. Note the inline CSS exactly matches our demo.",
          "Assemble components inside 'src/App.jsx' to view them."
        ],
        content:[
           {t:"sub", v:"SignInPage Component Code"},
           {t:"code", lang:"jsx", v:"// src/components/SignInPage.jsx\nexport default function SignInPage({ onSignIn }) {\n  return (\n    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', background: '#0a0a0a' }}>\n      <div style={{ background: '#1c1917', border: '1px solid #292524', borderRadius: '12px', padding: '32px', width: '100%', maxWidth: '380px', color: '#e7e5e4' }}>\n        <h2 style={{ fontSize: '24px', fontWeight: '600', marginBottom: '24px', textAlign: 'center' }}>Sign In to PM</h2>\n        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>\n          <p style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>\n            <label style={{ fontSize: '12px', fontWeight: 'bold', textTransform: 'uppercase', color: '#78716c' }}>Email Address</label>\n            <input \n              type=\"email\" \n              placeholder=\"name@company.com\"\n              style={{ width: '100%', padding: '8px', borderBottom: '2px solid #d6d3d1', background: '#e7e5e4', color: '#57534e', outline: 'none', borderRadius: '2px', fontFamily: 'inherit' }}\n            />\n          </p>\n          <p style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>\n             <label style={{ fontSize: '12px', fontWeight: 'bold', textTransform: 'uppercase', color: '#78716c' }}>Password</label>\n             <input \n              type=\"password\" \n              style={{ width: '100%', padding: '8px', borderBottom: '2px solid #d6d3d1', background: '#e7e5e4', color: '#57534e', outline: 'none', borderRadius: '2px', fontFamily: 'inherit' }}\n            />\n          </p>\n          <button \n            onClick={onSignIn}\n            style={{ marginTop: '16px', padding: '10px 24px', borderRadius: '6px', background: '#292524', color: '#fafaf9', border: 'none', cursor: 'pointer', fontFamily: 'inherit', fontWeight: 'bold' }}\n          >\n            Sign In\n          </button>\n        </div>\n      </div>\n    </div>\n  );\n}"},
           {t:"sub", v:"HomePage Component Code"},
           {t:"code", lang:"jsx", v:"// src/components/HomePage.jsx\nexport default function HomePage({ onSignOut }) {\n  return (\n    <div style={{ minHeight: '100vh', background: '#0a0a0a', color: '#e7e5e4', display: 'flex', flexDirection: 'column' }}>\n      <header style={{ borderBottom: '1px solid #292524', background: '#1c1917', padding: '16px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>\n        <h1 style={{ fontSize: '20px', fontWeight: 'bold', letterSpacing: '1px', textTransform: 'uppercase' }}>Project Manager</h1>\n        <button \n          onClick={onSignOut} \n          style={{ padding: '6px 12px', borderRadius: '4px', background: '#292524', color: '#d6d3d1', border: 'none', cursor: 'pointer', fontFamily: 'inherit', fontSize: '12px', textTransform: 'uppercase' }}\n        >\n          Log Out\n        </button>\n      </header>\n      <main style={{ flex: 1, display: 'flex', width: '100%' }}>\n         <aside style={{ width: '260px', borderRight: '1px solid #292524', padding: '32px 24px' }}>\n            <h2 style={{ marginBottom: '24px', fontWeight: '700', textTransform: 'uppercase', fontSize: '15px', color: '#d6d3d1', letterSpacing: '1px' }}>Your Projects</h2>\n            <button style={{ padding: '8px 16px', fontSize: '13px', borderRadius: '6px', background: '#44403c', color: '#e7e5e4', border: 'none', cursor: 'pointer', fontFamily: 'inherit' }}>+ Add a Project</button>\n         </aside>\n         <section style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>\n             <div style={{ textAlign: 'center' }}>\n               <h2 style={{ fontSize: '24px', color: '#78716c', fontWeight: 'bold', marginBottom: '16px' }}>No Project Selected</h2>\n               <p style={{ color: '#a8a29e' }}>Select a project or get started with a new one</p>\n             </div>\n         </section>\n      </main>\n    </div>\n  );\n}"},
           {t:"sub", v:"Attaching Components in App.jsx"},
           {t:"text", v:"Once created, import these into `App.jsx`. For now, we manually mock navigation without any state hooks (we'll learn that tomorrow). We just define variables and conditionally render!"},
           {t:"code", lang:"jsx", v:"// src/App.jsx\nimport SignInPage from './components/SignInPage';\nimport HomePage from './components/HomePage';\n\nexport default function App() {\n  // Tomorrow, we will turn this into a React state variable `useState(false)`\n  // For today, change this manually to `true` or `false` to see the pages swap!\n  const isLoggedIn = false; \n\n  // This function won't actually trigger a render update until tomorrow\n  const handleSignIn = () => { console.log(\"Signing in...\"); };\n  const handleSignOut = () => { console.log(\"Signing out...\"); };\n\n  if (isLoggedIn) {\n    return <HomePage onSignOut={handleSignOut} />;\n  }\n  return <SignInPage onSignIn={handleSignIn} />;\n}"}
        ]
      }
    ],
    quiz:{
      enabled:true,
      questions:[
        {id:"1a",text:"What problem does React's Virtual DOM primarily solve?",opts:["Storing data in the browser","Reducing unnecessary DOM operations via diffing","Replacing CSS with JavaScript","Managing server-side state"],correct:1,pts:10},
        {id:"1b",text:"Which tool does this bootcamp use to scaffold new React projects?",opts:["Create React App","Webpack CLI","Vite","Parcel"],correct:2,pts:10},
        {id:"1c",text:"What is the correct JSX attribute for applying a CSS class?",opts:["class","className","cssClass","style"],correct:1,pts:10},
        {id:"1d",text:"Which syntax correctly embeds a JavaScript variable in JSX?",opts:["{{name}}","${name}","{name}","[[name]]"],correct:2,pts:10},
        {id:"1e",text:"React component function names must start with:",opts:["A lowercase letter","An uppercase letter","The word 'React'","An underscore"],correct:1,pts:10},
        {id:"1f",text:"What is 'diffing' in React's reconciliation process?",opts:["Splitting a component","Comparing old vs new Virtual DOM to find changes","Styling components differently","Deleting unused state"],correct:1,pts:10},
        {id:"1g",text:"Vite's development server runs by default on port:",opts:["3000","8080","5173","4200"],correct:2,pts:10},
        {id:"1h",text:"Which is correct for conditional rendering inside JSX?",opts:["if(show){<p>Hi</p>}","{show ? <p>Hi</p> : null}","<if show><p>Hi</p></if>","show.render(<p>Hi</p>)"],correct:1,pts:10},
        {id:"1i",text:"Which file is the JavaScript entry point in a Vite React project?",opts:["index.js","App.jsx","main.jsx","entry.js"],correct:2,pts:10},
        {id:"1j",text:"Which folder holds reusable UI building blocks?",opts:["src/pages/","src/assets/","src/components/","src/utils/"],correct:2,pts:10}
      ]
    }
  },

  /* ── W1 D2 ── */
  {
    id:2, week:1, type:"onsite", slug:"w1d2", icon: "Layers",
    title:"State, Props & Interaction", duration:"5–6 Hours", tag:"Week 1 · Day 2",
    topics:["Props — passing data between components","useState Hook — state management basics","Event handling: click and form events","Controlled forms with useState"],
    sections:[
      {
        type:"concept", title:"Props — Passing Data Between Components",
        content:[
          {t:"text", v:"Props (short for properties) let you pass data from a parent component down to a child. Without props, every TaskCard would show identical hardcoded content. With props, the same component renders different data depending on what its parent provides."},
          {t:"code", lang:"jsx", v:"// Parent — passes props as HTML-style attributes\n<TaskCard title=\"Build login page\" status=\"In Progress\" priority=\"High\" />\n<TaskCard title=\"Design database\" status=\"Done\" priority=\"Low\" />\n\n// Child — receives via destructuring\nfunction TaskCard({ title, status, priority }) {\n  return (\n    <div>\n      <h3>{title}</h3>\n      <span>{status}</span>\n      <span>{priority}</span>\n    </div>\n  );\n}"},
          {t:"hi", v:"Props flow ONE direction: parent → child. A child can never modify its props — they are read-only. This 'unidirectional data flow' makes React apps predictable and much easier to debug."},
          {t:"sub", v:"Default Prop Values"},
          {t:"code", lang:"jsx", v:"// Fallback values if parent doesn't pass them\nfunction TaskCard({ title = 'Untitled Task', status = 'Todo' }) {\n  return <div><h3>{title}</h3><p>{status}</p></div>;\n}"}
        ]
      },
      {
        type:"concept", title:"useState — Managing State",
        content:[
          {t:"text", v:"State is data that belongs to a component and can change over time. When state changes, React automatically re-renders the component to reflect the new data. useState is the Hook that creates this reactive data."},
          {t:"code", lang:"jsx", v:"import { useState } from 'react';\n\nfunction Counter() {\n  const [count, setCount] = useState(0);  // [currentValue, setter]\n\n  return (\n    <div>\n      <p>Count: {count}</p>\n      <button onClick={() => setCount(count + 1)}>+</button>\n      <button onClick={() => setCount(0)}>Reset</button>\n    </div>\n  );\n}"},
          {t:"warn", v:"Never mutate state directly: count = count + 1 does NOT trigger a re-render. Always call the setter function: setCount(count + 1)."},
          {t:"sub", v:"Arrays in State — Immutability"},
          {t:"code", lang:"jsx", v:"const [tasks, setTasks] = useState([]);\n\n// ✅ Correct — spread creates a new array\nsetTasks([...tasks, newTask]);\n\n// ✅ Remove by id\nsetTasks(tasks.filter(t => t.id !== targetId));\n\n// ❌ Wrong — mutates existing array, no re-render\ntasks.push(newTask);"}
        ]
      },
      {
        type:"concept", title:"Event Handling & Controlled Forms",
        content:[
          {t:"text", v:"React uses camelCase event names (onClick, onChange, onSubmit). A controlled form stores every input value in state — state is the single source of truth."},
          {t:"code", lang:"jsx", v:"function TaskForm({ onAdd }) {\n  const [title, setTitle] = useState('');\n\n  function handleSubmit(e) {\n    e.preventDefault();          // stop browser page reload\n    if (!title.trim()) return;   // basic validation\n    onAdd({ id: Date.now(), title, status: 'Todo' });\n    setTitle('');                // clear after submit\n  }\n\n  return (\n    <form onSubmit={handleSubmit}>\n      <input\n        value={title}\n        onChange={(e) => setTitle(e.target.value)}\n        placeholder=\"New task...\"\n      />\n      <button type=\"submit\">Add</button>\n    </form>\n  );\n}"},
          {t:"warn", v:"Write onClick={handleClick} — no parentheses. Writing onClick={handleClick()} calls the function immediately on render, not on click. Always pass the reference, not the return value."}
        ]
      },
      {
        type:"coding", title:"Practical — Project Manager: Task Form & List",
        goals:"Extend the Project Manager UI so users can type a task title, click Save, and see the new task appear in the list — all managed with useState.",
        steps:["Add a tasks state array in App.jsx with useState([])",  "Create TaskForm.jsx with a controlled input (value + onChange) and onSubmit handler","On submit call the onAdd prop callback to add the task to the parent state","Use tasks.map() in TaskList.jsx to render a TaskCard for each task","Pass task.title and task.status as props to each TaskCard","Add a unique key={task.id} to each mapped element","Style the form and list to match the stone-900 theme of the sidebar"]
      }
    ],
    quiz:{
      enabled:true,
      questions:[
        {id:"2a",text:"Props in React are best described as:",opts:["Mutable internal component data","Read-only data passed parent → child","Data stored in localStorage","CSS properties for components"],correct:1,pts:10},
        {id:"2b",text:"What does e.preventDefault() do in a form handler?",opts:["Clears all fields","Prevents full browser page reload on submit","Validates the data","Stops onClick from firing"],correct:1,pts:10},
        {id:"2c",text:"A 'controlled input' means the input's value is:",opts:["Disabled and read-only","Always derived from React state","Validated automatically","Rendered by a parent component"],correct:1,pts:10},
        {id:"2d",text:"The correct way to add an item to an array in state is:",opts:["tasks.push(newTask); setTasks(tasks);","setTasks([...tasks, newTask]);","tasks[tasks.length] = newTask;","setState(tasks.add(newTask));"],correct:1,pts:10},
        {id:"2e",text:"The correct useState declaration syntax is:",opts:["let [c,setC] = useState(0);","const c = useState(0);","const [c,setC] = useState(0);","var [c] = useState(0);"],correct:2,pts:10},
        {id:"2f",text:"The key prop on mapped elements is needed because:",opts:["All components need keys","React uses it to efficiently track/update list items","It's required for styled-components","Keys replace IDs in HTML"],correct:1,pts:10},
        {id:"2g",text:"Calling setCount(count + 1) will:",opts:["Mutate count directly","Schedule a re-render with the new value","Save to localStorage","Send data to the server"],correct:1,pts:10},
        {id:"2h",text:"Which event fires when a user types in an input?",opts:["onClick","onFocus","onChange","onBlur"],correct:2,pts:10},
        {id:"2i",text:"Data flow in React is:",opts:["Bidirectional","Child → parent only","Parent → child (unidirectional)","Global to all components equally"],correct:2,pts:10},
        {id:"2j",text:"The second element returned by useState is:",opts:["The initial value","A setter function that triggers re-render","The previous state","A boolean"],correct:1,pts:10}
      ]
    }
  },

  /* ── W1 D3 ── */
  {
    id:3, week:1, type:"onsite", slug:"w1d3", icon: "Route",
    title:"Refs, State Routing & Advanced React", duration:"5–6 Hours", tag:"Week 1 · Day 3",
    topics:[
      "useEffect — side effects and data fetching",
      "useRef & forwardRef — accessing DOM elements natively",
      "Conditional rendering & loading states",
      "Lists and keys — rendering arrays",
      "State-based routing vs React Router",
      "Building the Project Management forms"
    ],
    sections:[
      {
        type:"concept", title:"useRef & forwardRef",
        content:[
          {t:"text", v:"While useState is great for values that trigger re-renders, sometimes you need to store values that SHOULDN'T trigger re-renders, or directly access DOM elements like an input field. This is where useRef comes in."},
          {t:"code", lang:"jsx", v:"import { useRef } from 'react';\n\nfunction TextInput() {\n  const inputEl = useRef(null);\n  const onButtonClick = () => { inputEl.current.focus(); };\n  return (\n    <>\n      <input ref={inputEl} type=\"text\" />\n      <button onClick={onButtonClick}>Focus the input</button>\n    </>\n  );\n}"},
          {t:"warn", v:"Updating `ref.current` does NOT trigger a re-render. Only use refs for reading values or direct DOM manipulation, not for values that affect the visual output."},
          {t:"text", v:"When you create a custom component and want it to receive a ref from its parent, you cannot just use a `ref` prop normally. You must wrap your component in `forwardRef`."},
          {t:"code", lang:"jsx", v:"import { forwardRef } from 'react';\n\nconst Input = forwardRef(function Input({ label, ...props }, ref) {\n  return (\n    <>\n      <label>{label}</label>\n      <input ref={ref} {...props} />\n    </>\n  );\n});\nexport default Input;"}
        ]
      },
      {
        type:"concept", title:"Conditional Rendering & Lists",
        content:[
          {t:"sub", v:"Three conditional rendering patterns"},
          {t:"code", lang:"jsx", v:"// 1. Ternary — choose between two options\n{isLoggedIn ? <Dashboard /> : <Login />}\n\n// 2. Logical AND — only render when true\n{error && <p className=\"error\">{error}</p>}\n\n// 3. Early return — cleanest for loading/error states\nif (loading) return <Spinner />;\nif (error)   return <ErrorPage message={error} />;\nreturn <MainContent />;"},
          {t:"sub", v:"Rendering Lists with .map()"},
          {t:"code", lang:"jsx", v:"const projects = [\n  { id: 1, title: 'E-Commerce App' },\n  { id: 2, title: 'Portfolio Site' },\n];\n\nfunction ProjectList() {\n  return (\n    <ul>\n      {projects.map(p => (\n        <li key={p.id}>{p.title}</li>  // key is REQUIRED\n      ))}\n    </ul>\n  );\n}"},
          {t:"warn", v:"Always use a stable, unique id as the key — never the array index. If items reorder or are deleted, using index as key causes React to render elements incorrectly."}
        ]
      },
      {
        type:"concept", title:"State-Based Routing vs React Router",
        content:[
          {t:"text", v:"In a Single Page Application (SPA), routing is the process of deciding what is visible on the screen. We can achieve basic routing purely using React state by conditionally rendering components. We use this in our App.jsx to switch between the 'No Project Selected', 'New Project', and 'Selected Project' views."},
          {t:"code", lang:"jsx", v:"// State-based routing example from our App.jsx:\nlet content = <SelectedProject project={selectedProject} />;\nif(projectsState.selectedProjectId === null){\n  content= <NewProject onAdd={handleAddProject} />\n} else if (projectsState.selectedProjectId === undefined){\n  content= <NoProjectSelected />\n}\n\nreturn <main>{content}</main>;"},
          {t:"text", v:"This approach works well for simple apps, but it doesn't change the URL. Because the URL never changes, users can't bookmark specific pages or use the back button. As an app grows, we use external libraries like React Router to map a URL (e.g., `localhost:5173/projects/new`) to a specific component natively."}
        ]
      },
      {
        type:"concept", title:"useEffect — Side Effects",
        content:[
          {t:"text", v:"React components are pure functions. To reach outside (APIs, timers, manual DOM manipulation), we use useEffect."},
          {t:"code", lang:"jsx", v:"useEffect(() => {\n  fetch('https://api.example.com/data').then(res => res.json()).then(console.log);\n}, []); // Empty array = run only on mount"},
          {t:"warn", v:"If you omit the dependency array, your effect runs on EVERY render, potentially causing infinite loops if state is updated inside."}
        ]
      },
      {
        type:"coding", title:"Practical Lab — Project Manager UI Modules",
        goals:"Handle new projects and the 'no project selected' state using conditional rendering, and implement reusable form inputs using forwardRef.",
        steps:[
          "Create 'Input.jsx' using forwardRef to allow parent components to read its value.",
          "Create 'NewProject.jsx' using useRef to capture form data and validate inputs, showing a Modal if invalid.",
          "Create 'NoProjectSelected.jsx' layout with the empty project image.",
          "Update 'App.jsx' to wire up state so that changing 'selectedProjectId' conditionally renders the correct module."
        ],
        content:[
           {t:"sub", v:"Input Component Code (src/components/Input.jsx)"},
           {t:"code", lang:"jsx", v:"import { forwardRef } from \"react\";\n\nconst Input = forwardRef (function Input ({textarea,label, ...props},ref){\n   const classes= 'w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600';\n    return(\n <p className=\"flex flex-col gap-1 my-4\"  >\n    <label className=\"text-sm font-bold uppercase text-stone-500\">\n        {label}\n    </label>\n   { textarea ? \n   <textarea ref={ref} className={classes} {...props}/>\n    : <input ref={ref} className={classes} {...props}/>}\n </p>\n    );\n});\nexport default Input;"},
           {t:"sub", v:"NewProject Component Code (src/components/NewProject.jsx)"},
           {t:"code", lang:"jsx", v:"import { useRef } from \"react\";\nimport Input from \"./Input\";\nimport Modal from \"./Modal\";\nexport default function NewProject({onAdd, onCancel}){\n    const modal = useRef();\n   const title= useRef();\n   const description= useRef();\n   const duedate =  useRef();\nfunction handleSave (){\nconst entredTitle = title.current.value;\nconst entredDescription = description.current.value;\nconst entredDueDate = duedate.current.value;\n if (\n    entredTitle.trim() === '' ||\n    entredDescription.trim() === '' ||\n    entredDueDate.trim() === '' ) {\n   modal.current.open();\n   return; \n    }\n \nonAdd({\n    title: entredTitle,\n    description: entredDescription,\n    duedate :  entredDueDate \n})\n}\n\n    return (\n  <>\n        <Modal ref={modal} buttonCaption=\"Okay\">\n        <h2 className='text-xl font-bold text-stone-700 my-4'>\n            Invalid Input\n        </h2>\n            <p className='text-stone-600 mb-4'>Oops ... looks like you forget to enter  a value</p>\n            <p className='text-stone-600 mb-4'>Please make sure you provide a valid value for every input field</p>\n            </Modal>\n    <div className=\"w-[35rem] mt-16\">\n   <menu className=\"flex items-center justify-end gap-4 my-4\">\n    <li>\n        <button className=\"text-stone-800 hover:text-stone-950\" onClick={onCancel}>\n            Cancel\n            </button>\n    </li>\n    <li>\n        <button \n        className=\"px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-900\"\n           onClick={handleSave}>\n            Save\n            </button>\n       \n        </li>\n   </menu>\n   <div>\n   <Input type=\"text\" ref={title} label=\"  Title\"/>\n   <Input ref={description} label=\"Description\" textarea={true}/>\n   <Input type=\"date\" ref={duedate} label=\"Due Date\"/>\n   </div>\n\n   </div>\n </>\n    );\n}"},
           {t:"sub", v:"NoProjectSelected Component Code (src/components/NoProjectSelected.jsx)"},
           {t:"code", lang:"jsx", v:"import noProjectImage from '../assets/no-projects.png';\nimport Button from './Button.jsx';\nexport default function NoProjectSelected ({onStartAddProject}){\n    return(\n    <div className='mt-24 text-center w-2/3'>\n        <img src={noProjectImage} alt='tasklist empty'\n        className='w-16 h-16 object-contain mx-auto'\n        />\n        <h2 className='text-xl font-bold text-stone-500 my-4'>\n            No Project Selected</h2>\n        <p className='text-stone-400 mb-4'>Select a project or get started with a new one</p>\n        <p className='mt-8'>\n            <Button onClick={onStartAddProject}>Create new project</Button>\n        </p>\n    </div>\n    );\n}"},
           {t:"sub", v:"App Component Code (src/App.jsx)"},
           {t:"code", lang:"jsx", v:"import { useState } from \"react\";\nimport NewProject from \"./components/NewProject\";\nimport NoProjectSelected from \"./components/NoProjectSelected\";\nimport ProjectsSidebar from \"./components/ProjectsSidebar\";\nimport SelectedProject from \"./components/SelectedProject\";\n\nfunction App() {\n  const[projectsState,setProjectsState]= useState({\n    selectedProjectId: undefined,\n    projects:[],\n  });\n  function handleStartAddProject(){\n    setProjectsState(prevState => {\n      return {\n        ...prevState,\n        selectedProjectId: null,\n      };\n    })\n  }\n  \n function handleSelectedProject(id) {\n  setProjectsState(prevState => {\n    return {\n      ...prevState,\n      selectedProjectId: id,\n    };\n  })\n }\n\n function handleCancelAddProjecrt(){\n  setProjectsState(prevState => {\n    return {\n      ...prevState,\n      selectedProjectId: undefined,\n    };\n  })\n }\n\n function handleAddProject(projectData){\n  setProjectsState(prevState => {\n    const newProject ={\n     ...projectData,\n     id: Math.random()\n    };\n\n    return {\n      ...prevState,\n      selectedProjectId:undefined,\n      projects: [...prevState.projects,newProject]\n    };\n  });\n }\n  \n  console.log(projectsState) \n\n  const selectedProject = projectsState.projects.find(project => project.id === projectsState.selectedProjectId)\n\n  let content = <SelectedProject project={selectedProject} />;\n  if(projectsState.selectedProjectId === null){\n    content= <NewProject onAdd={handleAddProject} onCancel={ handleCancelAddProjecrt}/>\n  }\n  else if (projectsState.selectedProjectId === undefined){\n    content=  <NoProjectSelected onStartAddProject={handleStartAddProject}/>\n  }\n\n  return (\n    <main className=\" h-screen my-8 flex gap-8\">\n    <ProjectsSidebar\n     onStartAddProject={handleStartAddProject}\n     projects={projectsState.projects}\n     onSelectProject={handleSelectedProject}\n     />\n   {content}\n    </main>\n  );\n}\n\nexport default App;"}
        ]
      }
    ],
    quiz:{
      enabled:true,
      questions:[
        {id:"3a",text:"What is the defining characteristic of `useRef` compared to `useState`?",opts:["It causes the entire React component tree to remount on every update","It creates a mutable reference object whose `.current` property modifications DO NOT trigger a component re-render","It forces React to evaluate the DOM synchronously after an update","It acts as a substitute for `useEffect` in modern React versions"],correct:1,pts:10},
        {id:"3b",text:"When passing a ref down to a custom component, what React utility must wrap the child component function?",opts:["React.memo()","createContext()","forwardRef()","useImperativeHandle()"],correct:2,pts:10},
        {id:"3c",text:"How does state-based pseudo-routing (like `content = <NewProject />`) fundamentally differ from using React Router?",opts:["State-based routing is physically impossible to implement in React 18 without experimental flags","State-based routing prevents CSS transitions from functioning","State-based routing does NOT update the browser's URL, breaking back-button functionality and direct linking","React Router prevents the use of context API in routed children"],correct:2,pts:10},
        {id:"3d",text:"Why must `id: Math.random()` in our local state update NEVER be used in a production system connected to a database?",opts:["Because databases exclusively support base64 UUIDs","Because it causes a security vulnerability by exposing the browser signature","Because Math.random() is computationally expensive and freezes the main thread","Because it doesn't guarantee absolute uniqueness and doesn't align with the backend's primary keys"],correct:3,pts:10},
        {id:"3e",text:"Which is the correct way to read the actual text typed into an input retrieved via a `ref` named `titleRef`?",opts:["titleRef.value()","titleRef.current.value","titleRef.get().innerHTML","titleRef.current.innerText()"],correct:1,pts:10},
        {id:"3f",text:"Why would you use `useRef` to read inputs instead of a controlled `useState` input?",opts:["To enforce a higher degree of state immutability in Redux","To bypass React Router validation checks","To read the value ONLY when needed (e.g., on form submit), thereby avoiding a re-render on every single keystroke","To create a two-way data binding similar to Angular"],correct:2,pts:10},
        {id:"3g",text:"If `ref.current` is mutated during rendering inside the component body itself, what React principle is being violated?",opts:["The Unidirectional Data Flow Principle","The Component Purity Principle, as rendering must be a pure function without side-effects","The Virtual DOM reconciliation heuristic","The Hooks Rule of Order"],correct:1,pts:10},
        {id:"3h",text:"In the provided state-based routing logic, what determines which view is injected into the `<main>` structural tag?",opts:["The history stack maintained by `react-router-dom`","The `selectedProjectId`, via standard conditional statements inside the render cycle","A higher order component wrapping `<App/>`","A global context evaluating `document.location` natively"],correct:1,pts:10},
        {id:"3i",text:"What does the `...prevState` spread operator ensure when calling `setProjectsState`?",opts:["It clones all existing sub-properties (like the `.projects` array) so they aren't lost when updating just `selectedProjectId`","It deep copies nested dependencies automatically","It halts any current memory leaks in the browser","It signals to React that the previous state was invalid and must be discarded"],correct:0,pts:10},
        {id:"3j",text:"Where should a `useEffect` designed to fetch initial project data on application startup be instantiated in terms of dependencies?",opts:["`useEffect(fn)` (no array)","`useEffect(fn, [data])`","`useEffect(fn, [])` (empty array)","`useEffect(fn, [window.location])`"],correct:2,pts:10}
      ]
    }
  },

  /* ── W1 Online 1 ── */
  {
    id:4, week:1, type:"online", slug:"w1o1", icon: "Layout",
    title:"UI Productivity & Modern Tools", duration:"3 Hours", tag:"Week 1 · Online 1",
    topics:["Protected routes — frontend concept","Tailwind CSS — utility-first styling","Using AI as a developer tool"],
    sections:[
      {
        type:"concept", title:"Protected Routes",
        content:[
          {t:"text", v:"A protected route only allows authenticated users through. If an unauthenticated visitor navigates to /dashboard, they are redirected to /login. On the frontend this works by checking whether a JWT token exists in localStorage."},
          {t:"code", lang:"jsx", v:"// components/ProtectedRoute.jsx\nimport { Navigate } from 'react-router-dom';\n\nfunction ProtectedRoute({ children }) {\n  const token = localStorage.getItem('token');\n  if (!token) return <Navigate to=\"/login\" replace />;\n  return children;  // Render the actual page\n}\n\n// Usage in App.jsx\n<Route path=\"/dashboard\" element={\n  <ProtectedRoute><Dashboard /></ProtectedRoute>\n} />"},
          {t:"warn", v:"Frontend protection only hides routes from the UI. Real data protection requires the backend to verify the JWT token on every API request. Both layers are required."}
        ]
      },
      {
        type:"concept", title:"Tailwind CSS — Utility-First Styling",
        content:[
          {t:"text", v:"Tailwind gives you pre-built utility classes that you apply directly in JSX — no separate CSS files needed. The existing Project Manager UI already uses Tailwind with a stone colour palette."},
          {t:"code", lang:"jsx", v:"// With Tailwind — no CSS file needed\n<div className=\"bg-stone-900 rounded-xl px-8 py-16 text-stone-50\">\n  <h2 className=\"mb-8 font-bold uppercase text-xl text-stone-200\">\n    Your Projects\n  </h2>\n  <button className=\"px-4 py-2 rounded-md bg-stone-700 text-stone-400\n                     hover:bg-stone-600 hover:text-stone-100\">\n    + Add Project\n  </button>\n</div>"},
          {t:"table", hdrs:["Class","CSS Equivalent"], rows:[["p-4 / px-8 / py-16","padding shorthand"],["bg-stone-900","background: the dark stone shade"],["text-stone-50","color: near-white"],["rounded-xl","border-radius: 12px"],["hover:bg-stone-600","background changes on hover"],["w-1/3 / w-2/3","width: 33% / 67%"],["flex gap-8","display:flex; gap:32px"]]}
        ]
      },
      {
        type:"concept", title:"Using AI as a Developer Tool",
        content:[
          {t:"text", v:"AI tools (GitHub Copilot, Claude, ChatGPT) are now standard in the professional developer toolkit. The skill is not just using them — it's using them wisely."},
          {t:"steps", v:["Use AI for boilerplate — routing configs, form skeletons, API stubs. Always read before using.","Use AI for debugging — paste the error + relevant code. Ask: 'what is causing this and how do I fix it?'","Use AI for explanations — encounter an unfamiliar hook? Ask for a clear example.","DO NOT copy-paste blindly — you must understand every line. You'll explain your code in the final presentation."]},
          {t:"hi", v:"Effective prompt: 'In React with Tailwind, I'm trying to [goal]. Here is my code: [paste]. What is wrong and how do I fix it?' — be specific, not vage."}
        ]
      }
    ],
    quiz:{
      enabled:false,
      questions:[
        {id:"4a",text:"A ProtectedRoute component redirects unauthenticated users to:",opts:["/home","/login","/dashboard","/error"],correct:1,pts:25},
        {id:"4b",text:"Tailwind CSS is described as 'utility-first' because:",opts:["It only works on mobile","You apply small predefined classes rather than writing custom CSS","It generates all CSS automatically","It uses JavaScript for all styling"],correct:1,pts:25},
        {id:"4c",text:"Frontend route protection using localStorage is:",opts:["Sufficient on its own","A UX layer — backend must also verify tokens","Not possible in React","Only needed for admin pages"],correct:1,pts:25},
        {id:"4d",text:"When using AI for debugging, the best approach is to:",opts:["Ask 'fix my code' without context","Paste the error message and relevant code with a clear description","Only ask conceptual questions, never code questions","Copy all AI output without reading it"],correct:1,pts:25}
      ]
    }
  },

  /* ── W1 Online 2 ── */
  {
    id:5, week:1, type:"online", slug:"w1o2", icon: "Box",
    title:"Code Review & Architecture", duration:"3 Hours", tag:"Week 1 · Online 2",
    topics:["Component libraries: shadcn/ui, MUI, Chakra","localStorage — client-side persistence","useContext — sharing state globally"],
    sections:[
      {
        type:"concept", title:"Component Libraries",
        content:[
          {t:"text", v:"Component libraries provide pre-built, accessible, and styled UI components. Instead of building every button, modal, and input from scratch, you install a library and use its components."},
          {t:"table", hdrs:["Library","Style","Best for"], rows:[["shadcn/ui","Tailwind + Radix","Copy-paste, highly customisable — 2026 favourite"],["Material UI (MUI)","Google Material","Large enterprise apps, comprehensive"],["Chakra UI","Custom theme","Quick prototypes, clean API"],["Ant Design","Ant design system","Data-heavy dashboards"]]},
          {t:"code", lang:"bash", v:"# shadcn/ui setup (recommended)\nnpx shadcn@latest init\nnpx shadcn@latest add button input card"},
          {t:"hi", v:"For the final project, component libraries speed up development significantly. But make sure you understand what each component does — don't just paste and forget."}
        ]
      },
      {
        type:"concept", title:"localStorage — Client-Side Persistence",
        content:[
          {t:"text", v:"localStorage is a browser API that saves key-value data persistently — unlike React state, it survives page refreshes. It is commonly used to store JWT authentication tokens."},
          {t:"code", lang:"jsx", v:"// Saving\nlocalStorage.setItem('token', 'eyJhbGci...');\nlocalStorage.setItem('user', JSON.stringify({ name: 'Alice', id: 42 }));\n\n// Reading\nconst token = localStorage.getItem('token');\nconst user  = JSON.parse(localStorage.getItem('user'));\n\n// Removing (e.g. on logout)\nlocalStorage.removeItem('token');\nlocalStorage.clear(); // clears everything"},
          {t:"warn", v:"Never store sensitive data like passwords in localStorage. Only store tokens, and treat them as short-lived. If a token is stolen, an attacker can impersonate the user."}
        ]
      },
      {
        type:"concept", title:"useContext — Global State",
        content:[
          {t:"text", v:"Passing props through many layers ('prop drilling') gets messy in large apps. useContext creates a global store that any component in the tree can read from directly."},
          {t:"code", lang:"jsx", v:"// context/AuthContext.jsx\nimport { createContext, useContext, useState } from 'react';\n\nconst AuthContext = createContext(null);\n\nexport function AuthProvider({ children }) {\n  const [user, setUser] = useState(null);\n\n  function login(userData) {\n    setUser(userData);\n    localStorage.setItem('token', userData.token);\n  }\n  function logout() {\n    setUser(null);\n    localStorage.removeItem('token');\n  }\n\n  return (\n    <AuthContext.Provider value={{ user, login, logout }}>\n      {children}\n    </AuthContext.Provider>\n  );\n}\n\n// Custom hook for easy access\nexport function useAuth() {\n  return useContext(AuthContext);\n}\n\n// Any component can now access auth:\nconst { user, logout } = useAuth();"}
        ]
      }
    ],
    quiz:{
      enabled:false,
      questions:[
        {id:"5a",text:"localStorage data:",opts:["Is cleared when React state resets","Persists across browser sessions and page reloads","Is shared between all browser tabs automatically","Expires after 24 hours by default"],correct:1,pts:34},
        {id:"5b",text:"useContext solves the problem of:",opts:["Slow re-renders","Prop drilling — passing data through many component layers","API request failures","CSS specificity conflicts"],correct:1,pts:33},
        {id:"5c",text:"shadcn/ui is popular because:",opts:["It is the oldest UI library","It provides copy-paste components built on Tailwind that are easy to customise","It replaces React entirely","It only works with Next.js"],correct:1,pts:33}
      ]
    }
  },

  /* ── W2 D1 ── */
  {
    id:6, week:2, type:"onsite", slug:"w2d1", icon: "Server",
    title:"Express Fundamentals", duration:"5–6 Hours", tag:"Week 2 · Day 1",
    topics:["REST API principles & HTTP methods","Express setup: install, server, scripts","MVC architecture: controllers, routes, models, middleware","Routes & controllers — separating concerns","Environment variables with .env"],
    sections:[
      {
        type:"concept", title:"REST API Principles & HTTP",
        content:[
          {t:"text", v:"The backend is the server-side part of your application. It receives requests from the React frontend, runs business logic, reads/writes the database, and returns responses. Users never interact with the backend directly."},
          {t:"table", hdrs:["HTTP Method","Purpose","Example"], rows:[["GET","Read data (safe)","GET /projects → return all projects"],["POST","Create new data","POST /projects → create a new project"],["PUT","Replace a full resource","PUT /projects/1 → replace project 1"],["PATCH","Update part of a resource","PATCH /projects/1 → update just the title"],["DELETE","Remove a resource","DELETE /projects/1 → delete project 1"]]},
          {t:"table", hdrs:["Status Code","Meaning"], rows:[["200 OK","Success (GET / PUT)"],["201 Created","Resource created (POST)"],["400 Bad Request","Invalid client data"],["401 Unauthorized","Missing or invalid token"],["404 Not Found","Resource doesn't exist"],["500 Server Error","Bug on the server"]]}
        ]
      },
      {
        type:"concept", title:"Express Setup",
        content:[
          {t:"code", lang:"bash", v:"mkdir project-manager-api && cd project-manager-api\nnpm init -y\nnpm install express dotenv cors\nnpm install --save-dev nodemon"},
          {t:"table", hdrs:["Package","Purpose"], rows:[["express","Web framework — handles routing and HTTP"],["dotenv","Loads .env secrets into process.env"],["cors","Allows React (port 5173) to call the API (port 5000)"],["nodemon","Auto-restarts server on file save (dev only)"]]},
          {t:"code", lang:"js", v:"// server.js\nconst express = require('express');\nconst cors    = require('cors');\nrequire('dotenv').config();\n\nconst app = express();\napp.use(cors());           // allow cross-origin requests\napp.use(express.json());   // parse JSON request bodies\n\napp.get('/', (req, res) => res.json({ message: 'API running' }));\n\nconst PORT = process.env.PORT || 5000;\napp.listen(PORT, () => console.log(`Server on port ${PORT}`));"},
          {t:"code", lang:"json", v:"// package.json scripts\n\"scripts\": {\n  \"start\": \"node server.js\",\n  \"dev\":   \"nodemon server.js\"\n}"},
          {t:"warn", v:"Add .env to .gitignore immediately. MONGO_URI and JWT_SECRET are sensitive credentials — committing them to GitHub exposes your entire backend."}
        ]
      },
      {
        type:"concept", title:"MVC Architecture",
        content:[
          {t:"text", v:"MVC (Model-View-Controller) separates your app into three layers. In an Express API we adapt this to: Models (data shape), Controllers (logic), and Routes (URL mapping)."},
          {t:"table", hdrs:["Layer","Location","Responsibility"], rows:[["Routes","routes/projectRoutes.js","Map URLs to controller functions"],["Controllers","controllers/projectController.js","Business logic for each route"],["Models","models/Project.js","Mongoose schema for data shape"],["Middleware","middleware/authMiddleware.js","Auth checking, validation — runs before routes"]]},
          {t:"code", lang:"js", v:"// Folder structure\nproject-manager-api/\n├── controllers/\n│   └── projectController.js\n├── middleware/\n│   └── authMiddleware.js\n├── models/\n│   └── Project.js\n├── routes/\n│   └── projectRoutes.js\n├── .env\n└── server.js"}
        ]
      },
      {
        type:"coding", title:"Practical — Project Manager API: Express Setup",
        goals:"Initialise the Express backend, create the MVC folder structure, add the first project routes, and test them in Postman.",
        steps:["Run npm init -y and install express, cors, dotenv, nodemon","Create server.js with the setup above and start it with npm run dev","Create folders: controllers/, routes/, models/, middleware/","Create routes/projectRoutes.js — define GET / and POST / routes","Create controllers/projectController.js — write getProjects and createProject functions","Register the router in server.js: app.use('/api/projects', projectRoutes)","Open Postman and test GET /api/projects and POST /api/projects"]
      }
    ],
    quiz:{
      enabled:true,
      questions:[
        {id:"6a",text:"Which HTTP method should you use to CREATE a new resource?",opts:["GET","PUT","POST","DELETE"],correct:2,pts:10},
        {id:"6b",text:"What does the cors package do in Express?",opts:["Encrypts API responses","Allows cross-origin requests so React can call the backend","Parses JSON bodies","Validates environment variables"],correct:1,pts:10},
        {id:"6c",text:"A successful POST (resource created) should return status:",opts:["200","201","204","301"],correct:1,pts:10},
        {id:"6d",text:"In MVC the Controller is responsible for:",opts:["The database schema","HTML templates","Business logic for each route","Environment variables"],correct:2,pts:10},
        {id:"6e",text:"require('dotenv').config() loads:",opts:["The dotenv package","Variables from .env file into process.env","A JSON config file","The Express framework"],correct:1,pts:10},
        {id:"6f",text:"express.json() middleware does what?",opts:["Sends JSON from all routes","Converts responses to JSON","Parses incoming JSON bodies so req.body works","Validates JSON format"],correct:2,pts:10},
        {id:"6g",text:"Status code 401 means:",opts:["Resource not found","Server error","Authentication required or token invalid","Request body is invalid"],correct:2,pts:10},
        {id:"6h",text:"nodemon is used for:",opts:["Production deployment","Auto-restarting server on file changes in dev","API performance monitoring","Syntax validation"],correct:1,pts:10},
        {id:"6i",text:"How do you access the :id parameter from /projects/:id?",opts:["req.query.id","req.body.id","req.params.id","req.headers.id"],correct:2,pts:10},
        {id:"6j",text:"Which file maps URLs to controller functions?",opts:["server.js","controllers/","routes/","middleware/"],correct:2,pts:10}
      ]
    }
  },

  /* ── W2 D2 ── */
  {
    id:7, week:2, type:"onsite", slug:"w2d2", icon: "Database",
    title:"MongoDB & CRUD", duration:"5–6 Hours", tag:"Week 2 · Day 2",
    topics:["MongoDB Atlas setup — cloud database","Mongoose — schemas for User, Project, Task","Full CRUD: Create, Read, Update, Delete","Middleware theory — request flow in Express"],
    sections:[
      {
        type:"concept", title:"MongoDB Atlas Setup",
        content:[
          {t:"text", v:"MongoDB is a NoSQL database that stores data as JSON-like documents. Instead of rows in a table, you have documents inside collections — a natural fit for JavaScript."},
          {t:"sub", v:"Create a Free Atlas Cluster"},
          {t:"steps", v:["Go to mongodb.com/cloud/atlas and create a free account","Create a Project then click 'Build a Cluster' — choose free M0 tier","Under Database Access: create a user with a username and password","Under Network Access: add 0.0.0.0/0 to allow all IPs during development","Click Connect → Connect your application → copy the connection string","Paste into .env: MONGO_URI=mongodb+srv://user:password@cluster.mongodb.net/dbname"]},
          {t:"code", lang:"js", v:"// Connect in server.js\nconst mongoose = require('mongoose');\nmongoose.connect(process.env.MONGO_URI)\n  .then(() => console.log('MongoDB connected'))\n  .catch(err => console.error('DB error:', err));"}
        ]
      },
      {
        type:"concept", title:"Mongoose Schemas",
        content:[
          {t:"text", v:"A Schema defines the structure and validation rules for documents in a collection. A Model is built from a Schema and is what you use to actually query and write data."},
          {t:"code", lang:"js", v:"// models/Project.js\nconst mongoose = require('mongoose');\n\nconst projectSchema = new mongoose.Schema({\n  name: { type: String, required: [true, 'Name required'], trim: true },\n  description: { type: String, default: '' },\n  status: { type: String, enum: ['active','completed','archived'], default: 'active' },\n  owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }\n}, { timestamps: true }); // adds createdAt & updatedAt automatically\n\nmodule.exports = mongoose.model('Project', projectSchema);"}
        ]
      },
      {
        type:"concept", title:"Full CRUD Operations",
        content:[
          {t:"code", lang:"js", v:"// controllers/projectController.js\n\n// CREATE — POST /api/projects\nconst createProject = async (req, res) => {\n  try {\n    const project = await Project.create({ ...req.body, owner: req.user.id });\n    res.status(201).json(project);\n  } catch (err) { res.status(400).json({ message: err.message }); }\n};\n\n// READ ALL — GET /api/projects\nconst getProjects = async (req, res) => {\n  try {\n    const projects = await Project.find({ owner: req.user.id }).sort({ createdAt: -1 });\n    res.status(200).json(projects);\n  } catch (err) { res.status(500).json({ message: err.message }); }\n};\n\n// UPDATE — PUT /api/projects/:id\nconst updateProject = async (req, res) => {\n  try {\n    const project = await Project.findByIdAndUpdate(req.params.id, req.body, { new: true });\n    if (!project) return res.status(404).json({ message: 'Not found' });\n    res.json(project);\n  } catch (err) { res.status(400).json({ message: err.message }); }\n};\n\n// DELETE — DELETE /api/projects/:id\nconst deleteProject = async (req, res) => {\n  try {\n    await Project.findByIdAndDelete(req.params.id);\n    res.json({ message: 'Deleted' });\n  } catch (err) { res.status(500).json({ message: err.message }); }\n};"},
          {t:"hi", v:"Always wrap Mongoose operations in try/catch blocks. Use async/await for clean, readable async code. Return the correct HTTP status code for every outcome."}
        ]
      },
      {
        type:"concept", title:"Middleware — Request Flow",
        content:[
          {t:"text", v:"Middleware functions run between the request and the route handler. They can log, authenticate, validate, or modify req/res. Express processes middleware in the order they are registered."},
          {t:"code", lang:"text", v:"Request → cors() → express.json() → authMiddleware → routeHandler → Response\n\n      Each middleware calls next() to pass to the next function.\n      If middleware sends a response, the chain stops."}
        ]
      },
      {
        type:"coding", title:"Practical — Project Manager API: MongoDB & CRUD",
        goals:"Connect MongoDB Atlas, define schemas for User, Project, and Task, then implement all four CRUD endpoints and test them in Postman.",
        steps:["npm install mongoose — connect to Atlas in server.js","Create models/User.js, models/Project.js, models/Task.js with proper schemas","Update projectController.js to use the Project model with async/await","Implement GET /api/projects, POST /api/projects, PUT /api/projects/:id, DELETE /api/projects/:id","Add try/catch to every controller function","Test all four endpoints in Postman — try valid and invalid data","Verify documents appear and update in MongoDB Atlas Data Explorer"]
      }
    ],
    quiz:{
      enabled:true,
      questions:[
        {id:"7a",text:"A Mongoose Schema defines:",opts:["A MongoDB connection string","Structure and validation rules for a collection's documents","A MongoDB query language","An index on a collection"],correct:1,pts:10},
        {id:"7b",text:"findByIdAndUpdate with { new: true } returns:",opts:["The old document","The document AFTER the update","null if not found","The number of updated documents"],correct:1,pts:10},
        {id:"7c",text:"{timestamps: true} in a Mongoose schema:",opts:["Requires a createdAt field","Auto-adds and manages createdAt and updatedAt fields","Sets document expiry","Logs every query"],correct:1,pts:10},
        {id:"7d",text:"MongoDB stores data as:",opts:["Rows and columns","XML files","JSON-like documents in collections","Key-value pairs without structure"],correct:2,pts:10},
        {id:"7e",text:".sort({ createdAt: -1 }) returns documents:",opts:["Alphabetically","Oldest first","Newest first","In random order"],correct:2,pts:10},
        {id:"7f",text:"{ new: true } in findByIdAndUpdate is needed to:",opts:["Create a new document if not found","Return the updated version, not the original","Bypass validation","Prevent overwrites"],correct:1,pts:10},
        {id:"7g",text:"mongoose.Schema.Types.ObjectId in a schema field creates:",opts:["A random UUID","A reference (relation) to another model","A string → number converter","An email validator"],correct:1,pts:10},
        {id:"7h",text:"Async Mongoose operations in controllers should use:",opts:[".then()/.catch() only","async/await with try/catch","Synchronous calls","setTimeout wrappers"],correct:1,pts:10},
        {id:"7i",text:"The enum validator on a schema field:",opts:["Creates an index","Only allows the specified values","Makes the field required","Uppercases the value"],correct:1,pts:10},
        {id:"7j",text:"Middleware in Express runs:",opts:["Only after the response is sent","Between the request and the route handler","Only on 404 responses","After the database query"],correct:1,pts:10}
      ]
    }
  },

  /* ── W2 D3 ── */
  {
    id:8, week:2, type:"onsite", slug:"w2d3", icon: "Lock",
    title:"Authentication & MERN Integration", duration:"5–6 Hours", tag:"Week 2 · Day 3",
    topics:["Password security — bcryptjs hashing","User register & login routes","JWT — generate and verify tokens","Auth middleware — protect routes","Full React ↔ Express ↔ MongoDB connection"],
    sections:[
      {
        type:"concept", title:"Password Security with bcryptjs",
        content:[
          {t:"text", v:"Never store plain-text passwords. If your database is breached, every user's password is immediately exposed. bcryptjs hashes passwords using a one-way function — you cannot reverse the hash to get the original password."},
          {t:"code", lang:"js", v:"const bcrypt = require('bcryptjs');\n\n// Registration — hash before saving to DB\nconst hashedPassword = await bcrypt.hash(plainPassword, 10);\n// Result: '$2a$10$xyz...some long irreversible hash'\n\n// Login — compare plain text to stored hash\nconst isMatch = await bcrypt.compare(plainPassword, hashedPassword);\n// isMatch === true  if the password is correct"},
          {t:"hi", v:"The '10' is the cost factor — how many rounds of hashing to run. Higher = more secure but slower. 10–12 is the industry standard for most web applications."}
        ]
      },
      {
        type:"concept", title:"JWT Authentication Flow",
        content:[
          {t:"text", v:"JWT (JSON Web Token) enables stateless authentication. After login, the server signs a token containing the user's ID. The client stores it and includes it in every protected request."},
          {t:"steps", v:["Client sends email + password to POST /api/auth/login","Server finds the user by email in MongoDB","Server calls bcrypt.compare() to verify the password","If valid: server signs a JWT: jwt.sign({ id, name }, secret, { expiresIn: '7d' })","Server returns the token to the client","Client stores it in localStorage","Client adds 'Authorization: Bearer <token>' to every protected request","Auth middleware verifies token before each route handler runs"]},
          {t:"code", lang:"js", v:"// middleware/authMiddleware.js\nconst jwt = require('jsonwebtoken');\n\nconst protect = (req, res, next) => {\n  const token = req.headers.authorization?.split(' ')[1];\n  if (!token) return res.status(401).json({ message: 'No token' });\n  try {\n    req.user = jwt.verify(token, process.env.JWT_SECRET);\n    next();  // proceed to route handler\n  } catch {\n    res.status(401).json({ message: 'Invalid token' });\n  }\n};"}
        ]
      },
      {
        type:"concept", title:"Connecting React to the API",
        content:[
          {t:"text", v:"With auth implemented, the React frontend can authenticate and make protected API calls. Store the token in localStorage and attach it to every fetch request."},
          {t:"code", lang:"jsx", v:"// Login in React\nasync function handleLogin(email, password) {\n  const res  = await fetch('http://localhost:5000/api/auth/login', {\n    method: 'POST',\n    headers: { 'Content-Type': 'application/json' },\n    body: JSON.stringify({ email, password })\n  });\n  const data = await res.json();\n  if (!res.ok) throw new Error(data.message);\n  localStorage.setItem('token', data.token);\n  navigate('/dashboard');\n}\n\n// Protected fetch\nconst token = localStorage.getItem('token');\nconst res = await fetch('http://localhost:5000/api/projects', {\n  headers: { 'Authorization': `Bearer ${token}` }\n});\nconst projects = await res.json();"}
        ]
      },
      {
        type:"coding", title:"Practical — Full MERN Integration",
        goals:"Implement JWT authentication on the backend and connect the React frontend to the live Express API. Every feature of the Project Manager should work end-to-end.",
        steps:["npm install bcryptjs jsonwebtoken","Create routes/authRoutes.js with /register and /login endpoints","Implement register: hash password → create user → return JWT","Implement login: find user → bcrypt.compare → return JWT","Build middleware/authMiddleware.js protect function","Add protect middleware to all /api/projects routes","In React: build Login.jsx and Register.jsx pages with controlled forms","On login success save token to localStorage","Update all React fetch calls to include the Authorization header","Test the full flow: register → login → create project → view projects → logout"]
      }
    ],
    quiz:{
      enabled:true,
      questions:[
        {id:"8a",text:"Why must passwords never be stored as plain text?",opts:["It uses too much storage","On DB breach, all passwords are immediately exposed","Express does not support it","bcryptjs requires hashed input"],correct:1,pts:10},
        {id:"8b",text:"bcrypt.compare(plain, hashed) returns:",opts:["The original password","A new hash","A boolean — true if the password matches","The difference between the two strings"],correct:2,pts:10},
        {id:"8c",text:"Where does the React client store the JWT token?",opts:["MongoDB","React state only (lost on refresh)","localStorage in the browser","A server-side session"],correct:2,pts:10},
        {id:"8d",text:"How does React send the JWT to the backend?",opts:["In the request body as {token}","As a cookie automatically","In the Authorization header as 'Bearer <token>'","As a URL parameter ?token=..."],correct:2,pts:10},
        {id:"8e",text:"What does next() do in Express middleware?",opts:["Sends a response to the client","Passes control to the next middleware or route handler","Refreshes the token","Queries the database"],correct:1,pts:10},
        {id:"8f",text:"Auth middleware should return 401 when:",opts:["The resource is not found","The server crashes","The token is missing or invalid","The request body is bad"],correct:2,pts:10},
        {id:"8g",text:"The JWT payload (e.g. {id, name}) is:",opts:["Fully encrypted","Base64-encoded — readable by anyone with the token","Stored alongside the token in MongoDB","Only readable by the backend"],correct:1,pts:10},
        {id:"8h",text:"The cost factor (10) in bcrypt.hash(password, 10) controls:",opts:["Max password length","Characters in the hash output","Number of computation rounds — higher is more secure but slower","Expiry time in days"],correct:2,pts:10},
        {id:"8i",text:"JWT is 'stateless' because:",opts:["No React state is used","The server stores no session — the token contains all needed info","It only works with functional components","Tokens never expire"],correct:1,pts:10},
        {id:"8j",text:"The correct login flow with JWT is:",opts:["Client sends token → server creates password","Server creates token → client validates it","Client sends email+password → server verifies → returns token → client stores it","Client sends username → MongoDB returns token"],correct:2,pts:10}
      ]
    }
  },

  /* ── W2 Online 3 ── */
  {
    id:9, week:2, type:"online", slug:"w2o3", icon: "Globe",
    title:"Deployment & Final Project Brief", duration:"3 Hours", tag:"Week 2 · Online 3",
    topics:["Deploy backend to Render (free)","Deploy frontend to Vercel","Final project requirements and ideas"],
    sections:[
      {
        type:"concept", title:"Deploying the Backend — Render",
        content:[
          {t:"text", v:"Render is a cloud platform that hosts Express APIs for free. It deploys directly from a GitHub repository and provides a public HTTPS URL."},
          {t:"steps", v:["Push your backend to a public GitHub repository","Go to render.com and sign up with GitHub","Click New → Web Service → connect your backend repo","Set Build command: npm install and Start command: node server.js","Under Environment Variables: add MONGO_URI, JWT_SECRET, and PORT=5000","Click Create Web Service — you get a live URL like https://your-api.onrender.com","Test your deployed API endpoints in Postman"]},
          {t:"warn", v:"Never commit .env to GitHub. Always add .env to .gitignore first. Enter all secrets manually in Render's Environment Variables panel."}
        ]
      },
      {
        type:"concept", title:"Deploying the Frontend — Vercel",
        content:[
          {t:"steps", v:["Create src/config.js: export const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';","Replace all hardcoded localhost:5000 URLs in React with API_URL","Push the frontend to a public GitHub repo","Go to vercel.com → New Project → import your frontend repo","Under Environment Variables: add VITE_API_URL = your Render backend URL","Click Deploy — live at https://your-app.vercel.app","Test the full app: register → login → CRUD operations"]},
          {t:"hi", v:"Vercel auto-deploys every time you push to GitHub. Keep your main branch production-ready and use a dev branch for experiments."}
        ]
      },
      {
        type:"concept", title:"Final Project Requirements",
        content:[
          {t:"text", v:"Students must build and deploy a complete MERN stack application individually or in small teams. The project must demonstrate everything learned in the bootcamp."},
          {t:"sub", v:"Technical Requirements"},
          {t:"steps", v:["User authentication: Register / Login with bcryptjs + JWT","Protected routes on both frontend and backend","Full CRUD for at least one resource","MongoDB integration with proper Mongoose schemas","Clean MVC structure on the backend","React frontend with React Router","Deployed frontend (Vercel) and backend (Render)","Public GitHub repository with a README"]},
          {t:"sub", v:"Suggested Ideas"},
          {t:"table", hdrs:["Project","Description"], rows:[["Expense Tracker","Log expenses with categories, view totals, filter by date"],["Task Manager","Advanced version of the bootcamp project — add labels and deadlines"],["Notes App","Create/edit/delete notes with tags and search"],["Study Planner","Schedule sessions, track subjects, set goals"],["Mini Blog","Write and publish posts, other users can read and comment"],["Recipe Planner","Save recipes, generate weekly meal plans"]]}
        ]
      }
    ],
    quiz:{
      enabled:false,
      questions:[
        {id:"9a",text:"Render deploys your backend from:",opts:["A ZIP file upload","A connected GitHub repository","A Docker image only","Heroku migration"],correct:1,pts:50},
        {id:"9b",text:"The VITE_API_URL environment variable in Vercel should be set to:",opts:["http://localhost:5000","The Render backend URL","The Vercel frontend URL","Your MongoDB Atlas connection string"],correct:1,pts:50}
      ]
    }
  },

  /* ── W2 Online 4 ── */
  {
    id:10, week:2, type:"online", slug:"w2o4", icon: "CheckCircle",
    title:"Final Wrap-up & Production Mindset", duration:"3 Hours", tag:"Week 2 · Online 4",
    topics:["Final project guidance & Q&A","Production mindset and environment variables","Contingency for unfinished lessons"],
    sections:[
      {
        type:"concept", title:"Production Mindset",
        content:[
          {t:"text", v:"Moving from development to production requires a mindset shift. In development you have helpful errors and hot reload. In production, real users are affected by every bug and every exposed secret."},
          {t:"sub", v:"Production Checklist"},
          {t:"steps", v:["All secrets in .env — never hardcoded or committed to Git","Every API route has try/catch and returns meaningful status codes","Backend validates ALL incoming data — never trust the client","node_modules and .env are in .gitignore","README.md explains the project, setup steps, and has a live demo link","Frontend uses the production API URL from environment variables","HTTPS is used everywhere (Render and Vercel provide this automatically)"]},
          {t:"warn", v:"console.log statements with sensitive data (user objects, tokens, passwords) must be removed before deploying to production."}
        ]
      },
      {
        type:"concept", title:"Final Project Presentation Guide",
        content:[
          {t:"text", v:"Each team presents for 10–15 minutes. Structure your demo to show competence and understanding."},
          {t:"steps", v:["Live demo — show signup, login, create/read/update/delete, and logout (3–4 min)","Code walkthrough — show folder structure, one API route, one React page (3–4 min)","Technical decisions — explain one choice you made (e.g. why you structured data a certain way) (2 min)","Challenges — what was the hardest part and how did you solve it? (2 min)","Q&A — be ready to explain any line of code in your project"]},
          {t:"hi", v:"If you used AI to generate any code, you still must understand and be able to explain it. Saying 'AI wrote it' is not an acceptable answer in the presentation."}
        ]
      },
      {
        type:"concept", title:"What Comes Next",
        content:[
          {t:"text", v:"Completing this bootcamp means you have a solid full-stack foundation. Here are directions to grow:"},
          {t:"table", hdrs:["Area","What to Learn Next"], rows:[["React","Next.js (server-side rendering), React Query, Zustand"],["Backend","GraphQL, microservices, WebSockets (Socket.io)"],["Database","SQL (PostgreSQL), Redis caching, database indexing"],["DevOps","Docker, CI/CD pipelines, GitHub Actions"],["Career","Open-source contributions, personal projects, technical blogs"]]}
        ]
      }
    ],
    quiz:{
      enabled:false,
      questions:[
        {id:"10a",text:"Before deploying, you should ensure all secrets are:",opts:["Hardcoded in server.js for convenience","In environment variables, never in source code","Stored in localStorage on the frontend","Committed to a private GitHub branch"],correct:1,pts:50},
        {id:"10b",text:"In the final presentation, 'AI wrote it' as an explanation is:",opts:["Fully acceptable","Acceptable only for backend code","Not acceptable — you must understand every line","Fine if you mention the AI tool used"],correct:1,pts:50}
      ]
    }
  }
];
