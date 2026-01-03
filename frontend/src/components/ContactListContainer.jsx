import React, { useContext } from 'react'
import { QueueListIcon } from '@heroicons/react/24/solid'
import Contact from './Contact'
import { AppContext } from '../AppContext'


const ContactListContainer = () => {
    const{contactList} = useContext(AppContext);


    return (
        <div>
            <div className='min-h-[650px] bg-purple-100 rounded-b-2xl flex flex-col items-center'>
                <div className='bg-purple-300 flex justify-start items-center min-w-full min-h-[50px] pl-[5%]'>
                    <div className='flex gap-2 hover:scale-110 hover:bg-purple-200 hover:rounded-2xl px-2 py-1'>
                        <QueueListIcon className='size-5.5' />
                        <h4 className='text-xl tracking-wider font-semibold'>Contact List</h4>
                    </div>
                </div>
                <div className='w-full '>
                    {contactList.map((contact) =>(
                        <Contact key={contact._id} fullName={contact.fullName} />
                    ))}

                </div>
            </div>
        </div>
    )
}

export default ContactListContainer