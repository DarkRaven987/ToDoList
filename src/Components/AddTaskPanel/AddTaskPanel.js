import React from 'react';

class AddTaskPanel extends React.Component {
    constructor(props){
        super(props);
        const { todos } = this.props;
        this.state = {
            newTask: {
                id: todos[todos.length-1].id+1,
                title: '',
                isDone: false
            }
        }
    }

    changeTaskTitle = (e) => {
      this.setState({newTask: {
          ...this.state.newTask,
          title: e.target.value
      }});
    };

    addButtonHandler = () => {
        this.props.addTask(this.state.newTask);
        this.setState({newTask: {
                ...this.state.newTask,
                title: ''
            }});
    };

    render(){
        return(
            <div className="addTaskContainer">
                <h3>New task:</h3>
                <input id="newTask" type="text" placeholder="Enter new task title" value={this.state.newTask.title} onChange={ (e) => this.changeTaskTitle(e) }/>
                <div className="newTaskControlPanel">
                    <div className="newTaskButton Add" onClick={ () => this.addButtonHandler() }>Add</div>
                    <div className="newTaskButton Clear">Clear</div>
                </div>
            </div>

        )
    }
};

export default AddTaskPanel;