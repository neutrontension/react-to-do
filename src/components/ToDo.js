//Importing the Component class
import React, { Component } from 'react';

//Defining the class that extends Component
class ToDo extends Component {
  //defining a render() Method on the Class
  //defined here, ToDo. This Method is required
  render() {
    return (
      <li> A todo will go here </li>
    );
  }
}

//Exporting the class: once a component inspect
//exported, it can be imported anywhere you want
//to use it. In this case, the ToDo component
//will be imported in the App.js file.
export default ToDo;
