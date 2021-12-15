import React, { Component } from 'react';
import { Table } from 'reactstrap';

export default (props) => {
    const { handleAddPermit, handleDeletePermit, collection, Head } = props
    return (collection !== undefined && <div>
                <Table>
                    <thead>
                        <Head/>
                    </thead>
                    <tbody>
                        {collection.map((item, index) => {
                            return (
                                <tr key={index} >
                                    <td><a href={'permit/edit/' + item.id}>{item.description}</a></td>
                                    <td>{item.encodingTime}</td>
                                    <td>{item.subject}</td>
                                    <td>{item.delivery}</td>
                                    <td>{item.term}</td>
                                    <td>{item.authority}</td>
                                    <td>file</td>
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
}