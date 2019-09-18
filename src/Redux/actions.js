import {ADD_TASK} from'./constants';

export const addTask = (task) =>  {
    return {
            type: ADD_TASK,
            payload: task,
    }
};
