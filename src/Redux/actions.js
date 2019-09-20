import { ADD_TASK, SET_TASK_DONE, SET_TASK_UNDONE, EDIT_TASK } from'./constants';

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
};

export const setTaskUndone = (taskNumber) => {
    return {
        type: SET_TASK_UNDONE,
        payload: taskNumber
    }
};

export const editTask = (editedTask) => {
    return {
        type: EDIT_TASK,
        payload: editedTask
    }
}