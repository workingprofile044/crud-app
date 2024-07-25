import React, { Component } from 'react';
import './App.css';
import NotesList from './components/NotesList';
import AddNoteForm from './components/AddNoteForm';
import axios from 'axios';

class App extends Component {
    state = {
        notes: [],
        time: new Date().toLocaleTimeString(),
    };

    componentDidMount() {
        this.fetchNotes();
        this.timerID = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick = () => {
        this.setState({
            time: new Date().toLocaleTimeString(),
        });
    };

    fetchNotes = async () => {
        try {
            const response = await axios.get('http://localhost:7070/notes');
            this.setState({ notes: response.data });
        } catch (error) {
            console.error("There was an error fetching the notes!", error);
        }
    };

    handleAddNote = async (content) => {
        try {
            await axios.post('http://localhost:7070/notes', { id: 0, content });
            this.fetchNotes();
        } catch (error) {
            console.error("There was an error adding the note!", error);
        }
    };

    handleDeleteNote = async (id) => {
        try {
            await axios.delete(`http://localhost:7070/notes/${id}`);
            this.fetchNotes();
        } catch (error) {
            console.error("There was an error deleting the note!", error);
        }
    };

    render() {
        return (
            <div className="App">
                <h1>Notes</h1>
                <p>Current Time: {this.state.time}</p>
                <NotesList notes={this.state.notes} onDelete={this.handleDeleteNote} />
                <AddNoteForm onAdd={this.handleAddNote} />
            </div>
        );
    }
}

export default App;
