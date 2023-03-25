import React from 'react';
import PopupAnimation from '../../Animation/PopupAnimation';
import Button from './Button';
import EmptyCartItem from './emptyCartItem';

const CartItemList = (props) => {
    const { setCartItem, cartItem, handelAddAndRemove, handleUpdateQuantity } = props;
    const handleTotalPrice = () => {
        let subtotal = null
        Object.values(cartItem).forEach((item) => { subtotal += item.price })
        return subtotal
    }
    return (
        <>
            <PopupAnimation child={<div id="top-right-modal" data-modal-placement="top-right" tabindex="-1" class="fixed pt-2 right-0 z-50 mt-[105px] ml-[1200px] w-[500px] overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] md:h-full">
                <div class="relative w-full h-full max-w-2xl md:h-auto">
                    {/* <!-- Modal content --> */}
                    <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                        <img></img>
                        <div className="pl-[8px] pt-2 cursor-pointer border-2 border-blue-900" >
                            <p className='py-5 px-5 border-b-blue-900 border-b-2 text-2xl text-blue-900 font-semibold'>Your Shopping Cart</p>
                            {Object.values(cartItem).length > 0 ?
                                <><div className='m-10 overflow-y-auto max-h-[500px] custom-scrollbar'>
                                    {Object.values(cartItem).map((item) => (
                                        <div className='flex border border-[#949494] p-5 rounded-md mb-5'>
                                            <img src={item.image} className='border-2 border-red-700 rounded-md w-24 min-w-24 min-h-24 h-24' />
                                            <div className='ml-2 w-[280px]'>
                                                <div className='flex justify-between'>
                                                    <p className=' text-sm text-blue-900 break-words w-[70%]'>{item.title}</p>
                                                    <div className='h-2'>

                                                        <Button isDisbaled={false} name={'Remove'} handleOnClick={handelAddAndRemove} item={item} />
                                                    </div>
                                                </div>
                                                <div className='flex mt-1'>
                                                    <img src='/images/minus.png' className='w-5 h-5 mr-3' onClick={() => handleUpdateQuantity(item, item.quantity - 1)} />
                                                    <p className='mr-3 border border-[#949494] px-2 text-sm'>{item.quantity}</p>
                                                    <img src='/images/plus.png' className='w-5 h-5 mr-3' onClick={() => handleUpdateQuantity(item, item.quantity + 1)} />
                                                </div>
                                                <div className='flex w-[400px] justify-between mt-3'>
                                                    <p>${item.price}</p>
                                                </div>
                                            </div>
                                        </div>))}
                                </div>
                                    <div className='border-t-blue-900 border-t-2'>
                                        <div className='flex justify-between'>
                                            <p className='text-center py-4 px-10 text-blue-900'>Subtotal:</p>
                                            <p className='text-center py-4 px-10 '>${handleTotalPrice()}</p>
                                        </div>
                                        <div className='flex justify-between p-4'>
                                            <button className='p-2 border-2 border-blue-900 text-blue-900' onClick={() => setCartItem({})}>EMPTY CART</button>
                                            <button className='p-2 border-2 border-blue-900 text-white bg-blue-900'>CHECKOUT</button>
                                        </div>
                                    </div>
                                </>
                                :
                                <EmptyCartItem />
                            }
                        </div>
                    </div>
                </div>
            </div>}
            />
        </>
    );
}

export default CartItemList;
