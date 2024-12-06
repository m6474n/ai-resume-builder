import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { BsArrowRight } from "react-icons/bs"
import { IoCreateOutline } from "react-icons/io5"

export default function page() {
  return (
    <main className="flex p-10 flex-col">
     <div className="flex flex-row justify-between items-center w-full">
     <div className="flex flex-col gap-2">
     <h2 className="font-black font-sans text-3xl">ResumeX</h2>
      <p className="text-gray-500">Create your own custom ATS friendly resume with AI to apply for jobs</p>

     </div>
  <Link href={'/dashboard/create'}>
     <div className="text-md  rounded-2xl flex flex-row items-center gap-2 hover:bg-slate-700 bg-slate-800 text-white px-6 py-4"><IoCreateOutline className="scale-125 text-white"/> Create Resume</div>
  </Link>
     </div>
     {/* TEmplated */}
     <div className="flex flex-row justify-between items-center w-full my-8">
     <div className="flex flex-col gap-2">
     <h2 className="font-bold font-sans text-xl">Templates</h2>
     </div>
  <Link href={'/dashboard/templates'}>
  <p className="text-slate-700 flex flex-row items-center gap-2">see all <BsArrowRight/></p>
  </Link>
     </div>
    </main>
  )
}
