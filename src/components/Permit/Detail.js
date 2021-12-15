import React from 'react';
import { Table } from 'reactstrap';
import './Detail.module.css';

export default (props)=>{

const {permitItems} = props
    const Head = () => (<tr>
        <th className="col-xs-3">Sequence</th>
        <th className="col-xs-3">Description</th>
        <th className="col-xs-3">Comment</th>
        <th className="col-xs-1">Aspect</th>
        <th className="col-xs-2">Codes</th>
    </tr>);
        return (permitItems !== undefined && <div className='container'>
            <Table className='table table-fixed'>
                <thead>
                    <Head/>
                </thead>
                <tbody>
                    {permitItems.map((item, index) => {
                        return (
                            <tr key={index} >
                                
                                <td className="col-xs-3 text-nowrap">{item.sequence}</td>
                                <td className="col-xs-3">
                                    
                                    {item.headers.map((header, key) => {
                                        return (
                                            React.createElement("h"+ (header.level +1),'',header.content)
                                               
                                        )
                                    })}


                                    <p>{item.description}</p>
                                </td>
                                <td className="col-xs-1">{item.comment}</td>
                                <td className="col-xs-2">{item.aspect}</td>
                            </tr>)
                    })}
                </tbody>
            </Table>
        </div>
    );
}
