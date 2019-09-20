import { createStore } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import { ADD_TASK, SET_TASK_DONE, SET_TASK_UNDONE, EDIT_TASK, DELETE_TASK } from './constants';

let initialStore = {
    todos: [
        {id: 1, title: 'Wake up!', isDone: 'done'},
        {id: 2, title: 'Make some tea.', isDone: 'undone'},
        {id: 3, title: 'Have a breakfast.', isDone: 'neutral'},
        {id: 4, title: 'Clear my teeth.', isDone: 'neutral'},
        {id: 5, title: 'Brush my hair.', isDone: 'neutral'},
        {id: 6, title: 'Go to work.', isDone: 'neutral'},
        {id: 7, title: 'Resolve some project issues.', isDone: 'neutral'},
        {id: 8, title: 'Report about resolved issues.', isDone: 'neutral'},
        {id: 9, title: 'Have a lunch.', isDone: 'neutral'},
        {id: 10, title: 'Go back to work.', isDone: 'neutral'},
        {id: 11, title: 'Ho home at 18:00 p.m.', isDone: 'neutral'},
        {id: 12, title: 'Have a dinner.', isDone: 'neutral'},
        {id: 13, title: 'Go play some video games.', isDone: 'neutral'},
        {id: 14, title: 'Go the fuck to sleep.', isDone: 'neutral'},
    ]
};

function reducer ( state = initialStore, action ){
    let tasks;
    switch(action.type){
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
            tasks =  state.todos.filter( el => el.id === action.payload ).map( el => {return el});
        default:
            return {
                ...state
            };
    }
}


let store = createStore(reducer, composeWithDevTools() );

export default store;
