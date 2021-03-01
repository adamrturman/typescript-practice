import React, {Component} from "react";

interface InputAreaProps {
    handleAdditionToList: (taskToAdd: string) => void;
}

interface InputAreaState {
    taskToAdd: string;
}

export default class ToDoInputArea extends Component<InputAreaProps, InputAreaState> {
    state = {
        taskToAdd: ''
    }

    handleChange = (event: any) => {
        this.setState({ taskToAdd: event.target.value })
        console.log(this.state.taskToAdd)
    }

    addToList = (event: any) => {
        this.props.handleAdditionToList(this.state.taskToAdd);
        this.setState({ taskToAdd: '' });
    }

    render() {
        return (
            <>
                <input value={this.state.taskToAdd} onChange={this.handleChange} />
                <button onClick={this.addToList}>Add</button>
            </>
        );
    }
}