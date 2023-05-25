import React from 'react';

const NumberInput = ({value, onChange, ...props}) => {
    function handleChangeNumber(event) {
        const targetVal = event.target.value;
        const onlyNum = targetVal.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');
        event.target.value = onlyNum;
        onChange(event);
    }

    return (
        <input
            type="number"
            value={value ? value: null}
            {...props}
            onChange={(event) => handleChangeNumber(event)}
        />
    )
}

export default NumberInput;