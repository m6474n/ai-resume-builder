import React from 'react'

const ResumeCard = ({id, title}) => {
  return (
    <div key={id} className="p-4 border min-w-[200px] h-[250px] border-slate-400  rounded-xl flex flex-col items-center justify-between">
    <div className="border  flex w-full justify-center items-center rounded-lg h-[180px]">
Image
    </div>
   <div className="text-sm"> {title}</div>
  </div>
  )
}

export default ResumeCard
