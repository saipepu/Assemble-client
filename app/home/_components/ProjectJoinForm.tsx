import React from 'react'
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from "zod";
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem } from '@/components/ui/form';
import { Label } from '@/components/ui/label';

const JoinProjectSchema = z.object({
    
  linkedInProfile: z
    .string()
    .url("Invalid LinkedIn URL.")
    .optional(),
    
  portfolioUrl: z
    .string()
    .url("Invalid portfolio URL.")
    .optional(),

  preferredRole: z
    .string()
    .min(1, "Please select your preferred role.")
    .max(30, "Role name can't exceed 30 characters."),

  topSkill: z
    .string()
    .min(1, "Please select at least one skill.")
    .max(5, "You can select up to 5 skills."),

  skillLevel: z
    .string()
    .min(1, "Please select your skill level.")
    .max(30, "Skill level can't exceed 30 characters."),

  weeklyCommitment: z
    .string()
    .min(1, "Please select your weekly commitment.")
    .max(30, "Weekly commitment can't exceed 30 characters."),
    
  personalStatement: z
    .string()
    .min(10, "Please provide at least 10 characters.")
    .max(300, "Personal statement can't exceed 300 characters."),
    
  resumeUrl: z
    .string()
    .url("Invalid resume URL.")
    .optional()
});

const ProjectJoinForm = ({ setShowForm }: any) => {

  const form = useForm<z.infer<typeof JoinProjectSchema>>({
    resolver: zodResolver(JoinProjectSchema),
    defaultValues: {
      linkedInProfile: "https://ui.shadcn.com/docs/components/select",
      portfolioUrl: "https://ui.shadcn.com/docs/components/select",
      preferredRole: "frontend",
      topSkill: "",
      skillLevel: "Beginner",
      personalStatement: "I am a frontend developer with 2 years of experience.",
      weeklyCommitment: "5-10 hours",
      resumeUrl: "https://ui.shadcn.com/docs/components/select",
    }
  })

  const { formState } = useForm()
  console.log('formState', formState.errors)

  const onSubmit = async (data: z.infer<typeof JoinProjectSchema>) => {

    // const result = await 
    console.log('data', data)
    setShowForm(false)

  }

  return (
    <div className="w-full h-full flex justify-center items-center overflow-hidden overflow-y-scroll">

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="w-full flex flex-col justify-start items-start gap-5 p-5">
          <Label className="text-2xl font-semibold">Join Project</Label>
          <FormField
            control={form.control}
            name="linkedInProfile"
            render={({ field }) => (
              <FormItem className="w-full flex flex-col justify-start items-start">
                <Label htmlFor="linkedInProfile">LinkedIn Profile</Label>
                <FormControl>
                  <Input type="url" placeholder="https://linkedIn.profile" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="portfolioUrl"
            render={({ field }) => (
              <FormItem className="w-full flex flex-col justify-start items-start">
                <Label htmlFor="portfolioUrl">Portfolio URL</Label>
                <FormControl>
                  <Input type="url" placeholder="https://portfolio.url" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="preferredRole"
            render={({ field }) => (
              <FormItem className="w-full flex flex-col justify-start items-start">
                <Label htmlFor="preferredRole">Preferred Role</Label>
                <FormControl>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <SelectTrigger>
                      <SelectValue placeholder="Theme" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="frontend">Frontend</SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="topSkill"
            render={({ field }) => (
              <FormItem className="w-full flex flex-col justify-start items-start">
                <Label htmlFor="topSkill">Top Skills</Label>
                <FormControl>
                  <Select onValueChange={field.onChange}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select Skills" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="html">HTML</SelectItem>
                      <SelectItem value="css">CSS</SelectItem>
                      <SelectItem value="js">JavaScript</SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="skillLevel"
            render={({ field }) => (
              <FormItem className="w-full flex flex-col justify-start items-start">
                <Label htmlFor="skillLevel">Skill Level</Label>
                <FormControl>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select Level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Beginner">Beginner</SelectItem>
                      <SelectItem value="Intermediate">Intermediate</SelectItem>
                      <SelectItem value="Advanced">Advanced</SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="personalStatement"
            render={({ field }) => (
              <FormItem className="w-full flex flex-col justify-start items-start">
                <Label htmlFor="personalStatement">Personal Statement</Label>
                <FormControl>
                  <Textarea placeholder="Experience Description" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="weeklyCommitment"
            render={({ field }) => (
              <FormItem className="w-full flex flex-col justify-start items-start">
                <Label htmlFor="weeklyCommitment">Weekly Commitment</Label>
                <FormControl>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select Commitment" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Less than 5 hours">Less than 5 hours</SelectItem>
                      <SelectItem value="5-10 hours">5-10 hours</SelectItem>
                      <SelectItem value="10+ hours">10+ hours</SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="resumeUrl"
            render={({ field }) => (
              <FormItem className="w-full flex flex-col justify-start items-start">
                <Label htmlFor="resumeUrl">Resume URL</Label>
                <FormControl>
                  <Input type="url" placeholder="https://resume.url" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <Button
            type="submit"
            className="w-full h-10 text-base font-normal bg-orange-500"
          >
            Join Project
          </Button>
        </form>
      </Form>

    </div>
  )
}

export default ProjectJoinForm