import React, {Component} from "react";
import ToDo from "../interfaces/ToDo";
import styles from "../styles/ToDoItem.module.css"

interface ItemProps {
    toDo: ToDo;
    index: number;
    handleDeletionFromList: (index: number) => void;
    handleCompletion: (index: number) => void;
}

export default class ToDoItem extends Component<ItemProps, any> {

    render() {

        const itemClasses = this.props.toDo.isCompleted ? `${styles.completed}` : ``;

        return (
            <li className={itemClasses} key={this.props.index}>
                <span>{this.props.toDo.text}</span>
                <button onClick={() => this.props.handleDeletionFromList(this.props.index)}>Delete</button>
                <button onClick={() => this.props.handleCompletion(this.props.index)}>{this.props.toDo.isCompleted ? 'Unmark' : 'Mark'}</button>
            </li>
        );
    }
}