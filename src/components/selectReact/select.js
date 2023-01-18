import React from 'react'
import Select from 'react-select'

function SelectOption({placeholder}) {
    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
    ]

    return (
        <div className="col-12 py-2">
            <Select  placeholder={placeholder} isSearchable={true} isMulti={true} options={options} />
        </div>
    );
}

export default SelectOption;