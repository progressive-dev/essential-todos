import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {useParams,Link} from "react-router-dom";
import { useForm } from "react-hook-form";


import classnames from 'classnames';
import {  getPermitItems, getPermit,getAuthorities, getContextOptions, getContexts, getActiveTabSelector} from '../application/selectors/permits';
import * as permitActions from '../application/actions/permitActions';
import { getLoading } from '../application/selectors/ui';
import { pageLoaded } from '../application/actions/ui';
import PermitGeneral from '../components/Permit/General';
import PermitDetail from '../components/Permit/Detail';
import * as uiActions from '../application/actions/ui';

import { Alert,TabContent, TabPane, Nav, NavItem, NavLink, Row, Col } from 'reactstrap';


export default ()=>{
    const { register, handleSubmit, setValue,reset,getValues, control} =  useForm({ mode: 'onBlur' });
    const dispatch = useDispatch();
    const permit = useSelector(getPermit);
    const authorities = useSelector(getAuthorities);
    const contextOptions = useSelector(getContextOptions);
    const contexts = useSelector(getContexts);
    const permitItems=useSelector(getPermitItems);
    const tab = useSelector(getActiveTabSelector);
    const loading = useSelector(getLoading);
    let { id } = useParams();

    useEffect(() => {
        dispatch(pageLoaded);
        dispatch(permitActions.load(id));   
    }, [dispatch,id]);

    const toggle = tab=>{
        dispatch(permitActions.toggleTab(tab))
    }
    const General = () => {
        return (
                    <NavLink
                            role="button"
                            className={classnames({ active: (tab === "general") })}
                            onClick={() => { toggle("general"); }}
                        >
                        General
                       
                    </NavLink>
                )
    }

    const Detail = () => {
        return (
                    <NavLink
                        role="button"
                        className={classnames({ active: (tab === "detail") })}
                        onClick={() => { toggle("detail"); }}
                        >
                        Detail
                       
                    </NavLink>
                )
    }

    const Tabs = () => {

        return(
            
            <Nav tabs>
                <NavItem>
                    <General role="button"/>
                </NavItem>
                <NavItem>
                    <Detail role="button"/>
                </NavItem>
            </Nav>
        )
    }

     return (
         <>
               {loading ? 'loading permit...' : (
                <>
                    <Alert color="primary">
                        <Link 
                            onClick={()=> dispatch(uiActions.setLoading(true))}
                            to={"/Projects/" + permit.projectId}>
                            {"Back to "+ permit.projectName}
                        </Link>
                    </Alert>
                   <Tabs/>
                   <TabContent activeTab={tab}>
                        <TabPane tabId="general">
                            <Row>
                                <Col sm="12">
                                    <PermitGeneral
                                        permit={permit}
                                        authorities={authorities}
                                        contextOptions={contextOptions}
                                        contexts={contexts}
                                        dispatch={dispatch}
                                        register={register}
                                        handleSubmit={handleSubmit}
                                        setValue={setValue}
                                        getValues={getValues}
                                        control={control}
                                        reset={reset}
                                    />
                                </Col>
                            </Row>
                        </TabPane>
                        <TabPane tabId="detail">
                            <Row>
                                <Col sm="12">
                                    <PermitDetail permitItems={permitItems}/>
                                </Col>
                            </Row>
                        </TabPane>
                    </TabContent>
                </>)}

                  
        </>
    )
}