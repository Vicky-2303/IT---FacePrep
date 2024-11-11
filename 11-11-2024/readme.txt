I have started the React Js, Node JS installation, setup, Environmental setup, extension, libraries, Babel setup, and CDN links info. I was confused by React and JS syntax, components, and so on, and I worked with some codes, but they did not react in the output/web browser. Tomorrow, I have to try to fix the issues. 


Microsoft Windows [Version 10.0.22631.4391]
(c) Microsoft Corporation. All rights reserved.

C:\Users\vikam>node --version
v23.1.0

C:\Users\vikam>npm --version
10.9.0

import React from 'react';
import ReactDOM from 'react-dom/client';

function Hello(props) {
  return <h1>Hello World!</h1>;
}

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<Hello />);

npx create-react-app my-react-app


const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<p>Hello</p>);



const myelement = (
  <table>
    <tr>
      <th>Name</th>
    </tr>
    <tr>
      <td>John</td>
    </tr>
    <tr>
      <td>Elsa</td>
    </tr>
  </table>
);

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(myelement);