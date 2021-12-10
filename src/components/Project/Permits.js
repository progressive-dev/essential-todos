import React from 'react';
import {Link} from 'react-router-dom';
import { Table } from 'reactstrap';

import * as uiActions from '../../application/actions/ui';

export default (props) => {

    const Head = () => {
        return (
            <tr>
                <th>Description</th>
                <th>Encoding time</th>
                <th>Subject</th>
                <th>Delivery</th>
                <th>Term</th>
                <th>Authority</th>
                <th>rawContent</th>
                <th></th>
            <th></th>
        </tr>);
    }

    const { collection, dispatch } = props
    return (collection !== undefined && <div>
                <Table>
                    <thead>
                        <Head/>
                    </thead>
                    <tbody>
                        {collection.map((item, index) => {
                            return (
                                <tr key={index} >
                                    <td>
                                        <Link 
                                            onClick={()=> dispatch(uiActions.setLoading(true))}
                                            to={"/permits/" + item.id}>
                                            {item.description}
                                        </Link>
                                    </td>
                                    <td>{item.encodingTime}</td>
                                    <td>{item.subject}</td>
                                    <td>{item.delivery}</td>
                                    <td>{item.term}</td>
                                    <td>{item.authority}</td>
                                    <td>-</td>
                                    <td><input type="Button"
                                       
                                    /></td>
                                    <td></td>
                                </tr>)
                        })}
                    </tbody>
                </Table>
            </div>
        );
    }