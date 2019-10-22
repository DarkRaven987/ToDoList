import { createStore } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';

import {
    ADD_TASK,
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
        case EDIT_TASK:
            const editedTask = action.payload;

            tasks = state.todos.map( el => {
                if ( el.task_id === editedTask.task_id) {
                    return editedTask;
                }
                return el;
            } );

            return {
                ...state,
                todos: tasks
            };
        case DELETE_TASK:
            tasks = state.todos.filter( el => el.task_id !== action.payload );

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
