import { loadTodosFailure, loadTodosSuccess, LOAD_TODOS, PUT_TODO, setTodos } from "../actions/todos";
import * as uiActions from '../actions/ui';

const loadTodosFlow = ({ api }) => ({ dispatch }) => next => async (action) => {
    next(action);

    if (action.type === LOAD_TODOS) {
        try {
            dispatch(uiActions.setLoading(true));
            const todos = await api.todos.getAll();
            dispatch(loadTodosSuccess(todos));
            dispatch(uiActions.setLoading(false));
        } catch (error) {
            dispatch(loadTodosFailure(error));
        }
    }
}

const putTodoFlow = () => ({ dispatch, getState }) => next => action => {
    
    if (action.type === PUT_TODO) {
        const oldTodosClone = getState().todos.allTodos.map(todo => ({...todo}));

        const newTodo = action.payload;

        const index = oldTodosClone.findIndex(todo => todo.id === newTodo.id);

        oldTodosClone[index] = newTodo;

        dispatch(setTodos(oldTodosClone));
    }

    next(action);
}

export default [
    loadTodosFlow,
    putTodoFlow,
]