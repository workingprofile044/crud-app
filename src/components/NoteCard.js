import React, { Component } from 'react';
import axios from 'axios';

class NoteCard extends Component {
    handleDelete = async () => {
        await axios.delete(`http://localhost:7070/notes/${this.props.note.id}`);
        this.props.refreshNotes();
    };

    render() {
        const { note } = this.props;
        return (
            <div className="note-card">
                <p>{note.content}</p>
                <button onClick={this.handleDelete}>X</button>
            </div>
        );
    }
}

export default NoteCard;
