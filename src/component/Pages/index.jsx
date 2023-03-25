import React from 'react';
import ButtonAnimation from '../Animation/ButtonAnimation';

const Pages = ({ pageNumber, setPageNumber }) => {
    const buttonActions = {
        1: {
            name: 'Prev',
            style: 'rounded-l',
            bg: pageNumber === 1 ? 'bg-gray-200' : 'bg-gray-400'
        },
        2: {
            name: 'Next',
            style: 'rounded-r',
            bg: pageNumber === 4 ? 'bg-gray-200' : 'bg-gray-400'
        }
    }
    return (
        <div className='flex justify-end'>
            <div className='mr-[467px] text-5xl font-bold text-black'> <h1>{`Assignment ${pageNumber}`}</h1></div>
            <div class="">
                {Object.values(buttonActions).map((item) => (
                    <ButtonAnimation child={
                        <button
                            disabled={item.bg.includes('bg-gray-200')}
                            onClick={() => {
                                if (item.name === 'Prev') {
                                    setPageNumber(pageNumber - 1)
                                } else {
                                    setPageNumber(pageNumber + 1)
                                }
                            }}
                            class={` hover:border-gray-400 border text-gray-800 opacity-2 font-bold py-2 px-4 ${item.bg} ${item.style}`}
                        >{item.name}</button>
                    } />))}
            </div>
        </div>
    );
}

export default Pages;
