import React, { useState } from 'react';
import PopupAnimation from '../Animation/PopupAnimation';
import Buttons from '../Bouttons';
import TableLine from './Components/TableLine';

const Assignment2 = () => {
    const ARTICLES = [
        {
            title: "A message to our customers",
            upvotes: 12,
            date: "2020-01-24",
        },
        {
            title: "Alphabet earnings",
            upvotes: 22,
            date: "2019-11-23",
        },
        {
            title: "Artificial Mountains",
            upvotes: 2,
            date: "2019-11-22",
        },
        {
            title: "Scaling to 100k Users",
            upvotes: 72,
            date: "2019-01-21",
        },
        {
            title: "the Emu War",
            upvotes: 24,
            date: "2019-10-21",
        },
        {
            title: "What's SAP",
            upvotes: 1,
            date: "2019-11-21",
        },
        {
            title: "Simple text editor has 15k monthly users",
            upvotes: 7,
            date: "2010-12-31",
        },
    ];
    const [tableData, setTableData] = useState(ARTICLES);
    const buttonName = {
        button1: {
            name: 'Most Updated',
            style: 'bg-green-600 text-white'
        },
        button2: {
            name: 'Most Recent',
            style: 'bg-green-600 text-white'
        },
    }
    const handleButton = (key) => {
        switch (key) {
            case 'Most Updated':
                setTableData([...ARTICLES.sort((a, b) => Number(b.upvotes) - Number(a.upvotes))]);
                break;
            case 'Most Recent':
                setTableData([...ARTICLES]);
                break;
            default:
                break;
        }
    }
    return (
        <>
            <div className="bg-white flex justify-center items-center mt-20">
                <p className="text-gray-300 text-lg mr-2 font-medium">SORT BY</p>
                <PopupAnimation child={<Buttons handleButton={handleButton} buttonName={buttonName} />} />
            </div>
            <TableLine tableData={tableData} />
        </>
    );
}

export default Assignment2;
