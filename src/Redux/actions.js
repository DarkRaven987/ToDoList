import {
    ADD_TASK,
    EDIT_TASK,
    DELETE_TASK,
    LOAD_TASKS,
    FILTER_TASKS
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

export const editTask = (editedTask) => {
    return {
        type: EDIT_TASK,
        payload: JSON.parse(editedTask)
    }
};

export const deleteTask = (taskNumber) => {
    return {
        type: DELETE_TASK,
        payload: JSON.parse(taskNumber)
    }
}

export const filterTasks = ( conditionObject ) => {
    return {
        type: FILTER_TASKS,
        payload: conditionObject
    }
}