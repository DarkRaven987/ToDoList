import React from 'react';
import {connect} from "react-redux";
import { bindActionCreators } from "redux";

import {addTask, setTaskDone, setTaskUndone} from "../../Redux/actions";
import ToDoListItem from "../ToDoListItem/ToDoListItem";
import AddTaskPanel from '../AddTaskPanel/AddTaskPanel';
import EditTaskPanel from "../EditTaskPanel/EditTaskPanel";

class ToDoList extends React.Component{

  constructor(props){
    super(props);

    this.state = {
      isCreateMode: true,
      editingTask: {},
    }
  }

  setEditingTask = (task) => {
    this.setState({ editingTask: task, isCreateMode: false});
  };

  getEditingTask = () => {
    return this.state.editingTask;
  }

  render(){
    const { todos, addTask, setTaskDone, setTaskUndone } = this.props;
    const { isCreateMode } = this.state;

    return(
      <div className="todoListEnv">
        <div className="listContainer">

          <h2 className="todoListHeader">Tasks to do list</h2>

          {
            isCreateMode ? <AddTaskPanel addTask={addTask} todos={todos}/> :  <EditTaskPanel editingTask={this.getEditingTask()} />
          }

          <div className="todoList">
            {
              todos.map( (el, i) => {
                return (
                    <ToDoListItem
                        item={ el }
                        key={ el.id }
                        number={ i }
                        setEditingTask={this.setEditingTask}
                        setTaskDone={ setTaskDone }
                        setTaskUndone={ setTaskUndone }
                    />
                )
              })
            }
          </div>

        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    addTask: bindActionCreators(addTask, dispatch),
    setTaskDone: bindActionCreators(setTaskDone, dispatch),
    setTaskUndone: bindActionCreators(setTaskUndone, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);

