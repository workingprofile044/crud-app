import React, { Component } from 'react';

class AddNoteForm extends Component {
    state = {
        content: '',
    };

    handleChange = (event) => {
        this.setState({ content: event.target.value });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.onAdd(this.state.content);
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
