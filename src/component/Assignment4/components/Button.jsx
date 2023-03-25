import React from 'react';
import ButtonAnimation from '../../Animation/ButtonAnimation';

const Button = ({ name, handleOnClick, item, isDisbaled }) => {
    return (

        <ButtonAnimation child={
            <button type='button' disabled={isDisbaled} className='bg-red-700 align-top rounded-md  p-3 w-auto text-white' onClick={() => handleOnClick(item)}>
                {name}
            </button>
        } />
    );
}

export default Button;
