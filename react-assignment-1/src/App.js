// Output multiple UserOutput components in the App component (any paragraph texts of your choice)
// Pass a username (of your choice) to UserOutput via props and display it there
// Add state to the App component (=> the username) and pass the username to the UserOutput component
// Add a method to manipulate the state (=> an event-handler method)
// Pass the event-handler method reference to the UserInput component and bind it to the input-change event
// Ensure that the new input entered by the user overwrites the old username passed to UserOutput
// Add two-way-binding to your input (in UserInput) to also display the starting username
// Add styling of your choice to your components/ elements in the components - both with inline styles and stylesheets




import React, { Component } from 'react';
import './App.css';
import UserInput from './user-input/userinput';
import UserOutput from './user-output/useroutput';

class App extends Component {
  state = {
    users: [
      { username: "Jay" },
      { username: "Roy" }
    ]
  }

  nameChangeHandler = (event) => {
    this.setState( {
      users: [
        { username: event.target.value },
        { username: "Roy" }
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <UserInput
        changed={this.nameChangeHandler} />
        <UserOutput
          username={this.state.users[0].username} />
        <UserOutput
          username={this.state.users[1].username} />
      </div>
    );
  }
}

export default App;