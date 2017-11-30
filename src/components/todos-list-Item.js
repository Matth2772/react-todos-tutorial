import React from 'react';

export default class TodosListItem extends React.Component {
    constructor (props) {
        super(props)

        this.state = {
            isEditing: false
        }
    }

    renderActionSection () {
        if (this.state.isEditing) {
            return (
                <td>
                    <button onClick={this.onSaveClick}>Save</button>
                    <button onClick={this.onCancelClick}>Cancel</button>
                </td>

            );
        }

        return (
            <td>
                <button onClick={this.onEditClick}>Edit</button>
                <button onClick={this.props.deleteTask.bind(this, this.props.task)}>Delete</button>
            </td>

        );
    }

    renderTaskSection = () => {
        const {task, isCompleted} = this.props;

        const taskStyle = {
            color: isCompleted ? 'green' : 'red',
            cursor: 'pointer'
        }

        if (this.state.isEditing) {
            return (
            <td>
                <form onSubmit={this.onSaveClick}>
                    <input type="text" defaultValue={task} ref="editInput" />
                </form>
            </td>

            );
        }

        return (
            <td
                style={taskStyle}
                onClick={this.props.toggleTask.bind(this, task)}>
                {task}
            </td>
        )
    }

    render () {
        return (
            <tr>
                {this.renderTaskSection()}
                {this.renderActionSection()}
            </tr>
        );
    }

    onSaveClick = (e) => {
        e.preventDefault();

        const oldTask = this.props.task;
        const newTask = this.refs.editInput.value;
        this.props.saveTask(oldTask, newTask);
        this.setState({isEditing: false});
    }

    onEditClick = () => {
        this.setState({isEditing: true});
    }

    onCancelClick = () => {
        this.setState({isEditing: false});
    }
}