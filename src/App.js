import React, { Component } from 'react';
import './App.css';
import NotesList from './components/NotesList';
import AddNoteForm from './components/AddNoteForm';

class App extends Component {
  render() {
    return (
        <div className="App">
          <h1>Notes</h1>
          <NotesList />
          <AddNoteForm />
        </div>
    );
  }
}

export default App;
