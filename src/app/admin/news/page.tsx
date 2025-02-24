"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { useDispatch } from "react-redux"
import { addNews } from "@/redux/features/newsSlice"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { AppDispatch } from "@/redux/store"

const newsSchema = z.object({
  title: z.string().min(5, "Title must be at least 5 characters"),
  content: z.string().min(20, "Content must be at least 20 characters"),
  faculty: z.string().min(2, "Faculty must be at least 2 characters"),
  attachment: z.string().optional(),
})

type NewsFormData = z.infer<typeof newsSchema>

export default function AdminNews() {
  const dispatch = useDispatch<AppDispatch>()

  const form = useForm<NewsFormData>({
    resolver: zodResolver(newsSchema),
    defaultValues: {
      title: "",
      content: "",
      faculty: "",
      attachment: "",
    },
  })

  const onSubmit = (data: NewsFormData) => {
    dispatch(
      addNews({
        ...data,
        authorId: "admin", //To be replaced with actual admin ID
        isPinned: false,
      }),
    )
    form.reset()
  }

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-8 font-lora text-primary">
        Post News
      </h1>
      <Card>
        <CardHeader>
          <CardTitle className="font-lora">Create New Post</CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Title</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter news title"
                        {...field}
                        className="focus-visible:ring-2 focus-visible:ring-primary transition-colors duration-500"
                      />
                    </FormControl>
                    <FormDescription>
                      Provide a concise title for the news post.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="content"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Content</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Enter news content"
                        className="resize-none focus-visible:ring-2 focus-visible:ring-primary transition-colors duration-500"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      Provide the main content of the news post.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="faculty"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Faculty</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter faculty"
                        {...field}
                        className="focus-visible:ring-2 focus-visible:ring-primary transition-colors duration-500"
                      />
                    </FormControl>
                    <FormDescription>
                      Specify the Faculty related to this news.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="attachment"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Attachment(s)</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Attach files"
                        {...field}
                        className="focus-visible:ring-2 focus-visible:ring-primary transition-colors duration-500"
                        type="file"
                      />
                    </FormControl>
                    <FormDescription>
                      Attach relevant files or documents to the news post.
                      (optional)
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit">Post News</Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  )
}
