import React from 'react';

class AddTaskPanel extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            newTask: {
                task_id: '',
                task_title: '',
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

    buttonClickHandler = ( isAdd = false ) => {
      const { todos } = this.props;
      let titleCondition = this.state.newTask.title.length > 4;

      if ( isAdd ) {
          if (titleCondition) {
            this.setState({ newTask: {
                ...this.state.newTask,
                task_id: todos[todos.length-1].task_id+1
              }}, () => {
                this.props.addTask(this.state.newTask)
            });
          } else {
            alert('Task title is too short. Should be more than 4 symbols.')
          }
      }

      this.setState({newTask: {
              ...this.state.newTask,
              title: ''
          }});
    };

    render(){
        return(
            <div className="addTaskContainer">
                <h3>New task:</h3>
                <input id="newTask" type="text" placeholder="Enter new task title" value={ this.state.newTask.title } onChange={ (e) => this.changeTaskTitle(e) }/>
                <div className="TaskControlPanel">
                    <div className="Button Add" onClick={ () => this.buttonClickHandler(true) }>Add</div>
                    <div className="Button Clear" onClick={ () => this.buttonClickHandler() }>Clear</div>
                </div>
            </div>

        )
    }
};

export default AddTaskPanel;