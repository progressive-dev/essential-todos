import React, {useEffect}from "react";
import {useParams} from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';

import * as ricActions from '../application/actions/ricActions';
import { getRic, getStatusOptions} from '../application/selectors/ricSelector';

import { getLoading } from '../application/selectors/ui';
import { pageLoaded } from '../application/actions/ui';

import  './Ric.css';

export default ()=>{

    let { id } = useParams();
    const dispatch = useDispatch();
    const ric = useSelector(getRic);
    const statusOptions = useSelector(getStatusOptions);
    const loading = useSelector(getLoading);

    const dragStart = target => {
        target.classList.add('dragging');
    };
    
    const dragEnd = target => {
        target.classList.remove('dragging');
    };
    
    const dragEnter = event => {
        event.currentTarget.classList.add('drop');
    };
    
    const dragLeave = event => {
        event.currentTarget.classList.remove('drop');
    };
    
    const drag = event => {
        event.dataTransfer.setData('text/html', event.currentTarget.outerHTML);
        event.dataTransfer.setData('text/plain', event.currentTarget.dataset.id);
    };
    
    const drop = event => {
        const data = event.dataTransfer.getData('text/plain');
        const ff= `[data-id="${event.dataTransfer.getData('text/plain')}"]`;
        
        // romve drop style from target
        document.querySelectorAll('.status').forEach(status => status.classList.remove('drop'));
        
        //document.querySelector(`[data-id="${event.dataTransfer.getData('text/plain')}"]`).remove();
        
        //remove  
        document.querySelector(ff).remove();
       

        //event.preventDefault();
        event.currentTarget.innerHTML = event.currentTarget.innerHTML + event.dataTransfer.getData('text/html');

    };
    
    const allowDrop = event => {
        event.preventDefault();
    };
    
    useEffect(() => {
        dispatch(pageLoaded);
        dispatch(ricActions.loadRic(id));
    }, [dispatch, id]);

    useEffect(()=>{

        document.querySelectorAll('.status').forEach(status => {
            status.addEventListener('dragenter', dragEnter);
            status.addEventListener('dragleave', dragLeave);
        });
        
        document.addEventListener('dragstart', e => {
            if (e.target.className.includes('card')) {
                dragStart(e.target);
            }
        });
        
        document.addEventListener('dragend', e => {
            if (e.target.className.includes('card')) {
                dragEnd(e.target);
            }
        }, []);
    
})
    return (    
            <>
                <h2>Registre des installations classées {id}</h2>
                <main className="board">
                    <div className="status status-todo" onDrop={e=> drop(e)} onDragOver={e=>allowDrop(e)}>
                        <h2>Todo</h2>
                        <article className="card" draggable="true" onDragStart={e=>drag(e)} data-id="1">
                            <h3>Todo #1</h3>
                        </article>
                        <article className="card" draggable="true" onDragStart={e=>drag(e)} data-id="2">
                            <h3>Todo #2</h3>
                        </article>
                        <article className="card" draggable="true" onDragStart={e=>drag(e)} data-id="3">
                            <h3>Todo #3</h3>
                        </article>
                    </div>

                    <div className="status status-ip" onDrop={e=> drop(e)} onDragOver={e=>allowDrop(e)}>
                        <h2>In Progress</h2>
                        <article className="card" draggable="true" onDragStart={e=>drag(e)} data-id="4">
                            <h3>IP #4</h3>
                        </article>
                        <article className="card" draggable="true" onDragStart={e=>drag(e)} data-id="5">
                            <h3>IP #5</h3>
                        </article>
                        <article className="card" draggable="true" onDragStart={e=>drag(e)} data-id="6">
                            <h3>IP #6</h3>
                        </article>
                    </div>

                    <div className="status status-done" onDrop={e=> drop(e)} onDragOver={e=>allowDrop(e)}>
                        <h2>Done</h2>
                        <article className="card" draggable="true" onDragStart={e=>drag(e)} data-id="7">
                            <h3>Done #7</h3>
                        </article>
                        <article className="card" draggable="true" onDragStart={e=>drag(e)} data-id="8">
                            <h3>Done #8</h3>
                        </article>
                        <article className="card" draggable="true" onDragStart={e=>drag(e)} data-id="9">
                            <h3>Done #9</h3>
                        </article>
                    </div>
                </main>                 
            </>
        
        );
}