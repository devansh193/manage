import React from 'react'
import {DiscAlbum, Menu, Search, Settings} from "lucide-react"
import { Input } from './ui/input';
import Link from 'next/link';
import { useAppDispatch, useAppSelector } from './redux';
import { Button } from './ui/button';
import { setIsSidebarClose } from '@/state';

const Navbar = () => {
    const dispatch = useAppDispatch();
    const isSidebarClose = useAppSelector((state)=> state.global.inSidebarClose);
    const isDarkMode = useAppSelector((state)=>state.global.isDarkMode);
  return (
    <div className='flex items-center justify-between bg-white px-4 py-3 dark:bg-black dark:px-4 dark:py-3'>
        {/* search bar */}
        <div className='flex items-center gap-8'>
            {!isSidebarClose ? null : (
                <Button
                onClick={()=> dispatch(setIsSidebarClose(!isSidebarClose))
                }>
                    <Menu className='h-8 w-8 dark:text-white'/>
                </Button>
            )}
            <div className='relative flex h-min w-[200px]'>
                <Search className='absolute left-[4px] top-1/2 mr-2 h-5 w-5 -translate-y-1/2 transform cursor-pointer dark:text-white'/>
                <Input
                className='w-full rounded border-none bg-neutral-100 p-2 pl-8 placeholder-neutral-500 dark:bg-neutral-700 dark:text-white'
                placeholder='Search...'
                type='search'
                />
            </div>
        </div>
        {/* Icons */}
        <div className='flex items-center'>
            <Link
            href={"/settings"}
            className='h-min w-min rounded p-2 hover:bg-neutral-100'
            >
                <Settings
                className='h-6 w-6 cursor-pointer dark:text-white'
                />
            </Link>
            <div className='ml-2 mr-5 hidden min-h-[2em] w-[0.1rem] bg-neutral-200 md:inline-block'></div>
        </div>
    </div>
  );
};

export default Navbar;