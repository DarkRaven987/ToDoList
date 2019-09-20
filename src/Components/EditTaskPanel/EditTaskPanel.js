import React from 'react';

class EditTaskPanel extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            editingTask: this.props.editingTask
        }
    }

    changeTaskTitle = (e) => {
        this.setState({newTask: {
                ...this.state.newTask,
                title: e.target.value
            }});
    };

    buttonClickHandler = ( isEdit = false ) => {
        let titleCondition = this.state.editingTask.title.length > 4;

        if ( isEdit ) {
            titleCondition ?
                this.props.addTask(this.state.newTask)
                :
                alert('Task title is too short. Should be more than 4 symbols.');
        }

        this.setState({newTask: {
                ...this.state.newTask,
                title: ''
            }});
    };

    render(){
        return(
            <div className="addTaskContainer">
                <h3>Task #{ this.props.editingTask.id }:</h3>
                <input id="editTask" type="text" placeholder="Enter task title" value={ this.state.editingTask.title } onChange={ (e) => this.changeTaskTitle(e) }/>
                <div className="newTaskControlPanel">
                    <div className="newTaskButton Add" onClick={ () => this.buttonClickHandler(true) }>Edit</div>
                    <div className="newTaskButton Clear" onClick={ () => this.buttonClickHandler() }>Cancel</div>
                </div>
            </div>

        )
    }
};

export default EditTaskPanel;