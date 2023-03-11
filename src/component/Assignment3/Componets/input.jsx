import moment from 'moment';
import React from 'react';

const Input = ({ item, textColor, type, inputChange, index, value, id, errorMessage }) => {
    return (
        <div className='200px flex flex-col mr-20'>
            <label htmlFor={id} className={`text-xl font-bold text-center ${textColor}`}>{item}</label>
            <input
                type={type}
                value={value}
                min={moment().format('YYYY-MM-DD')}
                onChange={(e) => inputChange(e, index)}
                id={id}
                className='pl-2 w-[180px] h-10 border-black border mt-3 focus:border-blue-700 focus:border-2 outline-none'
            ></input>
            {(errorMessage && value === '') && <p className='text-left text-xs text-red-700 py-1'>Please select the {item}</p>}
        </div>
    );
}

export default Input;
