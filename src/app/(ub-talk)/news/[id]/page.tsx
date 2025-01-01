"use client"

import { useSelector, useDispatch } from "react-redux"
import { RootState } from "@/redux/store"
import { addComment, addReaction } from "@/redux/features/newsSlice"
import { useState } from "react"
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ThumbsUp, ThumbsDown, Share2 } from "lucide-react"

export default function NewsDetailPage({ params }: { params: { id: string } }) {
  const dispatch = useDispatch()
  const news = useSelector((state: RootState) =>
    state.news.news.find((n) => n.id === params.id),
  )
  const [comment, setComment] = useState("")

  if (!news) {
    return <div>News not found</div>
  }

  const handleReaction = (reaction: "like" | "dislike") => {
    dispatch(addReaction({ newsId: news.id, reaction }))
  }

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (comment.trim()) {
      dispatch(
        addComment({
          newsId: news.id,
          userId: "current-user-id",
          content: comment,
        }),
      )
      setComment("")
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Card>
        <CardHeader>
          <CardTitle>{news.title}</CardTitle>
          <CardDescription>
            Posted on {new Date(news.createdAt).toLocaleDateString()} •{" "}
            {news.department}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="whitespace-pre-wrap">{news.content}</p>
        </CardContent>
        <CardFooter className="flex justify-between">
          <div className="flex space-x-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => handleReaction("like")}
            >
              <ThumbsUp className="mr-2 h-4 w-4" /> {news.reactions.likes}
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => handleReaction("dislike")}
            >
              <ThumbsDown className="mr-2 h-4 w-4" /> {news.reactions.dislikes}
            </Button>
          </div>
          <Button variant="outline" size="sm">
            <Share2 className="mr-2 h-4 w-4" /> Share
          </Button>
        </CardFooter>
      </Card>

      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Comments</h2>
        <form onSubmit={handleCommentSubmit} className="mb-6">
          <Textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Add a comment..."
            className="mb-2"
          />
          <Button type="submit">Post Comment</Button>
        </form>
        <div className="space-y-4">
          {news.comments.map((comment) => (
            <Card key={comment.id}>
              <CardHeader>
                <div className="flex items-center">
                  <Avatar className="h-6 w-6 mr-2">
                    <AvatarImage
                      src={`/avatars/${comment.userId}.jpg`}
                      alt={comment.userId}
                    />
                    <AvatarFallback>
                      {comment.userId.slice(0, 2).toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                  <CardTitle className="text-sm font-medium">
                    {comment.userId}
                  </CardTitle>
                </div>
                <CardDescription className="text-xs">
                  {new Date(comment.createdAt).toLocaleString()}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>{comment.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
