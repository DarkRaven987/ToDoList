import { createStore } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';

import {
    ADD_TASK,
    SET_TASK_DONE,
    SET_TASK_UNDONE,
    EDIT_TASK,
    DELETE_TASK,
    LOAD_TASKS
} from './constants';

let initialStore = {
    todos: []
};

function reducer ( state = initialStore, action ){
    let tasks;
    switch(action.type){
        case LOAD_TASKS:
            return {
                ...state,
                todos: action.payload
            }
        case ADD_TASK:
            return {
                ...state,
                todos: [
                    ...state.todos,
                    action.payload
                ]
            };
        case SET_TASK_DONE:
            tasks = state.todos.map( (el, i) => {
                if( el.id === action.payload ) el.isDone = 'done';
                return el;
            });
            return {
                ...state,
                todos: tasks

            };
        case SET_TASK_UNDONE:
            tasks = state.todos.map( (el) => {
                if( el.id === action.payload ) el.isDone = 'undone';
                return el;
            });
            return {
                ...state,
                todos: tasks
            };
        case EDIT_TASK:
            tasks = state.todos.map( (el) => {
                if( el.id === action.payload.id ) el.title = action.payload.title;
                return el;
            });
            return {
                ...state,
                todos: tasks
            };
        case DELETE_TASK:
            console.log(state.todos);
            tasks =  state.todos.filter( el => el.id !== action.payload ).map( el => {return el});
            console.log(tasks);
            return {
                ...state,
                todos: tasks
            };
        default:
            return {
                ...state
            };
    }
}


let store = createStore(reducer, composeWithDevTools() );

export default store;
