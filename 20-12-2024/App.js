import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from "./Header";
import reportWebVitals from "./reportWebVitals";
function App(){
  return(
 <h2>Hello</h2>
  );
}
function Area(){
  const a=10;
  let b=20;
 // <App/>
  return a+b;
}
const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Area/>
    <App/>
  </React.StrictMode>
);
//reportWebVitals();

export default App;