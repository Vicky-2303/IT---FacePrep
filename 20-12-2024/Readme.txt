React Components:
The components are classified into two ways:
*Functional
*class
----------------------------------------------------------------------------
In the components, the props are used to pass the information between the components.
-----------------------------------------------------------------------------------------
JSX(JavaScript with XML)-> to find this jsx file, open src->App.js(the code was written in JSX format)
-----------------------------------------------------------------------------------------

Important files to be imported:
*import React from 'react';
*import ReactDOM from 'react-dom/client';
----------------------------------------------------------------------
Without the two files as mentioned earlier, the react would not work in the browser.
--------------------------------------------------------------------------

In react, we have to write the statements inside the functions.
Example:
function A(){
return( //HTML code
<h2> Hello </h2>
);
}
-------------------------------------------------------------------------
If you want to call the functions in the same file individual:

syntax:
const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Area/>
    <App/>
  </React.StrictMode>
);

Example:

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

export default App;//important to print the module. 
------------------------------------------------------------------------------------


