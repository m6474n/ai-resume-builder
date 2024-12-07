'use client'
import Link from 'next/link';
import React from 'react'
import { Button } from '../../../components/ui/button';
import {  FaBriefcase, FaLaptop, FaShieldAlt } from "react-icons/fa";
import { BsLayoutTextSidebarReverse } from "react-icons/bs";
import { usePathname } from 'next/navigation';
import { BookTemplate, CircleHelp, Settings, Settings2 } from 'lucide-react';
import { UserButton, useUser } from '@clerk/nextjs';
import { IoCreateOutline } from "react-icons/io5";



const Sidebar = () => {
    const path  = usePathname();

    const user  = useUser();

        
      return (
        <div className="shadow-md h-screen p-4" >
        {/* <Link href={"/"}> <Image src="./logo.svg" width={120} height={80} alt="Logo"/></Link> */}
        <h1 className='text-3xl font-black font-sans text-start px-2'>ResumX</h1>
   
         <div className=" flex flex-col  gap-2 mt-12" >   
           {/* <PdfDialog isMax={files?.length>=5?true:false}/> */}
           <Link href={`/dashboard/create`}>
          
          <Button variant="" className={`w-full flex justify-center mb-6 ${path == "/dashboard/create"&&"bg-slate-100"}`}>
             <IoCreateOutline className=""/>  Create
           </Button></Link>

          <Link href={`/dashboard`}>
          
          <Button variant="ghost" className={`w-full flex justify-start ${path == "/dashboard"&&"bg-slate-100"}`}>
             <BsLayoutTextSidebarReverse className=""/>  Dashboard
           </Button></Link>
       
          <Link href={`/dashboard/templates`}>
          
          <Button variant="ghost" className={`w-full flex justify-start ${path == "/dashboard/templates"&&"bg-slate-100"}`}>
             <BookTemplate className=""/>  Templates
           </Button></Link>
          <Link href={'/dashboard/jobs'}>
          <Button variant="ghost"className={`w-full flex justify-start ${path == "/dashboard/jobs"&&"bg-slate-100"}`}>
              <FaBriefcase/> Jobs 
           </Button>
          </Link>
          <Link href={'/dashboard/job-appliactions'}>
          <Button variant="ghost"className={`w-full flex justify-start ${path == "/dashboard/job-appliactions"&&"bg-slate-100"}`}>
              <FaLaptop/> Job Applications 
           </Button>
          </Link>
         </div>
       <div className="absolute bottom-20 w-[75%] border-t border-slate-300 pt-4">
       <Link href={'/dashboard/job-appliactions'}>
          <Button variant="ghost"className={`w-full flex justify-start ${path == "/dashboard/job-appliactions"&&"bg-slate-100"}`}>
              <Settings/>Settings
           </Button>
          </Link>
          <Link href={'/dashboard/job-appliactions'}>
          <Button variant="ghost"className={`w-full flex justify-start ${path == "/dashboard/job-appliactions"&&"bg-slate-100"}`}>
              <CircleHelp/> Help & Support
           </Button>
          </Link>
            <div className=' flex flex-row p-4 gap-2'>
                <UserButton/>
                <div className=''>
                    <h1 className='text-md text-sm '>{user.user?.fullName}</h1>
                    <p className='text-xs text-gray-400 font-light'>{user.user?.primaryEmailAddress?.emailAddress}</p>
                </div>
            </div>
            <Link href={'/dashboard/upgrade'}>
          <Button className={`w-full flex justify-start ${path == "/dashboard/upgrade"&&"bg-slate-100"}`}>
              <FaShieldAlt/> Upgrade to Premium
           </Button>
          </Link>
       </div>
       </div>
      )
}

export default Sidebar
