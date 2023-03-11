/* eslint-disable array-callback-return */
/* eslint-disable no-mixed-operators */
import React, { useState } from 'react'
import PopupAnimation from '../Animation/PopupAnimation'
import Button from './Componets/Button'
import Input from './Componets/input'
import Output from './Componets/OutPut'

export default function Order() {
    const cust_data =[{id: 'order_number', type:'number', item : 'Order No'},
    {id: 'date', type:'date', item : 'Purchase Date'},
    {id: 'customer_name', type:'text', item : 'Customer Name'},
    {id: 'total_amount', type:'number', item : 'Total Amount'}]
    const order_data = [{id: 'item_name', type:'text', item : 'Enter Item Name'},
    {id: 'quantity', type:'number', item : 'Enter Quantity'},
    {id: 'price_unit', type:'number', item : 'Enter Price Unit'},
    {id: 'total_price', type:'number', item : 'Enter Total Price'},
    ]
    const order_date = []
    const [OrderData, setOrderData] = useState({
        order_number: '',
        date: '',
        customer_name: '',
        total_amount: '',
        product_details: [{
            item_name: '',
            quantity: '',
            price_unit: '',
            total_price: ''
        }]
    })
    const [errorMessage, setErrorMessage] = useState(false)
    const [selectedItems, setSelectedItems] = useState([])
    const [showList, setShowList] = useState(false)

    const handleInputChange = (event) => {
        const { id, value } = event.target;
        setOrderData((prevState) => ({
            ...prevState,
            [id]: value
        }));
    }
    const handleProductInputChange = (e, index) => {
        e.preventDefault();
        const { id, value } = e.target;
        OrderData.product_details[index][id] = value
        setOrderData((prevState) => ({
            ...prevState,
            product_details: OrderData.product_details,
        }));
    }
    const validate = () => {
        let flag = true
        Object.keys(OrderData).forEach((item) => {
            switch (item) {
                case 'order_number':
                case 'date':
                case 'customer_name':
                case 'total_amount':
                    if (item !== "product_details" && OrderData[item] === '') {
                        flag = false
                    }
                    break;
                case 'product_details':
                    Object.values(OrderData['product_details']).map((value) => {
                        Object.keys(value).map((val) => {
                            if (value[val] === "") {
                                flag = false
                            }
                        })
                    })
                    break;
                default: break;
            }
        });
        return flag;
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validate()) {
            setErrorMessage(true);
        }
        else {
            setShowList(true)
            let arr = [...selectedItems]
            let obj = {}
            if (arr.length > 0) {
                arr.map((item) => {
                    if (Object.keys(item).includes(OrderData['order_number']) === false) {
                        obj[OrderData['order_number']] = OrderData
                    }
                    arr.push(obj)
                })
            }
            else {
                obj[OrderData['order_number']] = OrderData
                arr.push(obj)
            }
            setSelectedItems(arr)
            setErrorMessage(false);
            setOrderData({
                order_number: '',
                date: '',
                customer_name: '',
                total_amount: '',
                product_details: [{
                    item_name: '',
                    quantity: '',
                    price_unit: '',
                    total_price: ''
                }]
            })
        }
    }

    const handleAddRemove = (e, name, index) => {
        const newData = {
                item_name: '',
                quantity: '',
                price_unit: '',
                total_price: ''
            }
        e.preventDefault()
        if (name === 'Add') {
            setOrderData((prevState) => ({
                ...prevState,
                product_details: [...OrderData.product_details, newData]
            }));
        } else {
            OrderData.product_details.splice(index, 1)
            setOrderData((prevState) => ({
                ...prevState,
                product_details: OrderData.product_details
            }));
        }

    }
    return (
        <>
            <PopupAnimation child={<div className='flex justify-center items-center flex-col'>
                <div className='border p-10 border-green-700 w-[1500px] mx-auto my-20'>
                    <div className=' text-4xl font-bold text-black my-10'>
                        <h1 className='text-center'>ORDER PAGE</h1>
                    </div>
                    <form>
                        <div className='flex -mx-2.5'>
                            
                           {cust_data.map((item) => ( <Input
                                inputChange={handleInputChange}
                                type={item.type}
                                id={item.id}
                                value={OrderData[item.id]}
                                item={item.item}
                                textColor={'text-black'}
                                errorMessage={errorMessage}
                            />))}
                        </div>
                        {OrderData.product_details.length > 0 && OrderData.product_details.map((product_detail, index = 0) => (
                            <div className='flex -mx-2.5 mt-5 items-baseline '>
                                
                                {order_data.map((item) => (<Input
                                    inputChange={handleProductInputChange}
                                    type={item.type}
                                    id={item.id}
                                    value={product_detail[item.id]}
                                    index={index}
                                    item={item.item}
                                    textColor={'text-blue-800'}
                                    errorMessage={errorMessage}
                                />))}
                                <div className='flex self-center'>
                                    {OrderData.product_details.length > 1 &&
                                        <Button
                                            dataIndex={index}
                                            name={'Remove'}
                                            style={`bg-red-600 mt-10 hover:bg-red-700 mr-3 w-[150px] ${OrderData.product_details.length !== 1 ? '' : ' hidden'}`}
                                            onClickFunction={handleAddRemove}
                                        />}
                                    <Button
                                        dataIndex={index}
                                        name={'Add'}
                                        style={`bg-blue-500 mt-10 hover:bg-blue-700 w-[100px] ${OrderData.product_details.length - 1 === index ? '' : ' hidden'}`}
                                        onClickFunction={handleAddRemove}
                                    />
                                </div>
                            </div>))}
                        <div className='flex justify-center '>
                            <Button
                                name={'save'}
                                onClickFunction={handleSubmit}
                                style={'bg-green-600 mt-10 hover:bg-green-700 w-[120px] mb-10'}
                            />
                        </div>
                    </form>
                </div>
            </div>} />
            {showList && Object.keys(selectedItems).length > 0 && <Output tableData={selectedItems} />}
        </>
    )
}