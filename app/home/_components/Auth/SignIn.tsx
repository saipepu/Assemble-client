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
import { toast } from 'sonner';

const FormSchema = z.object({
  email: z.string(),
  password: z.string().min(4, {
    message: "Password must have at least 5 letters."
  })
})

const SignIn = () => {

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
          <form onSubmit={form.handleSubmit(onSubmit)} className="w-full flex flex-col gap-5">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <p className="label-big">Email</p>
                  <FormControl>
                    <Input type="email" placeholder="example@gmail.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <p className="label-big">Password</p>
                  <FormControl>
                    <Input type="password" placeholder="----------" {...field} />
                  </FormControl>
                  <FormMessage />
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
        <div className="w-full flex justify-start items-center gap-2">
          <p className="label-small">Do not have an account yet?</p>
          <Link
            href="/auth/signup"
            className="label-small underline text-blue-500"
          >
            Sign In
          </Link>
        </div>
      </div>
    </div>
  )
}

export default SignIn