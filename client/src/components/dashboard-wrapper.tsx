import React from 'react'
import Navbar from './navbar';
import Sidebar from './sidebar';

type Props = {
    children: React.ReactNode;
};

const DashboardWrapper = ({children}: Props) => {
  return (
    <div className='flex min-h-screen w-full bg-gray-50 text-gray-900'>
       <Sidebar/>
        <main className={`flex w-full flex-col bg-gray-50 dark:bg-neutral-900 md:pl-64`}>
        {/* navbar */}
        <Navbar/>
        {children}
        </main>
    </div>
  );
};

export default DashboardWrapper;