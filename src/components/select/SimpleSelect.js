import React from 'react';
import Select from 'react-select';
import DropIcon from '../../assets/images/dropdownIcon.svg';

const customStyles = {
    option: (provided, state) => ({
      ...provided,
      borderBottom: '1px solid #f7f7f7',
      borderTop: '1px solid #f7f7f7',
      color: state.isSelected ? '#ffffff': '#0A1F44',
      backgroundColor: state.isSelected ? '#0A1F44': '#fff',
      "&:hover": {
        backgroundColor: '#e5f4ff'
    },
      height: 50,
      paddingTop: 14,
      paddingRight: 23,
      paddingBottom: 12,
      paddingLeft: 23
    }),
    control: (base) => ({
        ...base,
        border: '1px solid #6D7C8D',
        color: '#31569A !important',
        height: 45
    }),
    dropdownIndicator: base => ({
      ...base,
      color: "#31569A",
      display: 'none'
    })
  }

const SimpleSelect = ({value, onChange, options, ...props}) => {

    return (
        <Select
            onChange={onChange}
            value={value}
            options={options}
            {...props}
            styles={customStyles}
            components={{
              IndicatorSeparator: () => <ImgLoader/>
            }}
        />
    )
}

export default SimpleSelect;

function ImgLoader() {
  return (
    <img src={`${DropIcon}`} className="me-3" />
  )
}