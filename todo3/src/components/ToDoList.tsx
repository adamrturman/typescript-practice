import React, {Component} from "react";
import ToDo from "../interfaces/ToDo";
import ToDoItem from "./ToDoItem";


interface ListProps {
    list: ToDo[];
    handleDeletionFromList: (index: number) => void;
    handleCompletion: (index: number) => void;
}

export default class ToDoList extends Component<ListProps, any> {
    render() {

        const displayedList = this.props.list.map((toDo: ToDo, index: number) => (
            // <li key={index}>
            //     <span>{toDo.text}</span>
            //     <button onClick={() => this.props.handleDeletionFromList(index)}>Delete</button>
            // </li>
            <ToDoItem toDo={toDo} index={index} handleDeletionFromList={this.props.handleDeletionFromList} handleCompletion={this.props.handleCompletion} />
        ))

        return (
            <>
                <h2>List</h2>
                <div>{displayedList}</div>
            </>

        );
    }

}