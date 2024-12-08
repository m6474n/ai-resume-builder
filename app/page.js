

'use client'
import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/nextjs";
import Link from "next/link";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useEffect, useState } from "react";


export default function Home() {
  const { user } = useUser();
  const createUser = useMutation(api.user.createUser);

  const checkUser = async () => {
    
    const result = await createUser({
      email: user.primaryEmailAddress.emailAddress,
      userName: user.fullName,
      imageUrl: user.imageUrl,
    });
    console.log(result);
  };
  useEffect(() => {
    user && checkUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);
  return (
    <main className="flex justify-center items-center mx-auto w-screen min-h-screen flex-col gap-10">
      <h1 className="text-xl font-bold">AI Resume Builder</h1>
      <Link href="/dashboard">
        <Button >"Get Started"</Button>
      </Link>
    </main>
  );
}
