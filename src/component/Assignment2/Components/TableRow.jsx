import React from 'react';

const TableRow = ({ item }) => {
    return (
        <tr className="border-b">
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.title}</td>
            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                {item.upvotes}
            </td>
            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                {item.date}
            </td>
        </tr>
    );
}

export default TableRow;
