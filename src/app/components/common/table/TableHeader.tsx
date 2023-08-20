import React from 'react';

const TableHeader = (props: any) => {

    return (
        <thead>
            <tr>
                {Object.keys(props.columns).map((column) => (
                    <th
                        key={column}
                        {...{role: props.columns[column].path}}
                        scope="col">
                        {props.columns[column].name}
                    </th>
                ))}
            </tr>
        </thead>
    )
}

export default TableHeader;