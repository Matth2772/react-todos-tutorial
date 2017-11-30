import React from 'react';
import TodosList from './todos-list'
import CreateTodo from "./create-todo"
import {find} from "lodash"

const todos = [
    {
        task: 'task 1',
        isCompleted: false
    }, {
        task: 'task 2',
        isCompleted: true
    }
];

export default class App extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            todos
        };
    }

    render () {
        return (
            <div>
                <h1>React Todos App</h1>
                <CreateTodo
                    todos={this.state.todos}
                    createTask={this.createTask}
                />
                <TodosList
                    todos={this.state.todos}
                    toggleTask={this.toggleTask}
                    saveTask={this.saveTask}
                    deleteTask={this.deleteTask}
                />
            </div>
        );
    }

    toggleTask = (task) => {
        const foundTodo = find(this.state.todos, todo => todo.task === task);
        foundTodo.isCompleted = !foundTodo.isCompleted
        this.setState({todos: this.state.todos})
    }

    createTask = (task) => {
        console.log(this);
        this.state.todos.push({
            task,
            isCompleted: false
        });

        this.setState({todos: this.state.todos})
    };

    saveTask = (oldTask, newTask) => {
        const foundTodo = _.find(this.state.todos, todo => todo.task === oldTask)

        foundTodo.task = newTask;

        this.setState({todos: this.state.todos})
    };

    deleteTask = (taskToDelete) => {
        _.remove(this.state.todos, todo => todo.task === taskToDelete)

        this.setState({todos: this.state.todos})
    };
}