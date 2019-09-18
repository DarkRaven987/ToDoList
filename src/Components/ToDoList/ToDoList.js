import React from 'react';
import {connect} from "react-redux";
import { bindActionCreators } from "redux";

import {ToDoListItem} from "../ToDoListItem/ToDoListItem";

class ToDoList extends React.Component{
  render(){
    const {todos} = this.props;
    console.log(todos);

    return(
      <div className="todoListEnv">
        <div className="listContainer">

          <h2 className="todoListHeader">Tasks to do list</h2>
          <div className="todoList">
            {
              todos.map( (el) => {
                return (
                    <ToDoListItem item={el}/>
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
    // checkStatus: bindActionCreators(checkStatus, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);

