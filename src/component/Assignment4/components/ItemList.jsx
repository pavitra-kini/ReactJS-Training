import React from 'react';
import PopupAnimation from '../../Animation/PopupAnimation';
import Button from './Button';

const ItemList = (props) => {
    const { loading, FormData, cartItem, handelAddAndRemove } = props;
    return (
        <PopupAnimation child={<div className='flex flex-wrap m-10'>
            {!loading && FormData.map((item) => (<div className=' w-[410px] m-3 border border-[#949494] p-5 rounded-md'>
                <img src={item.image} className='border-2 border-blue-900 rounded-md w-[355px] min-w-[355px] min-h-[390px] h-[390px]' />
                <p className='mt-3 text-md text-blue-900 h-[75px] py-3'>{item.title}</p>
                <p className='mt-2 text-sm h-[60px] overflow-auto custom-scrollbar'>{item.description}</p>
                <div className='flex justify-between mt-2 items-end'>
                    <p>${item.price}</p>
                    <Button name={cartItem[item.id] === item ? 'Added to cart' : 'Add to Cart'} isDisbaled={cartItem[item.id] === item ? true : false} handleOnClick={handelAddAndRemove} item={item} />
                </div>
            </div>))}
        </div>}
        />
    );
}

export default ItemList;
