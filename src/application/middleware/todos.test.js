import { loadTodosSuccess, LOAD_TODOS } from '../actions/todos';
import todosMiddleware from './todos';

describe('todos middleware', () => {
    describe('load todos flow', () => {
        const [ loadTodosFlow ] = todosMiddleware;
        
        const dummyTodo = {
            id: '1',
            title: 'Dummy todo',
            completed: true,
        };
        const api = {
            todos: {
                getAll: jest.fn().mockImplementationOnce(() => new Promise((resolve) => resolve([dummyTodo])))
            }
        }
        const dispatch = jest.fn();
        const next = jest.fn();
        const action = {
            type: LOAD_TODOS
        }

        
        it('passes action to next middleware', async () => {
            await loadTodosFlow({ api })({ dispatch })(next)(action);

            expect(next).toHaveBeenCalledWith(action);
        });

        it('calls api.todos.getAll at least once', async () => {
            await loadTodosFlow({ api })({ dispatch })(next)(action);

            expect(api.todos.getAll).toHaveBeenCalled();
        });

        it('calls api.todos.getAll at least once', async () => {
            await loadTodosFlow({ api })({ dispatch })(next)(action);

            expect(dispatch).toHaveBeenCalledWith(loadTodosSuccess([dummyTodo]));
        });
    });
});