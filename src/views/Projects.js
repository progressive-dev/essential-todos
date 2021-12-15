import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { getItemsSelector } from '../application/selectors/collection';
import { getLoading } from '../application/selectors/ui';
import * as uiActions from '../application/actions/ui';
import * as projectActions from '../application/actions/collection';
import classes from './Projects.module.css';
import env from '../assets/env.png';
import secu from '../assets/secu.png';

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
            {loading ? 'Loading projects...' : (
                <div className={classes.listContainer}>
                    {projects.map(project => (
                        <div className={classes.item}
                            key={project.id}
                            onClick={()=>navigateTo('/projects/'+project.id)}
                        >
                            <h3 color="gray">{project.name}</h3>
                            <h5 className={classes.consultantName}>{project.consultantName}</h5>
                            {/* <p>{project.description}</p>  */}
                            <div className={classes.projectFooter}>
                                <div className={classes.fit_picture}>
                                        <div><img className={project.hasEnvironmentModule?classes.fit_picture:classes.hasOpac}
                                            src={env}
                                           
                                            alt="environment"/>
                                        </div>
                                
                                        <div><img className={project.hasSecurityModule?classes.fit_picture:classes.hasOpac}
                                            src={secu}
                                           
                                            alt="security"/>
                                        </div>
                                </div>  
                               
                            </div>                                                     
                        </div>                    
                    ))}
            </div>
                
            )}
        </>
    )
}