import React, { useContext } from 'react'
import axios from 'axios'
import { PlusCircleIcon } from '@heroicons/react/24/solid'
import { AppContext } from '../AppContext' 

const InputForm = () => {
    const { addBtnClicked, setAddBtnClicked, formData, setFormData, setContactList, url} = useContext(AppContext);

    const handleClick = () => {
        setAddBtnClicked((prev) => !prev);
        console.log(addBtnClicked);
    }

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
                ...prev,
                [name]: value,
            })
        )
    }

    const handleSubmit = async (e) =>{
        e.preventDefault();
        try {
            const res = await axios.post(`${url}/api/contacts`, formData);
            setContactList(prev => [res.data, ...prev]);
            console.log('Created contact- ', res.data);
            setFormData({ fullName: '', email: '', phoneNumber: '', message: '' });
            setAddBtnClicked(false);
        } catch (error) {
            console.log('Error creating contact:', error);
        }
    }

    const handleCancle = () =>{
        setAddBtnClicked(prev => !prev)
    }

    return (
        <div className='flex flex-col justify-center items-center md:mt-0 py-5'>
            {
                addBtnClicked
                    ?
                    <div className='bg-purple-200 flex flex-col justify-center items-center min-w-[70%] md:min-w-[50%] min-h-full mt-5 rounded-2xl'>
                        <form onSubmit={handleSubmit} className='bg-purple-100 flex flex-col justify-center items-center min-w-[80%] md:min-w-[70%] md:h-[90%] py-5 md:py-0 rounded-2xl gap-10'>
                            <label className='relative flex hover:scale-105 duration-300'>
                                <p className=' absolute text-xs font-semibold text-gray-700 -translate-y-2 translate-x-2 bg-purple-100'>Full name</p>
                                <input
                                    type='text'
                                    name='fullName'
                                    value={formData.fullName}
                                    required
                                    className='py-1.5 px-3 outline-none border border-gray-400 rounded-[6px]'
                                    onChange={handleChange}
                                />
                            </label>
                            <label className='relative flex hover:scale-105 duration-300'>
                                <p className=' absolute text-xs font-semibold text-gray-700 -translate-y-2 translate-x-2 bg-purple-100'>Email</p>
                                <input
                                    type='email'
                                    name='email'
                                    value={formData.email}
                                    required
                                    className='py-1.5 px-3 outline-none border border-gray-400 rounded-[6px]'
                                    onChange={handleChange}
                                />
                            </label>
                            <label className='relative flex hover:scale-105 duration-300'>
                                <p className=' absolute text-xs font-semibold text-gray-700 -translate-y-2 translate-x-2 bg-purple-100'>Phone Number</p>
                                <input
                                    type='number'
                                    name='phoneNumber'
                                    value={formData.phoneNumber}
                                    required
                                    className='py-1.5 px-3 outline-none border border-gray-400 rounded-[6px]'
                                    onChange={handleChange}
                                />
                            </label>
                            <label className='relative flex hover:scale-105 duration-300'>
                                <p className=' absolute text-xs font-semibold text-gray-700 -translate-y-2 translate-x-2 bg-purple-100'>Message(optional)</p>
                                <input
                                    type='text'
                                    name='message'
                                    value={formData.message}
                                    className='py-1.5 px-3 outline-none border border-gray-400 rounded-[6px]'
                                    onChange={handleChange}
                                />
                            </label>

                            <div className='flex justify-between w-[50%]'>
                                <button 
                                    type='submit' 
                                    className='bg-purple-600 text-white text-sm py-1.5 px-3 outline-none rounded-[6px] hover:scale-110 duration-300 hover:bg-purple-400'
                                    onClick={handleSubmit}>
                                        Submit
                                </button>
                                <button 
                                    type='button' 
                                    className='bg-purple-600 text-white text-sm py-1.5 px-3 outline-none rounded-[6px] hover:scale-110 duration-300 hover:bg-purple-400'
                                    onClick={handleCancle}>
                                        Cancle
                                </button>
                            </div>
                        </form>
                    </div>
                    :
                    <div className='hover:scale-110 duration-300 hover:shadow-2xl hover:shadow-purple-900 rounded-2xl'>
                        <button
                            className='flex items-center bg-purple-700 text-white py-3 px-6 tracking-wider rounded-2xl gap-2'
                            onClick={handleClick}>
                            <PlusCircleIcon className='size-5' />
                            Add new Contact
                        </button>
                    </div>
            }

        </div>
    )
}

export default InputForm