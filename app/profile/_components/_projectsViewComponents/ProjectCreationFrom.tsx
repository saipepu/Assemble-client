"use client";

import { getRandomColor } from "@/app/utils/colorGenerator";
import { Button } from "@/components/ui/button";
import { DotPatternLinearGradient } from "@/components/ui/dot-pattern-linear-gradient";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { MultiSelect } from "@/components/ui/multi-select";
import {
  Trash,
} from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { PenTool } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { createProject } from "@/app/api/project";
import { useSession } from "next-auth/react";


const defaultProject = {
  title: "Project Title",
  tagLine: "Project Tagline",
  description: "Project Description",
  creator: "John Doe",
  published: true,
  category: "react",
  photo: "https://images.unsplash.com/photo-1629910197264-4b3b3b3b3b3b",
};

const MilestoneSchema = z.object({
  name: z.string(),
  dueDate: z.date(),
});

const CreateProjectSchema = z.object({
  title: z
    .string()
    .min(2, "Title must be at least 2 characters.")
    .max(30, "Title can't exceed 100 characters."),

  tagLine: z
    .string()
    .min(2, "Tagline must be at least 2 characters.")
    .max(100, "Tagline can't exceed 100 characters."),

  description: z
    .string()
    .min(10, "Description must be at least 10 characters.")
    .max(300, "Description can't exceed 300 characters."),

  categories: z
    .string()
    .min(2, "Category must be at least 2 characters.")
    .max(30, "Category can't exceed 30 characters."),

  published: z.boolean(),

  photo: z.string().optional(),
});

