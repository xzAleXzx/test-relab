import React from 'react'
import _ from 'lodash'

const TableBody = (props: any) => {

    const renderContent = (item: any, column: any) => {
        if (props.columns[column].component) {
            const component = props.columns[column].component;
            if(typeof component === 'function') {
                return component(item);
            }
            return component;
        }
        return _.get(item, props.columns[column].path);
    }

    return (
        <tbody key="table">
        {props.data?.map((item: any) => (
            <tr key={item.id}>
                {Object.keys(props.columns).map((column) => (
                    <td key={column}>
                        {renderContent(item, column)}
                    </td>
                ))}
            </tr>
        ))}
        </tbody>
    )
}

export default TableBody;