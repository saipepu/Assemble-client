import React from 'react'
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from "zod";
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
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
    
  topSkills: z
    .array(z.string())
    .min(1, "Please select at least one skill.")
    .max(10, "You can select up to 10 skills."),
    
  skillLevel: z.enum(["Beginner", "Intermediate", "Advanced"]),
    
  relevantExperience: z
    .string()
    .max(200, "Experience description can't exceed 200 characters.")
    .optional(),

  weeklyCommitment: z.enum(["Less than 5 hours", "5-10 hours", "10+ hours"]),
  
  startDate: z
    .string()
    .refine(
      (date) => !isNaN(Date.parse(date)),
      "Invalid start date format."
    ),

  projectGoals: z
    .string()
    .max(150, "Goals description can't exceed 150 characters."),
    
  personalStatement: z
    .string()
    .min(10, "Please provide at least 10 characters.")
    .max(300, "Personal statement can't exceed 300 characters."),
    
  collaborationStyle: z
    .array(z.enum(["Frequent Check-ins", "Independent Work", "Flexible Deadlines"]))
    .min(1, "Please select at least one collaboration style."),
    
  questionsForLead: z
    .string()
    .max(200, "Questions can't exceed 200 characters.")
    .optional(),
    
  resumeUrl: z
    .string()
    .url("Invalid resume URL.")
    .optional()
});

const ProjectJoinForm = () => {

  const form = useForm<z.infer<typeof JoinProjectSchema>>({
    resolver: zodResolver(JoinProjectSchema),
    defaultValues: {
      linkedInProfile: "",
      portfolioUrl: "",
      preferredRole: "frontend",
      topSkills: [],
      skillLevel: "Beginner",
      personalStatement: "",
      resumeUrl: "",
    }
  })

  const onSubmit = async (data: z.infer<typeof JoinProjectSchema>) => {

    // const result = await 
    console.log('data', data)
  }

  return (
    <div className="w-full h-full flex justify-center items-center overflow-hidden overflow-y-scroll">

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="w-full flex flex-col justify-start items-start gap-5 p-5">
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
            name="topSkills"
            render={({ field }) => (
              <FormItem className="w-full flex flex-col justify-start items-start">
                <Label htmlFor="topSkills">Top Skills</Label>
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
          <Button type="submit" className="w-full h-10 text-base font-normal bg-orange-500">
            Join Project
          </Button>
        </form>
      </Form>

    </div>
  )
}

export default ProjectJoinForm