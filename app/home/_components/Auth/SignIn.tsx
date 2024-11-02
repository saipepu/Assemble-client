"use client";

import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod';
import { useRouter } from 'next/navigation';
import { Loader } from 'lucide-react';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { signIn } from 'next-auth/react';
import { Label } from '@/components/ui/label';

const FormSchema = z.object({
  email: z.string(),
  password: z.string().min(4, {
    message: "Password must have at least 5 letters."
  })
})

const SignIn = ({ setShowRegistrationForm } : any) => {

  const router = useRouter()
  const [isLoading, setIsLoading] = useState<Boolean>(false)

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
      password: "",
    }
  })

  const onSubmit = async (data: z.infer<typeof FormSchema>) => {

    setIsLoading(true)
    // const result = await signin({ data: data });

    // if(result?.success) {
    //   let token = result.message.token
    //   let member_id = result.message.member.id
    //   localStorage.setItem("pitchhub-token", JSON.stringify(token))
    //   router.push(`/event/147/scoring/${member_id}/categories`)
    //   // router.push(`/user/${member_id}/profile`)
    // } else {
    //   console.log(result.error)
    //   toast.error("An Error Occur!")
    // }
    setIsLoading(false)

  }

  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="w-[300px] h-full flex flex-col justify-center items-center gap-5">
        <p className="title-normal">Sign In</p>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="w-full flex flex-col gap-2">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <Label className="text-base font-normal">Email</Label>
                  <FormControl>
                    <Input type="email" placeholder="example@gmail.com" {...field} />
                  </FormControl>
                  <FormMessage className="text-xs font-light leading-tight"/>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <Label className="text-base font-normal">Password</Label>
                  <FormControl>
                    <Input type="password" placeholder="----------" {...field} />
                  </FormControl>
                  <FormMessage className="text-xs font-light leading-tight"/>
                </FormItem>
              )}
            />
            {!isLoading ?
              <Button type="submit">Sign In</Button>
              : 
              <Button disabled>
                <Loader className='w-4 h-4 animate-spin' />
              </Button>
            }
          </form>
        </Form>
        <div className="w-[80%] h-[1px] bg-gray-300"></div>
        <div className='w-full flex flex-col justify-start items-start gap-1'>
          <Button
            className="w-full flex justify-center items-center gap-2 bg-blue-500 text-white"
            onClick={() => signIn("google")}
          >
            <FaGoogle className="w-6 h-6" />
            <p>Continue with Google</p>
          </Button>
          <Button
            className="w-full flex justify-center items-center gap-2 bg-gray-800 text-white"
            onClick={() => signIn("github")}
          >
            <FaGithub className="w-6 h-6" />
            <p>Continue with Github</p>
          </Button>
        </div>
        <div className="w-full flex justify-start items-center gap-2">
          <p className="text-sm">Do not have an account yet?</p>
          <div
            onClick={() => setShowRegistrationForm("signup")}
            className="text-sm underline text-blue-500 cursor-pointer"
          >
            Sign In
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignIn