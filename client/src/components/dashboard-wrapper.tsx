"use client";
import React, { useEffect } from 'react'
import Navbar from './navbar';
import Sidebar from './sidebar';
 import StateProvider, { useAppSelector } from "@/components/redux"
type Props = {
    children: React.ReactNode;
};

const DashboardLayout = ({children}: Props) => {
  const isSidebarClose = useAppSelector((state)=> state.global.inSidebarClose);
  const isDarkMode = useAppSelector((state)=>state.global.isDarkMode);
  useEffect(()=>{
    if(isDarkMode){
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.add("light");
    }
  });

  return (
    <div className='flex min-h-screen w-full bg-gray-50 text-gray-900'>
       <Sidebar/>
        <main className={`flex w-full flex-col bg-gray-50 dark:bg-neutral-900  ${
          isSidebarClose? "" : "md:pl-64" }`}>
        {/* navbar */}
        <Navbar/>
        {children}
        </main>
    </div>
  );
};

const DashboardWrapper = ({children}:{children:React.ReactNode})=>{
  return (
    <StateProvider>
      <DashboardLayout>
      {children}
      </DashboardLayout>
    </StateProvider> 
  );
};


export default DashboardWrapper;