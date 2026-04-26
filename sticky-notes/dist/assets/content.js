import{c as n,j as t,R as o,H as i,A as s} from"./App.js";

const e=document.createElement("div");
e.id="task-pin-container";
Object.assign(e.style,{position:"fixed",top:"0",left:"0",width:"100vw",height:"100vh",pointerEvents:"none",zIndex:"999999"});
document.body.appendChild(e);
const r=n.createRoot(e);
r.render(t.jsx(o.StrictMode,{children:t.jsx(i,{children:t.jsx("div",{style:{pointerEvents:"auto",width:"100%",height:"100%"},children:t.jsx(s,{})})})}));
