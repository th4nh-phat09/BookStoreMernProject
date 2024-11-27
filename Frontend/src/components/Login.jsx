import React, { useState } from 'react'
import { FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const  Login = () => {
    const [message, setMessage] = useState('');
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },} = useForm()
    const onSubmit = (data) => {
        console.log(data);
    }
  return (
    <div className='h-[calc(100vh-80px)] flex justify-center items-center'>
        <div className='w-full max-w-sm mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
            <h2 className='text-xl font-semibold mb-4'>Please Login</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                {/*Display Email */}
                <div className='mb-4'>
                    <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor="email">Email</label>
                    <input type='email' name='email' id='email' 
                            {...register('email', {required: true})}
                           placeholder='Enter Address Email' 
                           className='shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow' />
                </div>
                {/*Display Password */}
                <div className='mb-4'>
                    <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor="password">Password</label>
                    <input type='password' name='password' id='password' 
                           {...register('password', {required: true})}
                           placeholder='Enter Password' 
                           className='shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow' />
                </div>
                {/*Display Message Error*/}
                {
                    message && <p className='text-red-500 text-xs italic mb-3'>{message}</p>
                }
                {/*Display Button Login*/}
                <div className='mb-4'>
                    <button className='bg-blue-500 hover:bg-blue-700 text-white 
                                        font-bold py-2 px-4 rounded focus:outline-none focus:shadow'>
                                Login
                    </button>
                </div>
                {/*Display Link Register*/}
                <p className='align-baseline font-medium mt-4 text-sm'>Haven't an account? Please <Link to='/register' className='text-blue-500 hover:text-blue-700'>Register</Link></p>
                {/*Display Sign In With Google*/}
                <div className='mt-4'>
                    <button className='w-full flex flex-wrap gap-1 items-center justify-center bg-secondary hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none'>
                    <FaGoogle  className='mr-2'/>
                        Sign In With Google
                    </button>
                </div>
                <p className='mt-5 text-center text-gray-500 text-xs'>©2025 Book Store. All rights reserved.</p>
            </form>
        </div>
    </div>
  )
}

export default  Login