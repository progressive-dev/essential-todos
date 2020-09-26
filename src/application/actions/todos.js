export const LOAD_TODOS = '[todos] load';
export const LOAD_TODOS_SUCCESS = '[todos] load success';
export const LOAD_TODOS_FAILURE = '[todos] load failure';
export const SET_TODOS = '[todos] set';
export const PUT_TODO = '[todos] put';

export const loadTodos = {
    type: LOAD_TODOS,
};

export const loadTodosSuccess = todos => ({
    type: LOAD_TODOS_SUCCESS,
    payload: todos,
});

export const loadTodosFailure = error => ({
    type: LOAD_TODOS_FAILURE,
    payload: error,
});

export const setTodos = todos => ({
    type: SET_TODOS,
    payload: todos,
});

export const putTodo = todo => ({
    type: PUT_TODO,
    payload: todo,
});