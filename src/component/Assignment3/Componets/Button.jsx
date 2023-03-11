import React from 'react';
import ButtonAnimation from '../../Animation/ButtonAnimation';

const Button = ({ name, style, onClickFunction, dataIndex }) => {
    return (
        <ButtonAnimation child={
            <button
                type='button'
                id={name}
                onClick={(e) => onClickFunction(e, name, dataIndex)}
                className={`${style} text-white font-bold  rounded-full h-10`}
            >{name}
            </button>}
        />
    );
}

export default Button;
