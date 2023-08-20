import React from 'react';
import Table from '../common/table/Table';


const EventsTable = (props: any) => {

    const columns = {
        ctime: {path: 'ctime', name: 'Дата создания'},
        event: {path: 'event', name: 'Событие'},
    }

    return (
        <Table
            columns={columns}
            data={props.comingEvents}
        />
    )
}

export default EventsTable;