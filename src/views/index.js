import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTodos } from '../application/selectors/todos';
import { pageLoaded } from '../application/actions/ui';
import { putTodo } from '../application/actions/todos';
import { getLoading } from '../application/selectors/ui';

export default () => {
    const dispatch = useDispatch();
    const todos = useSelector(getTodos);
    const loading = useSelector(getLoading);
    useEffect(() => {
        dispatch(pageLoaded);
    }, [dispatch]);
    return (
        <>
            <h1>Essential Todos</h1>
            {loading ? 'Loading todos...' : (
                <ul>
                    {todos.map(todo => (
                        <li
                            key={todo.id}
                            style={{
                                textDecoration: todo.completed ? 'line-through' : 'none',
                                cursor: 'pointer',
                            }}
                            onClick={() => dispatch(putTodo({...todo, completed: !todo.completed }))}
                        >
                            {todo.title}
                        </li>
                    ))}
                </ul>
            )}
        </>
    )
}