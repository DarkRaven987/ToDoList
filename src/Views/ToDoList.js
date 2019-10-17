import React from 'react';
import {connect} from "react-redux";
import { bindActionCreators } from "redux";

import {addTask, setTaskDone, setTaskUndone, editTask, deleteTask, loadTasks} from "../Redux/actions";
import ToDoListItem from "../Components/ToDoListItem/ToDoListItem";
import AddTaskPanel from '../Components/AddTaskPanel/AddTaskPanel';
import EditTaskPanel from "../Components/EditTaskPanel/EditTaskPanel";
import {getCookie, sendRequest} from "../utility";

class ToDoList extends React.Component{

  constructor(props){
    super(props);

    this.state = {
      isCreateMode: true,
      editingTask: {},
      editingTaskNumber: '',
    }
  }

  componentWillMount() {
    sendRequest('POST', '/tasks', `user_id=${getCookie('user_id')}`, this.props.loadTasks);
  }

  setEditingTask = (task, number) => {
    this.setState({ editingTask: task, editingTaskNumber: number});
  };

  setEditingTaskTitle = (e) => {
    this.setState({editingTask: {
        ...this.state.editingTask,
          title: e.target.value
      }})
  };

  getEditingTaskTitle = () => {
    return this.state.editingTask.title;
  };

  setPanelMode = ( mode ) => {
    this.setState({ isCreateMode: mode});
  }

  getEditingTask = () => {
    return this.state.editingTask;
  };

  getEditingTaskNumber = () => {
    return this.state.editingTaskNumber;
  };

  render(){
    const { todos, addTask, setTaskDone, setTaskUndone, editTask, deleteTask } = this.props;
    const { isCreateMode } = this.state;

    return(
      <div className="container">
        <div className="content_container tasks_list">

          <h2 className="todoListHeader">Tasks to do list</h2>

          {
            isCreateMode ?
                <AddTaskPanel
                    addTask={ addTask }
                    todos={ todos }
                />
                :
                <EditTaskPanel
                    editTask={ editTask }
                    setEditingTaskTitle={ this.setEditingTaskTitle }
                    setPanelMode={ this.setPanelMode }
                    getEditingTaskTitle={ this.getEditingTaskTitle }
                    getEditingTask={ this.getEditingTask }
                    getEditTaskNumber={ this.getEditingTaskNumber }
                />
          }

          <div className="todoList">
            {
              todos.map( (el, i) => {
                return (
                    <ToDoListItem
                        item={ el }
                        key={ el.task_id }
                        number={ i }
                        setEditingTask={ this.setEditingTask }
                        setPanelMode={ this.setPanelMode }
                        setTaskDone={ setTaskDone }
                        setTaskUndone={ setTaskUndone }
                        deleteTask = { deleteTask }
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
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadTasks: bindActionCreators(loadTasks, dispatch),
    addTask: bindActionCreators(addTask, dispatch),
    setTaskDone: bindActionCreators(setTaskDone, dispatch),
    setTaskUndone: bindActionCreators(setTaskUndone, dispatch),
    editTask: bindActionCreators(editTask, dispatch),
    deleteTask: bindActionCreators(deleteTask, dispatch),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);

