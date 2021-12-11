import React from "react";
/*import { useDispatch, useSelector } from 'react-redux';
import { getItemSelector, getActiveTabSelector} from '../application/selectors/collection';*/


export default ()=>{

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
        document.querySelectorAll('.column').forEach(column => column.classList.remove('drop'));
        document.querySelector(`[data-id="${event.dataTransfer.getData('text/plain')}"]`).remove();
    
        event.preventDefault();
        event.currentTarget.innerHTML = event.currentTarget.innerHTML + event.dataTransfer.getData('text/html');
    };
    
    const allowDrop = event => {
        event.preventDefault();
    };
    
    document.querySelectorAll('.column').forEach(column => {
        column.addEventListener('dragEnter', dragEnter);
        column.addEventListener('dragLeave', dragLeave);
    });
    
    document.addEventListener('dragStart', e => {
        if (e.target.className.includes('card')) {
            dragStart(e.target);
        }
    });
    
    document.addEventListener('dragEnd', e => {
        if (e.target.className.includes('card')) {
            dragEnd(e.target);
        }
    });
    


    return (    
            <>
                <h1>Registre des installations classées</h1>
                <main className="board">
                    <div className="column column-todo" onDrop={e=> drop(e)} onDragOver={e=>allowDrop(e)}>
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
                    <div className="column column-ip" onDrop={e=> drop(e)} onDragOver={e=>allowDrop(e)}>
                        <h2>In Progress</h2>
                        <article className="card" draggable="true" onDragStart={e=>drag(e)} data-id="4">
                            <h3>IP #1</h3>
                        </article>
                        <article className="card" draggable="true" onDragStart={e=>drag(e)} data-id="5">
                            <h3>IP #2</h3>
                        </article>
                        <article className="card" draggable="true" onDragStart={e=>drag(e)} data-id="6">
                            <h3>IP #3</h3>
                        </article>
                    </div>
                    <div className="column column-done" onDrag={e=>drop(e)} onDragOver={e=>allowDrop(e)}>
                        <h2>Done</h2>
                        <article className="card" draggable="true" onDragStart={e=>drag(e)}  data-id="7">
                            <h3>Done #1</h3>
                        </article>
                        <article className="card" draggable="true" onDragStart={e=>drag(e)}  data-id="8">
                            <h3>Done #2</h3>
                        </article>
                        <article className="card" draggable="true" onDragStart={e=>drag(e)} data-id="9">
                            <h3>Done #3</h3>
                        </article>
                    </div>
                </main>                 
            </>
        
        );
}