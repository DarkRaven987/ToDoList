import {
    ADD_TASK,
    SET_TASK_DONE,
    SET_TASK_UNDONE,
    EDIT_TASK,
    DELETE_TASK,
    LOAD_TASKS
} from'./constants';

export const loadTasks = (tasks) => {
    return {
        type: LOAD_TASKS,
        payload: JSON.parse(tasks)
    }
}

export const addTask = (task) =>  {
    return {
            type: ADD_TASK,
            payload: JSON.parse(task),
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
};

export const deleteTask = (taskNumber) => {
    return {
        type: DELETE_TASK,
        payload: taskNumber
    }
}