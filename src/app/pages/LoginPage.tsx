import React from 'react';
import LoginForm from '../components/ui/LoginForm';

const LoginPage: React.FC = () => {
    return (
        <div className="container-fluid vh-100 d-flex flex-column justify-content-center align-items-center" style={{ background: '#d3d3d3'}}>
            <div className="row justify-content-center">
                <div className="col-md-auto shadow p-4 align-middle"  style={{
                    background: '#212529',
                    // minWidth: '300px',
                    // maxWidth: '500px'
                }}>
                    <h3 className='mb-4 text-center text-light'>Авторизация</h3>
                    <LoginForm />
                </div>
            </div>
        </div>
    )
}

export default LoginPage;