import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';


import { getItemsSelector } from '../application/selectors/collection';
import { pageLoaded } from '../application/actions/ui';
import { getLoading } from '../application/selectors/ui';

import * as companyActions from '../application/actions/collection';

export default () => {
    
    const dispatch = useDispatch();
    const companies = useSelector(getItemsSelector);
    const loading = useSelector(getLoading);
    useEffect(() => {
        dispatch(pageLoaded);
        dispatch(companyActions.loadAll('companies'));
    }, [dispatch]);

    return (
        <>
            <h1>Companies</h1>
            {loading ? 'Loading companies...' : (

                <table>
                    <tbody>
                    <tr>
                        <th>Name</th>
                        <th>Adr</th>
                        <th>Adr</th>
                        <th>City</th>
                        <th>Country</th>
                    </tr>

                    {companies.map(company => (

                        <tr
                            key={company.id}
                            style={{
                                textDecoration: company.completed ? 'line-through' : 'none',
                                cursor: 'pointer',
                            }}
                            //onClick={() => dispatch(putCompany({...company, completed: !company.completed }))}
                        >
                           <td> {company.name}</td>
                           <td> {company.address1}</td>
                           <td> {company.address2}</td>
                           <td> {company.countryId}</td>
                        </tr>
                    ))}
                      </tbody>
                </table>
                
            )}
        </>
    )
}