import React from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { addTask, editTask, deleteTask, loadTasks } from "../Redux/actions";
import ToDoListItem from "../Components/ToDoListItem/ToDoListItem";
import AddTaskPanel from '../Components/AddTaskPanel/AddTaskPanel';
import EditTaskPanel from "../Components/EditTaskPanel/EditTaskPanel";
import { getCookie, sendRequest } from "../utility";
import DropDown from '../Components/Dropdown/DropDown';

class ToDoList extends React.Component{

  constructor(props){
    super(props);

    this.state = {
      isCreateMode: true,
      editingTask: {},
      editingTaskNumber: '',
      filterOpened: false,
      filter_values: {
        task_title: '',
        category: {
          home: false ,
          work: false,
          shop: false,
          tourism: false,
          other: false
        },
        status: 'all'
      }
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
          task_title: e.target.value
      }})
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

  selectCategory = ( param ) => {
    switch(param) {
      case 'home':
        this.setState({
          ...this.state,
          filter_values: {
            ...this.state.filter_values,
            category: {
              ...this.state.filter_values.category,
              home: !this.state.filter_values.category.home
            }
          }
        });
        break;
      case 'work':
        this.setState({
          ...this.state,
          filter_values: {
            ...this.state.filter_values,
            category: {
              ...this.state.filter_values.category,
              work: !this.state.filter_values.category.work
            }
          }
        });
        break;
      case 'shop':
        this.setState({
          ...this.state,
          filter_values: {
            ...this.state.filter_values,
            category: {
              ...this.state.filter_values.category,
              shop: !this.state.filter_values.category.shop
            }
          }
        });
        break;
      case 'tourism':
        this.setState({
          ...this.state,
          filter_values: {
            ...this.state.filter_values,
            category: {
              ...this.state.filter_values.category,
              tourism: !this.state.filter_values.category.tourism
            }
          }
        });
        break;
      case 'other':
        this.setState({
          ...this.state,
          filter_values: {
            ...this.state.filter_values,
            category: {
              ...this.state.filter_values.category,
              other: !this.state.filter_values.category.other
            }
          }
        });
        break;
      default:
    }
  }

  selectStatus = (status) => {
    this.setState({
      ...this.state,
      filter_values: {
        ...this.state.filter_values,
        status
      }
    });
  }

  render(){
    const { todos, addTask, editTask, deleteTask } = this.props;
    const { isCreateMode, filter_values } = this.state;

    return(
      <div className="container">
        <div className="content_container">

          <div className={this.state.filterOpened ? "filter_container opened" : "filter_container"}>
            <h2 className="filter_title">Filters</h2>
            <div className="filterOptions">
              <div className="filter_option">
                <h3>Task title</h3>
                <input className="title_search_input" placeholder="Task title" />
              </div>
              <div className="filter_option">
                <DropDown title="Status">
                  <div className="category_option">
                    <input id="status_all" type="radio" checked = { filter_values.status==='all' } onChange = { () => this.selectStatus('all')} />
                    <label htmlFor="status_all">
                      All
                    </label>
                  </div>
                  <div className="category_option">
                    <input id="status_neutral" type="radio" checked = { filter_values.status==='neutral' } onChange = { () => this.selectStatus('neutral')} />
                    <label htmlFor="status_neutral">
                      Neutral
                    </label>
                  </div>
                  <div className="category_option">
                    <input id="status_done" type="radio" checked = { filter_values.status==='done' }  onChange = { () => this.selectStatus('done')}/>
                    <label htmlFor="status_done">
                      Done
                    </label>
                  </div>
                  <div className="category_option">
                    <input id="status_undone" type="radio" checked = { filter_values.status==='undone' }  onChange = { () => this.selectStatus('undone')}/>
                    <label htmlFor="status_undone">
                      Undone
                    </label>
                  </div>
                </DropDown>
              </div>
              <div className="filter_option">
                <DropDown title="Category">
                  <div className="category_select">
                  <div className="category_option">
                      <input id='category_home' type="checkbox" checked = { filter_values.category.home } onChange = { () => this.selectCategory('home')}/>
                      <label htmlFor='category_home'>
                        Home
                      </label>
                    </div> 
                    <div className="category_option">                     
                      <input id='category_work' type="checkbox" checked = { filter_values.category.work } onChange = { () => this.selectCategory('work')}/>
                      <label htmlFor="category_work">
                        Work
                      </label>
                    </div> 
                    <div className="category_option">                     
                      <input id='category_shop' type="checkbox" checked = { filter_values.category.shop }  onChange = { () => this.selectCategory('shop')}/>
                      <label htmlFor="category_shop">
                        Shop
                      </label>
                    </div> 
                    <div className="category_option">                     
                      <input id='category_tourism' type="checkbox" checked = { filter_values.category.tourism }  onChange = { () => this.selectCategory('tourism')}/>
                      <label htmlFor="category_tourism">
                        Tourism
                      </label>
                    </div> 
                    <div className="category_option">                     
                      <input id='category_other' type="checkbox" checked = { filter_values.category.other } onChange = { () => this.selectCategory('other')}/>
                      <label htmlFor="category_other">
                        Other
                      </label>
                    </div>
                  </div>
                </DropDown>
              </div>
            </div>
            <button className="filterSearchButton Clear">
              Search
            </button>
          </div>
          <div className="tasks_list">
            <h2 className="todoListHeader" onClick={ () => {
              this.setState({filterOpened: !this.state.filterOpened})
            }}>Tasks to do list</h2>

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
                        getEditingTask={ this.getEditingTask }
                        getEditingTaskNumber={ this.getEditingTaskNumber }
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
                            editTask={ editTask }
                            deleteTask = { deleteTask }
                        />
                    )
                  })
                }
              </div>
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
    editTask: bindActionCreators(editTask, dispatch),
    deleteTask: bindActionCreators(deleteTask, dispatch),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);

