import React, {Component} from 'react';
import ToDo from "./interfaces/ToDo";
import ToDoInputArea from './components/ToDoInputArea'
import ToDoList from './components/ToDoList'
import './App.css';

interface  AppState {
    list: ToDo[];
}

class App extends Component<{}, AppState> {
    state = {
        list: []
    }

    handleAdditionToList = (taskToAdd: string) => {
        const newToDo: ToDo = {
            text: taskToAdd,
            isCompleted: false
        };
        const updatedList: ToDo[] = [newToDo, ...this.state.list];
        this.setState({ list: updatedList });
    }

    handleCompletion = (index: number) => {
        const listWithToggledItem = this.state.list.map((toDo: ToDo, i) => {
            if (i === index) {
                toDo.isCompleted = !toDo.isCompleted;
            }
            return toDo;
        });
        this.setState({ list: listWithToggledItem });
    }

    handleDeletionFromList = (index: number) => {
        const listWithDeletion = this.state.list.filter((toDo: ToDo, i ) => {
            return i !== index;
        });
        this.setState({ list: listWithDeletion });
    }

  render() {

    return (
    <div className="App">
        <>
            <h1>To Do App</h1>
            <ToDoInputArea handleAdditionToList={this.handleAdditionToList} />
            <ToDoList list={this.state.list} handleDeletionFromList={this.handleDeletionFromList} handleCompletion={this.handleCompletion} />
        </>

    </div>
  );
}
}

export default App;
