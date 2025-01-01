import { NewsItem } from "@/redux/features/newsSlice"
import { useDispatch } from "react-redux"
import { addReaction, togglePinNews } from "@/redux/features/newsSlice"
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ThumbsUp, ThumbsDown, MessageSquare, Share2, Pin } from "lucide-react"
import Link from "next/link"

interface NewsCardProps {
  news: NewsItem
  isAdmin: boolean
}

export function NewsCard({ news, isAdmin }: NewsCardProps) {
  const dispatch = useDispatch()

  const handleReaction = (reaction: "like" | "dislike") => {
    dispatch(addReaction({ newsId: news.id, reaction }))
  }

  const handlePin = () => {
    dispatch(togglePinNews(news.id))
  }

  return (
    <Card className={news.isPinned ? "border-2 border-primary" : ""}>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          {news.title}
          {isAdmin && (
            <Button variant="ghost" size="sm" onClick={handlePin}>
              <Pin
                className={`h-4 w-4 ${news.isPinned ? "fill-primary" : ""}`}
              />
            </Button>
          )}
        </CardTitle>
        <CardDescription>
          Posted on {new Date(news.createdAt).toLocaleDateString()} •{" "}
          {news.department}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="line-clamp-3">{news.content}</p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <div className="flex space-x-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => handleReaction("like")}
          >
            <ThumbsUp className="mr-2 h-4 w-4" /> {news.reactions.likes}
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => handleReaction("dislike")}
          >
            <ThumbsDown className="mr-2 h-4 w-4" /> {news.reactions.dislikes}
          </Button>
          <Button variant="ghost" size="sm" asChild>
            <Link href={`/news/${news.id}`}>
              <MessageSquare className="mr-2 h-4 w-4" /> {news.comments.length}
            </Link>
          </Button>
        </div>
        <Button variant="ghost" size="sm">
          <Share2 className="mr-2 h-4 w-4" /> Share
        </Button>
      </CardFooter>
    </Card>
  )
}
