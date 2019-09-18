import { ADD_TASK, SET_TASK_DONE } from'./constants';

export const addTask = (task) =>  {
    return {
            type: ADD_TASK,
            payload: task,
    }
};

export const setTaskDone = (taskNumber) => {
    return {
        type: SET_TASK_DONE,
        payload: taskNumber
    }
}
