import React from 'react';

const Input = ({type, value, onChange, ...props}) => {

    return (
        <input
            type={type ? type: 'text'}
            value={value ? value: null}
            onChange={onChange}
            {...props}
        />
    )
}

export default Input;