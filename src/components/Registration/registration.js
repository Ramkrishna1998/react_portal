import react, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom"

function Registration(props) {
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    let navigate = useNavigate();

    function handleSignUp(e) {
        e.preventDefault();

        if (props.userCredentials.filter(e => e.email === email).length <= 0) {
            props.setUserCredentials([...props.userCredentials, { 'email': email, 'password': password }])
            props.setInitialData({ ...props.initialData, [email]: [{ id: '1', name: 'item 1', price: 20, status: 'Available' }] })
            props.setItemList({ ...props.itemList, [email]: [{ id: '1', name: 'item 1', price: 20, status: 'Available' }] })
            navigate(`/`);
            alert('Registration successful')
        } else {
            alert('Email id already exists')
        }
    }
    return (

        <div className="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">

            <div className="relative">
                <h2 className="text-center text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                    Registration Page
                </h2>
            </div>

            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                    <form className="space-y-6" onSubmit={(e) => handleSignUp(e)} >
                        <div>
                            <label htmlFor="userName" className="float-left block text-sm font-medium text-gray-700">
                                User Name
                            </label>
                            <div className="mt-1">
                                <input
                                    id="userName"
                                    name="userName"
                                    type="userName"
                                    autoComplete="userName"
                                    required
                                    value={userName}
                                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                    onChange={(e) => setUserName(e.target.value)}
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="email" className="float-left block text-sm font-medium text-gray-700">
                                Email
                            </label>
                            <div className="mt-1">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    value={email}
                                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="password" className="float-left block text-sm font-medium text-gray-700">
                                Password
                            </label>
                            <div className="mt-1">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    value={password}
                                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                            >
                                Sign Up
                            </button>
                        </div>
                    </form>
                    <Link to='/'>
                        <div className='mt-5'>
                            <button
                                type="button"
                                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                            >
                                Login Up
                            </button>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Registration;
