import React from 'react'
import { TextField } from '../common/form/textField';
import { validator } from '../../../utils/validator';
import { Errors } from '../common/form/textField/textAttrs';
import { useHistory } from 'react-router-dom';

type DataTypes = {
    email: string;
    password: string;
}


const LoginForm: React.FC = () => {
    const [data, setData] = React.useState<DataTypes>({
        email: '',
        password: '',
    });
    const [errors, setErrors] = React.useState<Partial<Errors>>({});
    const [isLogin, setLogin] = React.useState<boolean>(false);

    const history = useHistory();

    const handleChange = (target: any) => {
        setData((prevState) => ({
            ...prevState,
            [target.name]: target.value
        }));
    }

    const validatorConfig = {
        email: {
            isRequired: {
                message: 'Электронная почта обязательна для заполнения'
            },
            isEmail: {
                message: 'Не корректный адрес электронной почты'
            }
        },
        password: {
            isRequired: {
                message: 'Пароль обязателен для заполнения'
            },
            isCapitalSymbol: {
                message: 'Пароль должен содержать хотя бы одну заглавную букву'
            },
            isContainDigit: {
                message: 'Пароль должен содержать хотя бы одно число'
            },
            min: {
                message: 'Пароль должен состоять минимум из 8 символов',
                value: 8
            }
        }
    }


    React.useEffect(() => {
        validate();
    }, [data])


    const validate = () => {
        const errors = validator(data, validatorConfig);
        setErrors(errors)
        return Object.keys(errors).length === 0;
    }

    const buttonIsValid = Object.keys(errors).length === 0;

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const isValid = validate();
        if (!isValid) return;
        console.log(data);
        setLogin(true);
    }

    if (isLogin) {
        setTimeout(() => {
            history.push('/');
        }, 2000)
    }


    return (
        <form onSubmit={handleSubmit}>
            <TextField
                label='Электронная почта'
                name='email'
                value={data.email}
                onChange={handleChange}
                error={errors.email}
                isDisabled={isLogin}
            />
            <TextField
                label='Пароль'
                type='password'
                name='password'
                value={data.password}
                onChange={handleChange}
                error={errors.password}
                isDisabled={isLogin}
            />
            <button type='submit' disabled={!buttonIsValid || isLogin} className={'btn btn-primary w-100 mx-auto' + (isLogin ? ' mb-4' : '')}>
                Авторизация
            </button>
            {isLogin ? (
                <div className='text-light text-center'>Идёт загрузка...</div>
            ) : null}
        </form>
    )
}

export default LoginForm;