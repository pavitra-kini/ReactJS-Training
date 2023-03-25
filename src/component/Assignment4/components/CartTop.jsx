import React from 'react';

const CartTop = (props) => {
    const { setShowCart, showCart, cartItem } = props;
    return (
        <div className="pl-[1440px] pt-2 relative cursor-pointer" >
            <img src='/images/cart.png' className='w-10 h-10'
                onClick={() => { setShowCart(true) }}
            />
            {!showCart && <p className='w-5 h-5 bg-red-500 text-white text-sm absolute top-1 right-1 rounded-full text-center' onClick={() => setShowCart(true)}>{Object.keys(cartItem).length}</p>}

            {showCart && <img className='w-5 h-5 bg-blue-900 text-sm absolute top-1 right-1 rounded-full text-center z-[9999]' src='/images/cross-mark.png' onClick={() => setShowCart(false)}></img>}
        </div>
    );
}

export default CartTop;