const ProjectCreationFrom = ({ setShowCreateProjectForm }: any) => {

  const { data: session } = useSession();
  const [milestones, setMilestones] = useState<any[]>([
    { name: "", dueDate: new Date() },
  ]);
  const [requiredSkills, setRequiredSkills] = useState<any[]>([
    { title: "", experience: "Beginner" },
  ]);

  const form = useForm<z.infer<typeof CreateProjectSchema>>({
    resolver: zodResolver(CreateProjectSchema),
    defaultValues: defaultProject,
  });

  const { formState, getValues } = form;

  const onSubmit = async (data: z.infer<typeof CreateProjectSchema>) => {
    let dto = {
      ...data,
      categories: data.categories.split(","),
      requiredSkills: requiredSkills,
    };

    console.log(dto, "dto");
    console.log(session?.accessToken, "session");

    const response = await createProject({
      dto: dto,
      token: session?.accessToken as string,
    });
    if (response.success) {
      console.log(response.message, "success");
      setShowCreateProjectForm(false);
    } else {
      console.log(response.message, "error");
    }
  };

  const frameworksList = [
    { value: "react", label: "React" },
    { value: "angular", label: "Angular" },
    { value: "vue", label: "Vue" },
    { value: "svelte", label: "Svelte" },
    { value: "ember", label: "Ember" },
  ];
  const [selectedCategories, setSelectedCategories] = useState<string[]>([
    "react",
    "angular",
  ]);

  useEffect(() => {
    form.setValue("categories", selectedCategories.join(","));
  }, [selectedCategories]);

  return (
    <div className="w-full h-full flex flex-col justify-start items-start gap-5">
      <p className="w-full text-lg border-black font-semibold">New Project</p>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full flex flex-col gap-2"
        >
          {/* TITLE */}
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem className="w-full flex flex-col justify-start items-start gap-1">
                <Label className="text-base font-normal">Title</Label>
                <FormControl>
                  <Input type="text" placeholder="Project Title" {...field} />
                </FormControl>
                <FormMessage className="text-xs font-light leading-tight" />
              </FormItem>
            )}
          />
          {/* TAGLINE */}
          <FormField
            control={form.control}
            name="tagLine"
            render={({ field }) => (
              <FormItem className="w-full flex flex-col justify-start items-start gap-1">
                <Label className="text-base font-normal">Tagline</Label>
                <FormControl>
                  <Input
                    type="text"
                    placeholder="Project Tagline"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-xs font-light leading-tight" />
              </FormItem>
            )}
          />
          {/* DESCRIPTION */}
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem className="w-full flex flex-col justify-start items-start gap-1">
                <Label className="text-base font-normal">Description</Label>
                <FormControl>
                  <Input
                    type="text"
                    placeholder="Project Description"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-xs font-light leading-tight" />
              </FormItem>
            )}
          />
          {/* CATEGORY */}
          <FormField
            control={form.control}
            name="categories"
            render={({ field }) => (
              <FormItem className="w-full flex flex-col justify-start items-start gap-1">
                <Label className="text-base font-normal">Category</Label>
                <FormControl>
                  <div className="w-full flex flex-col justify-start items-start gap-1">
                    <Input
                      type="text"
                      placeholder="Technology,Science"
                      {...field}
                      className="hidden"
                      value={selectedCategories.join(",")}
                    />
                    <MultiSelect
                      options={frameworksList}
                      onValueChange={setSelectedCategories}
                      defaultValue={selectedCategories}
                      placeholder="Select frameworks"
                      variant="inverted"
                      animation={2}
                      maxCount={3}
                    />
                  </div>
                </FormControl>
                <FormMessage className="text-xs font-light leading-tight" />
              </FormItem>
            )}
          />
          {/* PHOTO */}
          <FormField
            control={form.control}
            name="photo"
            render={({ field }) => (
              <FormItem className="w-full flex flex-col justify-start items-start gap-1">
                <Label className="text-base font-normal">
                  Cover Photo Url
                </Label>
                <FormControl>
                  <Input
                    type="text"
                    placeholder="Project Cover Photo Url"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-xs font-light leading-tight" />
              </FormItem>
            )}
          />
          {/* SKILLS */}
          <div className="w-full flex flex-col justify-start items-start">
            <div className="w-full flex flex-col justify-start items-start gap-5 mt-5">
              <Label className="w-full text-lg font-semibold">{`Required Skills (At least One)`}</Label>
              <div className="w-full flex flex-col justify-start items-start gap-1">
                {requiredSkills.map((requiredSkill, index) => {
                  return (
                    <div
                      key={index}
                      className="w-full flex flex-col justify-start items-start gap-1"
                    >
                      <Label className="w-full text-base font-normal">
                        Skill {index + 1}
                      </Label>
                      <div className="w-full flex justify-between items-center gap-1">
                        <Input
                          type="text"
                          placeholder="Technology"
                          value={requiredSkill.title}
                          onChange={(e) => {
                            setRequiredSkills(
                              requiredSkills.map((skill, i) =>
                                i === index
                                  ? { ...skill, title: e.target.value }
                                  : skill
                              )
                            );
                          }}
                        />
                        <Select
                          defaultValue={"Beginner"}
                          onValueChange={(value) =>
                            setRequiredSkills(
                              requiredSkills.map((skill, i) =>
                                i === index
                                  ? { ...skill, experience: value }
                                  : skill
                              )
                            )
                          }
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Theme" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Beginner">Beginner</SelectItem>
                            <SelectItem value="Intermediate">
                              Intermediate
                            </SelectItem>
                          </SelectContent>
                        </Select>
                        <div
                          className="h-full p-2 flex justify-center items-center hover:text-red-500 cursor-pointer"
                          onClick={() =>
                            setRequiredSkills(
                              requiredSkills.filter((_, i) => i !== index)
                            )
                          }
                        >
                          <Trash size={16} />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <Button
              className="text-xs font-light p-1 bg-transparent text-gray-500 hover:bg-transparent hover:text-black hover:font-medium duration-300 transition-all"
              onClick={() =>
                setRequiredSkills([
                  ...requiredSkills,
                  { title: "", experience: "Beginner" },
                ])
              }
            >
              Add More +
            </Button>
          </div>
          {/* MILESTONES */}
          {/* <div className="w-full flex flex-col justify-start items-start">
              <div className='w-full flex flex-col justify-start items-start gap-5 mt-5'>
                <Label className="w-full text-lg font-semibold">{`Project Milestones (Optional)`}</Label>
                <div className="w-full flex flex-col justify-start items-start gap-1">
                  {milestones.map((milestone, index) => {
                    return (
                      <div key={index} className="w-full flex flex-col justify-start items-start gap-1">
                        <Label className="text-base font-normal">Milestone {index+1}</Label>
                        <div className="w-full flex justify-between items-center gap-1">
                          <Input type="text" placeholder="Technology,Science"
                            onChange={() => console.log('input change')}
                          />
                          <Popover>
                            <PopoverTrigger asChild>
                              <div className='w-full h-full rounded-md flex justify-between items-center gap-2 bg-white pr-2 cursor-pointer border-[1px] border-gray-200'>
                                <p className='text-sm p-1 px-2'>{new Date().toLocaleDateString()}</p>
                                <CalendarDays size={16} />
                              </div>
                            </PopoverTrigger>
                            <PopoverContent className="bg-white text-black p-0 grid grid-cols-1 gap-2">
                              <Calendar
                                mode="single"
                                selected={new Date()}
                                onSelect={(date) => {
                                  console.log(date, 'date')
                                }}
                                className="rounded-md border"
                                fromDate={new Date()}
                              />
                            </PopoverContent>
                          </Popover>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
              <Button
                className="text-xs font-light p-1 bg-transparent text-gray-500 hover:bg-transparent hover:text-black hover:font-medium duration-300 transition-all"
                onClick={() => setMilestones([...milestones, { name: "", dueDate: new Date() }])}
              >
                Add Milestone +
              </Button>
          </div> */}
          {/* PUBLISHED */}
          <FormField
            control={form.control}
            name="published"
            render={({ field }) => (
              <FormItem className="w-full flex justify-start items-center gap-1">
                <Label className="text-base font-normal">Publish</Label>
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <FormMessage className="text-xs font-light leading-tight" />
              </FormItem>
            )}
          />
          <div className="w-full flex justify-start items-center gap-1">
            <Button
              className="relative z-10 mt-5 text-gray-300"
              variant="outline"
              onClick={() => setShowCreateProjectForm(false)}
            >
              Cancel
            </Button>
            <Button className="relative z-10 mt-5" type="submit">
              Create
              <PenTool size={16} />
            </Button>
          </div>
        </form>
      </Form>

    </div>
  )
}

export default ProjectCreationFrom