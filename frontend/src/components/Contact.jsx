import React from 'react'
import { UserCircleIcon } from '@heroicons/react/24/solid'

const Contact = ({fullName}) => {
    const date = new Date();

    const month = date.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric'
    });    

  return (
    <div className='bg-purple-50 min-w-full h-12 border-1 border-gray-400 hover:scale-102 duration-200'>
        <div className='flex min-w-full h-full gap-3 pl-3'>
            <UserCircleIcon  className='size-9 self-center'/>
            <h6 className='text-md w-md self-center tracking-wider'>{fullName}</h6>
            <div className='w-[20%] h-full flex flex-col items-end justify-end'>
               <p className='pr-2.5 text-xs'>added on {month}</p>
            </div>
        </div>
    </div>
  )
}

export default Contact