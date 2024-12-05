import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    
   <main className="flex justify-center items-center mx-auto w-screen min-h-screen flex-col gap-10">
    <h1 className="">Ai Resume Builder</h1>
   <Link href={'/dashboard'}> <Button>Get Started</Button></Link>
   </main>
  );
}
