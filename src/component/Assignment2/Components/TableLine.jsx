import React from 'react';
import PopupAnimation from '../../Animation/PopupAnimation';
import TableRow from './TableRow';

const TableLine = ({ tableData }) => {
    return (
        <div>
            <div className="flex justify-center">
                <div className="bg-white shadow-lg rounded my-5 w-full h-auto mx-10">
                    <div className="flex flex-col">
                        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                            <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                                <PopupAnimation child={<table className="min-w-full">
                                    <thead className="border-b">
                                        <tr>
                                            <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 min-w-[600px] text-start">
                                                Title
                                            </th>
                                            <th scope="col" className="text-sm font-medium text-gray-900 px-6 min-w-[200px] py-4 text-left">
                                                Upvotes
                                            </th>
                                            <th scope="col" className="text-sm font-medium text-gray-900 min-w-[300px] px-6 py-4 text-left">
                                                Date
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {tableData.map((item) => (
                                            <TableRow item={item} />
                                        ))}
                                    </tbody>
                                </table>}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TableLine;
