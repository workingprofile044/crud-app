import React, { Component } from 'react';
import axios from 'axios';

class AddNoteForm extends Component {
    state = {
        content: '',
    };

    handleChange = (event) => {
        this.setState({ content: event.target.value });
    };

    handleSubmit = async (event) => {
        event.preventDefault();
        await axios.post('http://localhost:7070/notes', {
            id: 0,
            content: this.state.content,
        });
        this.props.refreshNotes();
        this.setState({ content: '' });
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    value={this.state.content}
                    onChange={this.handleChange}
                />
                <button type="submit">Add Note</button>
            </form>
        );
    }
}

export default AddNoteForm;
