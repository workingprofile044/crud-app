import React, { Component } from 'react';
import axios from 'axios';
import NoteCard from './NoteCard';

class NotesList extends Component {
    state = {
        notes: [],
    };

    componentDidMount() {
        this.fetchNotes();
    }

    fetchNotes = async () => {
        const response = await axios.get('http://localhost:7070/notes');
        this.setState({ notes: response.data });
    };

    render() {
        return (
            <div className="notes-list">
                <button onClick={this.fetchNotes}>Refresh</button>
                {this.state.notes.map(note => (
                    <NoteCard key={note.id} note={note} refreshNotes={this.fetchNotes} />
                ))}
            </div>
        );
    }
}

export default NotesList;
