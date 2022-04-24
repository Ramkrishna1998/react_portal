import react, { useState } from 'react';
import { CSVLink } from 'react-csv';
import { Link } from 'react-router-dom';

function DashboardView(props) {

    let userEmail = localStorage.getItem('email');

    const header = [
        { label: 'First Name', key: 'name' },
        { label: 'Price', key: 'price' },
        { label: 'Status', key: 'status' }
    ]

    const [itemName, setItemName] = useState();
    const [itemPrice, setItemPrice] = useState();
    const [itemStatus, setItemStatus] = useState();
    const [searchData, setSearchData] = useState();

    const [nameShortFlag, setNameShortFlag] = useState(false);
    const [priceShortFlag, setPriceShortFlag] = useState(false);


    function handleDelete(i) {
        props.setItemList({ ...props.initialData, [userEmail]: props.initialData[userEmail].filter((item) => item.id !== i) });
        props.setInitialData({ ...props.initialData, [userEmail]: props.initialData[userEmail].filter((item) => item.id !== i) });
        setSearchData('');
    }

    function handleSearch(value) {
        setSearchData(value);
        if (value !== '') {
            props.setItemList({ ...props.initialData, [userEmail]: props.initialData[userEmail].filter((item) => item.name.toLowerCase().includes(value)) });
        } else {
            props.setItemList({ ...props.initialData, [userEmail]: props.initialData[userEmail] });
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        let dataObj = {
            name: itemName,
            price: itemPrice,
            status: itemStatus,
            id: Math.random()
        }
        props.setItemList({ ...props.initialData, [userEmail]: [...props.initialData[userEmail], dataObj] });
        props.setInitialData({ ...props.initialData, [userEmail]: [...props.initialData[userEmail], dataObj] });

        setItemName('');
        setItemPrice('');
        setItemStatus('');
    }

    function handleShortName() {
        props.setItemList([...props.initialData[userEmail].sort((a, b) => (nameShortFlag ? a.name.toLowerCase() > b.name.toLowerCase() : a.name.toLowerCase() < b.name.toLowerCase()) ? 1 : -1)]);
        setNameShortFlag(!nameShortFlag);
    }

    function handleShortPrice() {
        props.setItemList([...props.initialData[userEmail].sort((a, b) => (priceShortFlag ? a.price > b.price : a.price < b.price) ? 1 : -1)]);
        setPriceShortFlag(!priceShortFlag);
    }

    return (
        <div className="py-4 px-8">
            <div className="flex justify-between">
                <form onSubmit={(e) => handleSubmit(e)} className='flex'>
                    <div className="mt-4 relative border border-gray-300 rounded  shadow-sm ">
                        <label
                            htmlFor="itemName"
                            className="absolute -top-2 left-2 -mt-px inline-block px-1 bg-white text-xs font-medium text-gray-900"
                        >
                            Name
                        </label>
                        <input
                            type="text"
                            name="itemName"
                            id="itemName"
                            required
                            value={itemName}
                            className=" w-full  px-3 py-2 text-gray-900 placeholder-gray-500  sm:text-sm"
                            onChange={(e) => setItemName(e.target.value)}
                            placeholder="Enter Name"
                        />
                    </div>
                    <div className="mt-4 ml-4 relative border border-gray-300 rounded  shadow-sm ">
                        <label
                            htmlFor="itemPrice"
                            className="absolute -top-2 left-2 -mt-px inline-block px-1 bg-white text-xs font-medium text-gray-900"
                        >
                            Price
                        </label>
                        <input
                            type="number"
                            name="itemPrice"
                            id="itemPrice"
                            required
                            value={itemPrice}
                            className=" w-full  px-3 py-2 text-gray-900 placeholder-gray-500  sm:text-sm"
                            onChange={(e) => setItemPrice(e.target.value.toLowerCase())}
                            placeholder="Enter Price"
                        />
                    </div>
                    <div className="mt-4 ml-4 relative border border-gray-300 rounded  shadow-sm ">
                        <label
                            htmlFor="itemStatue"
                            className="absolute -top-2 left-2 -mt-px inline-block px-1 bg-white text-xs font-medium text-gray-900"
                        >
                            Status
                        </label>
                        <input
                            type="text"
                            name="itemStatue"
                            id="itemStatue"
                            required
                            value={itemStatus}
                            className=" w-full  px-3 py-2 text-gray-900 placeholder-gray-500  sm:text-sm"
                            onChange={(e) => setItemStatus(e.target.value.toLowerCase())}
                            placeholder="Enter Status"
                        />
                    </div>
                    <div className="mt-4 ml-4">
                        <button
                            type="submit"
                            className="inline-flex items-center justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 sm:w-auto"
                        >
                            Add Item
                        </button>
                    </div>

                </form>               
                <div className="flex">
                    <div className="mt-4 mr-4">
                        <div className="relative border border-gray-300 rounded  shadow-sm ">
                            <label
                                htmlFor="name"
                                className="absolute -top-2 left-2 -mt-px inline-block px-1 bg-white text-xs font-medium text-gray-900"
                            >
                                Search
                            </label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                value={searchData}
                                className=" w-full  px-3 py-2 text-gray-900 placeholder-gray-500  sm:text-sm"
                                onChange={(e) => handleSearch(e.target.value.toLowerCase())}
                                placeholder="Search Name"
                            />
                        </div>
                    </div>
                    <div className="mt-4">
                        <CSVLink filename={'Portal.csv'} data={props.itemList && props.itemList[userEmail]} headers={header}>
                            <button
                                type="button"
                                className="inline-flex items-center justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 sm:w-auto"
                            >
                                Download CSV
                            </button>
                        </CSVLink>
                    </div>
                </div>
            </div>
            <div className="mt-8 flex flex-col">
                <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                        <div className="overflow-hidden shadow-md ring-1 ring-black ring-opacity-5 md:rounded-lg">
                            <table className="min-w-full divide-y divide-gray-300">
                                <thead className="bg-gray-50">
                                    <tr className="text-left text-sm font-semibold text-gray-900">
                                        <th className="px-3 py-3.5">
                                            No.
                                        </th>
                                        <th onClick={() => handleShortName()} className="py-3.5 pl-4 pr-3 sm:pl-6">
                                            <button className='text-gray-900 font-semibold' type='button' onClick={() => handleShortName()} >{`NAME`} &nbsp; &nbsp; {nameShortFlag ? `↑` : '↓'}</button>
                                        </th>
                                        <th className="px-3 py-3.5">
                                            <button className='text-gray-900 font-semibold' type='button' onClick={() => handleShortPrice()} >{`PRICE`} &nbsp; &nbsp; {priceShortFlag ? `↑` : '↓'}</button>
                                        </th>
                                        <th className="px-3 py-3.5">
                                            STATES
                                        </th>
                                        <th className=" py-3.5">
                                            DELETE
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200 bg-white">
                                    {props.itemList[userEmail].map((item, index) => (
                                        <tr key={item.email}>
                                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{index + 1}</td>
                                            <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm  text-gray-900 sm:pl-6">
                                                {item.name}
                                            </td>
                                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{`${item.price} Rs.`}</td>
                                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{item.status}</td>
                                            <td key={index} className="whitespace-nowrap py-4 text-sm text-gray-500"><button onClick={() => handleDelete(item.id)} className="bg-red-500 px-2 hover:bg-red-700 text-white py-2 rounded">Delete</button></td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DashboardView;
