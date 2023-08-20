import React from 'react';
import { TextFieldTypes } from './textAttrs';
import { ReactComponent as Eye } from "../../../../../assets/img/icons/eye.svg";
import { ReactComponent as EyeSlash } from "../../../../../assets/img/icons/eye-slash.svg";

const TextField = (props: TextFieldTypes) => {
    const [showPassword, setShowPassword] = React.useState<boolean>(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        props.onChange({
            name: e.target.name,
            value: e.target.value
        });
    }

    const getInputClasses = () => {
        return 'form-control' + (props.error ? ' is-invalid' : '');
    }

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    }

    return (
        <div className='mb-4 text-light'>
            <label htmlFor={props.name}>{props.label}: </label>
            <div className="input-group has-validation">
                <input
                    type={showPassword ? 'text' : props.type}
                    id={props.name}
                    value={props.value.trim()}
                    name={props.name}
                    onChange={handleChange}
                    className={getInputClasses()}
                    disabled={props.isDisabled}
                />
                {props.type === 'password' && (
                    <button
                        className="btn btn-outline-secondary"
                        type='button'
                        onClick={toggleShowPassword}>
                        {showPassword ? <EyeSlash /> : <Eye />}
                    </button>
                )}
                {props.error && <div className='invalid-feedback'>{props.error}</div>}
            </div>
        </div>
    );
};

export default TextField;