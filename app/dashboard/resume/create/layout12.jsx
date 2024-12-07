import { ClerkProvider } from '@clerk/nextjs'
import React from 'react'
import FormProgress from '../_components/FormProgress'
export default function layout({children}) {
    return (
     <ClerkProvider>
  
     
      <div>
        <div className="md:w-64 fixed ">
         <FormProgress/>
        </div>
        <div className="md:ml-64 ">
          {/* <Header /> */}
          {children}
        </div>
      </div>
      </ClerkProvider>
  
    
    )
  }
  