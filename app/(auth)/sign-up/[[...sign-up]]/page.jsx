import { SignUp } from '@clerk/nextjs'

export default function Page() {
  return (<div className='flex mx-auto justify-center items-center min-h-screen'>
    <SignUp />
  </div>)
}