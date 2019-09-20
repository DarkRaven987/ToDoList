import React from 'react';

class EditTaskPanel extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            editingTask: {}
        }
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return nextProps.editingTask.id !== this.state.editingTask.id
    }

    changeTaskTitle = (e) => {
        this.setState({editingTask: {
                ...this.state.editingTask,
                title: e.target.value
            }});
    };

    buttonClickHandler = ( isEdit = false ) => {
        let titleCondition = this.state.editingTask.title.length > 4;

        if ( isEdit ) {
            titleCondition ?
                this.props.editTask(this.state.editingTask)
                :
                alert('Task title is too short. Should be more than 4 symbols.');
        }

        this.props.setEditingTask({});
        this.props.setPanelMode(true);
    };

    render(){
        const { id, title } = this.state.editingTask;

        this.setState({editingTask: this.props.editingTask});

        return(
            <div className="addTaskContainer">
                <h3>Task #{ id }:</h3>
                <input id="editTask" type="text" placeholder="Enter task title" value={ title } onChange={ (e) => this.changeTaskTitle(e) }/>
                <div className="newTaskControlPanel">
                    <div className="newTaskButton Add" onClick={ () => this.buttonClickHandler(true) }>Edit</div>
                    <div className="newTaskButton Clear" onClick={ () => this.buttonClickHandler() }>Cancel</div>
                </div>
            </div>

        )
    }
};

export default EditTaskPanel;