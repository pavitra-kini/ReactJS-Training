import axios from 'axios';
import React, { useEffect, useState, useCallback } from 'react';
import PopupAnimation from '../Animation/PopupAnimation';
import CartItemList from './components/CartItemList';
import CartTop from './components/CartTop';
import ItemList from './components/ItemList';

const Assignment4 = () => {
    const [FormData, setFormData] = useState([]);
    const [loading, setLoading] = useState(true);
    let [cartItem, setCartItem] = useState({});
    const [showCart, setShowCart] = useState(false);
    const getList = useCallback(async () => {
        const result = await axios('https://fakestoreapi.com/products');
        setFormData(result.data);
        setLoading(false)
    }, [])
    const handelAddAndRemove = useCallback((item) => {
        if (cartItem[item.id] !== item) {
            item['quantity'] = 1
            cartItem[item.id] = item;
        } else { delete cartItem[item.id] }
        setCartItem({ ...cartItem })
    }, [])
    useEffect(() => { getList() }, [getList]);
    const handleUpdateQuantity = useCallback((item, quantity) => {
        if (quantity === 0) {
            handelAddAndRemove(item)
        } else {
            cartItem[item.id]['quantity'] = quantity
            setCartItem({ ...cartItem })
        }
    }, [])

    return (
        <>
            {!loading && <PopupAnimation child={<div className='bg-[#D3D3D3] w-full mt-10 border-[#949494] border-2' >
                <CartTop setShowCart={setShowCart} showCart={showCart} cartItem={cartItem} />
                <ItemList loading={loading} FormData={FormData} cartItem={cartItem} handelAddAndRemove={handelAddAndRemove} />
                {showCart &&
                    <CartItemList setShowCart={setShowCart} setCartItem={setCartItem} cartItem={cartItem} handelAddAndRemove={handelAddAndRemove} handleUpdateQuantity={handleUpdateQuantity} />
                }
            </div>}
            />}
        </>
    );
}

export default Assignment4;
