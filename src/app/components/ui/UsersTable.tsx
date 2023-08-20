import React from 'react';
import Table from '../common/table/Table';


const UsersTable = (props: any) => {

    const columns ={
        id: {path: 'id', name: 'ID'},
        name: {path: 'name', name: 'Имя'},
        role: {path: 'role', name: 'Роль'},
        ctime: {path: 'ctime', name: 'Дата создания'},
        actions: {path: 'actions', name: 'Действия', component: (user: any) => (
                <button
                    onClick={() => props.onDelete(user.id)}
                    className="btn btn-danger"
                >
                    Удалить
                </button>
            )}
    }

    return (
        <Table
            columns={columns}
            data={props.users}
        />
    )
}

export default UsersTable;