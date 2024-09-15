"use client";
import { Lock } from 'lucide-react';
import Image from 'next/image';
import React, { useState } from 'react'

const Sidebar = () => {
    const [showProject, setShowProject] = useState(true);
    const [showPriority, setShowPriority] = useState(true);
  return (
    <div
    className='fixed flex-col justify-between shadow-xl transition-all duration-200 h-full z-40 dark:bg-black overflow-y-auto bg-white w-64'
    >
        <div className='flex h-[100%] w-full flex-col justify-start'>
            <div className='z-50 flex min-[56px] w-64 items-center justify-between bg-white px-6 pt-3 dark:bg-black'>
                <div className='text-xl mt-2 font-bold text-neutral-800 dark:text-neutral-50'>
                    Stack'd
                </div>
            </div>
            {/* TEAM */}
            <div className='flex items-center gap-5 border-y-[1.5px] border-neutral-200 px-8 py-4 mt-4 dark:border-neutral-700'>
               <div className='flex items-center justify-between gap-x-2'> 
                <h1 className='bg-black text-sm rounded-full p-2 text-white font-bold'>Stack'd</h1>
               </div>
               <div>
               <h3 className='font-semibold'>Stack'd team</h3>
                <div className='mt-1 flex items-start gap-2'>
               <Lock className='h-3 w-3 mt-[0.1rem] text-neutral-500 dark:text-neutral-400'/>
               <p className='text-xs text-neutral-500'>
                Private
               </p>
               </div>
               </div>
            </div>
            {/* links */}
        </div>
    </div>
  )
}

export default Sidebar