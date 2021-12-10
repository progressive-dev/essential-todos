import React from 'react';
import { Table } from 'reactstrap';

export default (props) => {

    const Head = () => {
        return (
            <tr>
                <th>Code</th>
                <th>Type</th>
            </tr>);
    }

    const { collection } = props
    return (collection !== undefined && <div>
                <Table>
                    <thead>
                        <Head/>
                    </thead>
                    <tbody>
                        {collection.map((item, key) => {
                            return (
                                <tr key={key} >
                                    <td>{item.codeRef}</td>
                                    <td>Environment</td>
                                </tr>)
                        })}
                    </tbody>
                </Table>
            </div>
        );
    }