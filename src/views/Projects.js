import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { getItemsSelector } from '../application/selectors/collection';
import { getLoading } from '../application/selectors/ui';
import * as uiActions from '../application/actions/ui';
import * as projectActions from '../application/actions/collection';
import classes from './Projects.module.css';

export default () => {
    
    const dispatch = useDispatch();
    const projects = useSelector(getItemsSelector);
    const loading = useSelector(getLoading);
    
    useEffect(() => {
        dispatch(uiActions.pageLoaded);
        dispatch(projectActions.loadAll('projects'));
    },[dispatch]);

    let navigate = useNavigate();
    const navigateTo = (link) => {
        dispatch(uiActions.setLoading(true));
        navigate(link);
        
    }
  
    return (
        <>
            <h1>Projects</h1>
            {loading ? 'Loading projects...' : (
                <div className={classes.listContainer}>
                    {projects.map(project => (
                        <div className={classes.item}
                            key={project.id}
                           style={{
                                textDecoration: project.completed ? 'line-through' : 'none',
                                cursor: 'pointer',
                            }}
                            onClick={()=>navigateTo('/projects/'+project.id)}
                        >
                            <h3>{project.name}</h3>
                            <p>{project.description}</p>
                            
                        </div>
                    ))}
            </div>
                
            )}
        </>
    )
}