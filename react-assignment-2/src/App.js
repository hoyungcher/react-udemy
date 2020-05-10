// Create another component (=> CharComponent) and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).
// Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.
// When you click a CharComponent, it should be removed from the entered text.
// Hint: Keep in mind that JavaScript strings are basically arrays!


import React, { Component } from 'react';
import './App.css';
import Validation from './validation/Validation';
import Char from './char-component/CharComponent';

class App extends Component {
  state = {
    userInput: ''
  }

  updateOutputHandler = ( event ) => {
    this.setState( { userInput: event.target.value } );
  }

  deleteCharacterHandler = ( characterIndex ) => {
    const characters = this.state.userInput.split('');
    characters.splice(characterIndex, 1);
    const newCharacters = characters.join('');
    this.setState({userInput: newCharacters});

  }

  render () {
    const charComponents = this.state.userInput.split('').map((ch, index) => {
      return <Char
        character={ch}
        key={index}
        click={() => this.deleteCharacterHandler(index)} />;
    });

    return (
      <div className="App">
        <input onChange={this.updateOutputHandler} value={this.state.userInput} />
        <p>Text length: {this.state.userInput.length}</p>
        <Validation length={this.state.userInput.length} />
        {charComponents}
      </div>
    );
  }
}

export default App;
