import React, { Component } from 'react';
import NoteCard from './NoteCard';

class NotesList extends Component {
    render() {
        return (
            <div className="notes-list">
                {this.props.notes.map(note => (
                    <NoteCard key={note.id} note={note} onDelete={this.props.onDelete} />
                ))}
            </div>
        );
    }
}

export default NotesList;
