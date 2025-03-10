"use client"

import axios from "axios";
import { useNavigate } from "react-router-dom"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import "./App.css"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "./components/ui/input"
import { Textarea } from "./components/ui/textarea"

const maxCharacters = 500;
const maxUsername = 20;

const formSchema = z.object({
  username: z.string().max(maxUsername, {
    message: "keep it short and sweet.",
  }).optional(),
	content: z.string().min(1, {
		message: "no point in saying nothing.",
	}).max(maxCharacters, {
    message: "keep it short and sweet.",
  }),
  image: z.instanceof(File).optional(),
})

export function PostForm() {
	const navigate = useNavigate();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  })
 
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    const formData = new FormData();
    if (!values.username) {
      values.username = "anonymous";
    }
    formData.append("username", values.username);
    formData.append("content", values.content);
    if (values.image) {
      formData.append("image", values.image);
    }
    
    try {
      // sent POST request to the server
      const response = await axios.post(`${import.meta.env.VITE_API_URL}`, formData, {
        headers: { "Content-Type": "multipart/form-data" }
      });
			console.log(response);
      navigate("/");
    } catch (err) {
      console.error(err);
      if (err instanceof Error) alert(`Failed to create post: ${err.message}`);
      else alert('Failed to create post');
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 p-16 max-w-2xl mx-auto">

        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>username</FormLabel>
              <FormControl>
                <Input placeholder="your username. leave blank for anonymous." className="placeholder:text-muted-foreground" {...field} 
                  onChange={(e) => {
                    if (e.target.value.length <= maxUsername) {
                      field.onChange(e);
                    }
                  }}
                />
              </FormControl>
              <div className="text-right text-sm text-muted-foreground">
                {(field.value ?? "").length} / {20}
              </div>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="content"
          render={({ field }) => (
            <FormItem>
              <FormLabel>content</FormLabel>
              <FormControl>
                <Textarea 
                  placeholder="the content of your post. play nice." className="placeholder:text-muted-foreground"{...field} 
                  onChange={(e) => {
                    if (e.target.value.length <= maxCharacters) {
                      field.onChange(e);
                    }
                  }}
                />
              </FormControl>
              <div className="text-right text-sm text-muted-foreground">
                {(field.value ?? "").length} / {500}
              </div>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="image"
          render={({ field: { onChange } }) => (
            <FormItem>
              <FormLabel>an image (optional).</FormLabel>
              <FormControl>
                <Input 
                  type="file" 
                  accept="image/*"  
                  onChange={(e) => onChange(e.target.files?.[0])}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}

export default PostForm;