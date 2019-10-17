import React from 'react';
import {getCookie, sendRequest} from "../../utility";

class AddTaskPanel extends React.Component {
    constructor(props){
        super(props);
        this.state = {
          task_title: '',
        }
    }

    changeTaskTitle = (e) => {
      this.setState({
          task_title: e.target.value
      });
    };

    buttonClickHandler = ( isAdd = false ) => {
      let titleCondition = this.state.task_title.length > 4;
      const { task_title } = this.state;

      if ( isAdd ) {
          if (titleCondition) {
            sendRequest("POST", '/tasks/add', `task_title=${task_title}&user_id=${getCookie('user_id')}`, this.props.addTask);
          } else {
            alert('Task title is too short. Should be more than 4 symbols.')
          }
      }

      this.setState({
              task_title: ''
          });
    };

    render(){
        return(
            <div className="addTaskContainer">
                <h3>New task:</h3>
                <input id="newTask" type="text" placeholder="Enter new task title" value={ this.state.task_title } onChange={ (e) => this.changeTaskTitle(e) }/>
                <div className="TaskControlPanel">
                    <div className="Button Add" onClick={ () => this.buttonClickHandler(true) }>Add</div>
                    <div className="Button Clear" onClick={ () => this.buttonClickHandler() }>Clear</div>
                </div>
            </div>

        )
    }
};

export default AddTaskPanel;