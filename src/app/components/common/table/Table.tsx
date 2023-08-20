import React from 'react';
import TableBody from './TableBody';
import TableHeader from './TableHeader';

const Table: React.FC<any> = (props) => {
    return (
        <table className="table text-center w-auto">
            {props.children || (
                <>
                    <TableHeader columns={props.columns} />
                    <TableBody columns={props.columns} data={props.data} />
                </>
            )}
        </table>
    )
}

export default Table