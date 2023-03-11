import React from 'react';
import PopupAnimation from '../../Animation/PopupAnimation';

const Output = ({ tableData }) => {
    return (
        <PopupAnimation child={<>
            <table style={{ width: "100%" }} className='border border-gray-200 mb-10'>
                <tr className='border border-gray-200'>
                    <th className='border border-gray-200'>Order Number</th>
                    <th className='border border-gray-200'>Item Name</th>
                    <th className='border border-gray-200'>Quantity</th>
                    <th className='border border-gray-200'>Price Unit</th>
                    <th className='border border-gray-200'>Total Price</th>
                </tr>
                {tableData.length > 0 && tableData.map((item) => (
                    Object.keys(item).map((dataItem) => (
                        Object.values(item[dataItem]['product_details']).map((data, dataIndex = 0) => (
                            <tr className='border-b border-gray-200'>
                                {dataIndex === 0 && <th rowspan={item[dataItem]['product_details'].length} className='bg-[#98FB98]'>Order {dataItem}</th>}
                                <td className='border-l border-gray-200 text-center'>{data['item_name']}</td>
                                <td className='border-l border-gray-200 text-center'>{data['quantity']}</td>
                                <td className='border-l border-gray-200 text-center'>{data['price_unit']}</td>
                                <td className='border-l border-gray-200 text-center'>{data['total_price']}</td>

                            </tr>
                        ))
                    ))))}
            </table>
        </>} />
    );
}

export default Output;

