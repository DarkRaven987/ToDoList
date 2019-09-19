import React from 'react';
import {connect} from "react-redux";
import { bindActionCreators } from "redux";

import {addTask} from "../../Redux/actions";
import ToDoListItem from "../ToDoListItem/ToDoListItem";
import AddTaskPanel from '../AddTaskPanel/AddTaskPanel';

class ToDoList extends React.Component{
  render(){
    const { todos, addTask } = this.props;

    return(
      <div className="todoListEnv">
        <div className="listContainer">

          <h2 className="todoListHeader">Tasks to do list</h2>

          <AddTaskPanel addTask={addTask} todos={todos}/>

          <div className="todoList">
            {
              todos.map( (el, i) => {
                return (
                    <ToDoListItem item={el} key={el.id} number={i}/>
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
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);

