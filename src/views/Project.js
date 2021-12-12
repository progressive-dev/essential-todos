import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {useParams} from "react-router-dom";
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import { Alert,TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import * as uiActions from '../application/actions/ui';
import * as itemsActions from '../application/actions/collection';
import { getItemSelector, getActiveTabSelector} from '../application/selectors/collection';

import { getLoading } from '../application/selectors/ui';
import { pageLoaded } from '../application/actions/ui';
import classnames from 'classnames';

import Permits from '../components/Project/Permits';

import General from '../components/Project/General'
import Installations from '../components/Project/Installations'
import Sites from '../components/Project/Sites'

export default () =>{
    const { register, handleSubmit, setValue} =  useForm({ mode: 'onBlur' });
  
    let { id } = useParams();
    const dispatch = useDispatch();
    const project = useSelector(getItemSelector);
    const tab = useSelector(getActiveTabSelector);
    const loading = useSelector(getLoading);

    useEffect(() => {
        dispatch(pageLoaded);
        dispatch(itemsActions.load({id:id, table:'projects'}));
    }, [dispatch, id]);
    
    let navigate = useNavigate();
    const navigateTo = (link) => {
        dispatch(uiActions.setLoading(true));
        navigate(link);
        
    }

    useEffect(()=>{
        if(project!==null)
        {
            setValue('name', project.name );
            setValue('address', project.address);
            setValue('regionId', project.regionId);
            setValue('activityAreaId', project.activityAreaId,  )
            setValue('watchFrequencyId', project.watchFrequencyId,  )
            setValue('activeYear', project.activeYear,  )
            setValue('watchActive', project.watchActive,  )
            setValue('multiSites', project.multiSites,  )
            setValue('description', project.description,  )
            setValue('id', project.id,  )
            setValue('companyId', project.companyId,  )
               
        };
    },[setValue, project]);
   
    const toggle = tab=>{
        dispatch(itemsActions.toggleTab(tab))
    }

    const Tabs = () => {

        return(
            <>
            <Nav tabs>
                <NavItem>
                    <NavLink 
                         className={classnames({ active: (tab === "general") })}
                        role="button"
                        onClick={() => { toggle("general"); }}
                    >
                        General
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink 
                        className={classnames({ active: tab === "permit" })}
                        role="button"
                        onClick={() => { toggle("permit"); }}
                        >
                        Permits
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink 
                        className={classnames({ active: tab === "sites" })}
                        role="button"
                        onClick={() => { toggle("sites"); }}
                        >
                        Sites
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink 
                        className={classnames({ active: tab === "installations" })}
                        role="button"
                        onClick={() => { toggle("installations"); }}
                        >
                        Installations
                    </NavLink>
                </NavItem>
            </Nav></>)
    };
   
return (
    <>
        {loading ? 'Loading project...' : (
            <>
            <Alert color="primary">
            <div className="form-row row">
                <div className="form-group col-md-8">
                    <h1>{project.name }</h1>
                </div>
                <div className="form-group col-md-2">
                    <input  type='button' 
                            value ='Registre des Installations Classées - RIC' 
                            className='btn btn-outline-success'
                            onClick={()=> navigate(`/Projects/${project.id}/RegisterInstallationsClassees`)}
                            />
                </div>
                <div className="form-group col-md-2">
                    <input type='button' 
                           value ='Registre des Exigences Légales REL' 
                           className='btn btn-outline-success'/>
                </div>
            </div>
            </Alert>
            <Tabs/>
            <TabContent activeTab={tab}>
                <TabPane tabId="general">
                    <General
                        register={register}
                        project={project}
                        handleSubmit= {handleSubmit}
                        dispatch= {dispatch}
                    />                              
 
                </TabPane>   
                <TabPane tabId="permit">
                    <Permits
                        collection ={project.permits}
                        navigateTo={navigateTo}
                    />
                </TabPane> 
                <TabPane tabId="installations"> 
                    <Installations
                    dispatch={dispatch}
                    collection={project.installations}
                    />
                </TabPane> 
                <TabPane tabId ="sites">
                    <Sites/>
                </TabPane>
            </TabContent> 
           
            </>
        )}

    </>
    )
}

