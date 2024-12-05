import Sidebar from '@/components/Sidebar'
import { ClerkProvider } from '@clerk/nextjs'

import React from 'react'


export default function layout({children}) {
  return (
   <ClerkProvider>

   
    <div>
      <div className="md:w-64 fixed ">
        <Sidebar />
      </div>
      <div className="md:ml-64 ">
        {/* <Header /> */}
        {children}
      </div>
    </div>
    </ClerkProvider>

  
  )
}
