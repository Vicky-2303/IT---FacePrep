Class Component:
Syntax:
import React from "react";
class className extends React.Component
{

}
-------------------------------------------------------------------
In functional component, using return(); to write the JSX file.
In class component, using render() method to write the JSX file.

--------------------------------------------------------------------------------------

To make the class component 100%:
We have to extend the class with predefined class components.
syntax:
import React from "react";
class A extends React.Component{

}
//React.Component is one of the property of React class(Predefined).--> then after extending with Js class called React class,(extending is only the difference b/w Js class and react class).
---------------------------------------------------------------------------------------
How to export the class:
syntax:
export default class_Name;

---------------------------------------------------------------------------------------
If you want to call the function / class inside the index.js file, do export in that file and follow the syntax to import and render it.
----------------------------------------------------------------------------------------------------------------
