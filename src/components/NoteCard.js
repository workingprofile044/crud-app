import React, { Component } from 'react';

class NoteCard extends Component {
    handleDelete = () => {
        this.props.onDelete(this.props.note.id);
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
