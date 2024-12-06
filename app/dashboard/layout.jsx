import Sidebar from '@/app/dashboard/_components/Sidebar'
import { ClerkProvider } from '@clerk/nextjs'

import React from 'react'
import Navbar from './_components/Navbar'


export default function layout({children}) {
  return (
   <ClerkProvider>

   
    <div>
      <div className="md:w-64 fixed ">
        <Sidebar />
      </div>
      <div className="md:ml-64 ">
        {/* <Header /> */}

        <Navbar/>
        {children}
      </div>
    </div>
    </ClerkProvider>

  
  )
}
