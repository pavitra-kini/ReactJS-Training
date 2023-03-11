import React from 'react';
import ButtonAnimation from '../Animation/ButtonAnimation';

const Buttons = ({ handleButton, buttonName }) => {
    return (
        <div className="bg-white flex justify-center">
            {Object.values(buttonName).map((item) => (
                <ButtonAnimation child={
                    <button
                        disabled={item.style.includes('text-gray-400')}
                        onClick={() => handleButton(item.name)}
                        className={`${item.style} font-medium px-10 py-2 text-center rounded border mr-4 hover:border-green-400`}
                    >{item.name}</button>
                } />))}
        </div>
    );
}

export default Buttons;
