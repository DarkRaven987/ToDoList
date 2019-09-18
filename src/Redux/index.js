import {createStore} from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import { ADD_TASK} from'./constants';

let initialStore = {
    todos: [
        {id: 1, title: 'Wake up!', isDone: true},
        {id: 2, title: 'Make some tea.', isDone: false},
        {id: 3, title: 'Have a breakfast.', isDone: false},
        {id: 4, title: 'Clear my teeth.', isDone: false},
        {id: 5, title: 'Brush my hair.', isDone: false},
        {id: 6, title: 'Go to work.', isDone: false},
        {id: 7, title: 'Resolve some project issues.', isDone: false},
        {id: 8, title: 'Report about resolved issues.', isDone: false},
        {id: 9, title: 'Have a lunch.', isDone: false},
        {id: 10, title: 'Go back to work.', isDone: false},
        {id: 11, title: 'Ho home at 18:00 p.m.', isDone: false},
        {id: 12, title: 'Have a dinner.', isDone: false},
        {id: 13, title: 'Go play some video games.', isDone: false},
        {id: 14, title: 'Go the fuck to sleep.', isDone: false},
    ]
};

function reducer ( state = initialStore, action ){
    switch(action.type){
        case ADD_TASK:
            return {
                ...state,
                todos: [
                    ...state.todos,
                    action.payload
                ]
            };
        default:
            return {
                ...state
            };
    }
}


let store = createStore(reducer, composeWithDevTools() );

export default store;
