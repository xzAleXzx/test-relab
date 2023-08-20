import React from 'react';
import Pagination from '../components/common/Pagination';
import UsersTable from '../components/ui/UsersTable';
import axios from 'axios';
import {useHistory} from 'react-router-dom';
import moment from 'moment';

type UserItemTypes = {
    id: number;
    name: string;
    role: string;
    ctime: Date;
}


type DataTypes = {
    total: number;
    per_page: number;
    page: number;
    limit: number;
    offset: number;
    items: UserItemTypes[];
}


const UsersList: React.FC = () => {
    const [currentPage, setCurrentPage] = React.useState<number>(1);
    const [data, setData] = React.useState<DataTypes>();
    const history = useHistory();

    React.useEffect(() => {
        fetchUserList();
    },[currentPage, data?.items.length === 0]);


    const handleDelete = ( userId: number ) => {
        if (data?.items) {
            const users = data.items;
            const filteredUsers = users.filter((user: any) => user.id !== userId)
        setData({...data, items: filteredUsers});
        }
    };

    const handlePageChange = (pageIndex: number) => {
        setCurrentPage(pageIndex);
    }

    async function fetchUserList() {
        try {
            const offset = ((currentPage - 1) *  5);
            const { data } = await axios.get(`https://test.relabs.ru/api/users/list?offset=${offset}`);
            let newItems: any[] = [];
            data.items.forEach((i: { ctime: number; }) => {
                const convertTime = moment.unix(i.ctime).format('DD.MM.YYYY HH:mm');
                newItems.push({...i, ctime: convertTime});
            });
            setData({...data, items: newItems});
        } catch (error) {
            alert('Ошибка при получении пользователей');
            console.log(error);
            history.push('/');
        }
    }

    return (
        <div className="container d-flex flex-column align-items-center w-50">
            <div className="h2 mt-3">Список пользователей</div>
            {data?.items.length ? (
                <>
                    <div className="d-flex">
                        <div className="d-flex flex-column">
                            {data.limit > 0 && (
                                <UsersTable
                                    users={data.items}
                                    onDelete={handleDelete}
                                />
                            )}
                            <div className="d-flex justify-content-center">
                                <Pagination
                                    itemsCount={data.limit}
                                    pageSize={data.total}
                                    currentPage={currentPage}
                                    onPageChange={handlePageChange}
                                />
                            </div>
                        </div>
                    </div>
                </>
            ) :(
                <div className="mt-3">
                    <h3 className="text-center">Загрузка...</h3>
                </div>
            )}
        </div>
    );
};

export default UsersList;
