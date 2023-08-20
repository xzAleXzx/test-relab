import React from 'react';
import UserList from '../components/UserList';
import Events from '../components/ui/Events';

const MainPage: React.FC = () => {
    return (
        <div className='container-fluid d-flex justify-content-around'>
            <UserList />
            <Events />
        </div>
    )
}

export default MainPage;