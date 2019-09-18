import {LOAD_ALL_TODOS} from'./constants';

export const LoadTodos = (todos) =>  {
    return {
            type: LOAD_ALL_TODOS,
            payload: todos,
    }
};
