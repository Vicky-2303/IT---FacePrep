I have started the React Js, Node JS installation, setup, Environmental setup, extension, libraries, Babel setup, and CDN links info. I was confused by React and JS syntax, components, and so on, and I worked with some codes.


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


React JS :
* Need to download node.JS
* After the download, open command prompt
*Type, node -v    (used to check the version)
*Type, npx create-react-app basicreactproject     (to create the react app file-> syntax: npx create-react-app filename)  

TO start the ReactJS:
open command prompt:
* fetch the react file directory by typing: cd react filename(syntax)
* To start the react app and to get the localhost address type: npm start    (npm stands-> node package manager)


TO stop the reactJs:
* press ctrl+c and type 'y' to stop the terminal.
*if you want to start the react-> again type 'npm start'

To start & stop in the VS. code:
* Open the VS.code, open a new folder->fetch the react File location, and then open it.
* press ctrl + ` to open the terminal and then type the same open & close statements.

VS. code react js folder uploaded and file info.:
* node-modules -> This will store the libraries. 
* public -> it stores the default reactJS webpage -> HTML, CSS, js, icon, PNG file, etc.


bundle.js:
* All the react js or javascript files will be converted to a single pure JS file and it again converts to a single bundle.js file with the help of webpack(uses the code-> npx create-React-App and webpack will create the interface. That's why at the end of the compilation it shows "webpack compiled successfully". without webpack-> reactJs nothing.) 


Props:




