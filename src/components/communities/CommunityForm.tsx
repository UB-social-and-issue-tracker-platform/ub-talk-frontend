"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { useDispatch } from "react-redux"
import {
  addCommunity,
  updateCommunity,
  Community,
  CommunityPlatform,
} from "@/redux/features/communitiesSlice"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

const communitySchema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters"),
  description: z.string().min(20, "Description must be at least 20 characters"),
  platform: z.enum(["WhatsApp", "Telegram", "Discord", "Other"]),
  link: z.string().url("Must be a valid URL"),
  department: z.string().optional(),
})

type CommunityFormData = z.infer<typeof communitySchema>

interface CommunityFormProps {
  community?: Community
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function CommunityForm({
  community,
  open,
  onOpenChange,
}: CommunityFormProps) {
  const dispatch = useDispatch()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const form = useForm<CommunityFormData>({
    resolver: zodResolver(communitySchema),
    defaultValues: community || {
      name: "",
      description: "",
      platform: "WhatsApp",
      link: "",
      department: "",
    },
  })

  const onSubmit = async (data: CommunityFormData) => {
    setIsSubmitting(true)
    try {
      if (community) {
        dispatch(updateCommunity({ id: community.id, ...data }))
      } else {
        dispatch(addCommunity({ ...data, creatorId: "current-user-id" })) // Replace with actual user ID
      }
      onOpenChange(false)
      form.reset()
    } catch (error) {
      console.error("Error submitting community:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>
            {community ? "Edit Community" : "Create New Community"}
          </DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter community name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Describe your community"
                      className="resize-none"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="platform"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Platform</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select platform" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {["WhatsApp", "Telegram", "Discord", "Other"].map(
                        (platform) => (
                          <SelectItem key={platform} value={platform}>
                            {platform}
                          </SelectItem>
                        ),
                      )}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="link"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Link</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter community link" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="department"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Department (Optional)</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter department" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting
                ? "Submitting..."
                : community
                  ? "Update Community"
                  : "Create Community"}
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}
