"use client"

import { useSelector } from "react-redux"
import { RootState } from "@/redux/store"
import { NewsCard } from "@/components/news/NewsCard"
import { NewsFilter } from "@/components/news/NewsFilter"

export default function NewsPage() {
  const { news, filters } = useSelector((state: RootState) => state.news)
  const isAdmin = true // This should be determined by your authentication system

  const filteredNews = news.filter((item) => {
    const departmentMatch =
      filters.department === "all" || item.department === filters.department
    let dateMatch = true
    if (filters.date !== "all") {
      const newsDate = new Date(item.createdAt)
      const now = new Date()
      switch (filters.date) {
        case "today":
          dateMatch = newsDate.toDateString() === now.toDateString()
          break
        case "week":
          const weekAgo = new Date(now.setDate(now.getDate() - 7))
          dateMatch = newsDate >= weekAgo
          break
        case "month":
          const monthAgo = new Date(now.setMonth(now.getMonth() - 1))
          dateMatch = newsDate >= monthAgo
          break
      }
    }
    return departmentMatch && dateMatch
  })

  const pinnedNews = filteredNews.filter((item) => item.isPinned)
  const regularNews = filteredNews.filter((item) => !item.isPinned)

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8 font-lora">University News</h1>
      <NewsFilter />
      {pinnedNews.length > 0 && (
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 font-lora">Pinned News</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {pinnedNews.map((item) => (
              <NewsCard key={item.id} news={item} isAdmin={isAdmin} />
            ))}
          </div>
        </div>
      )}
      <div>
        <h2 className="text-2xl font-semibold mb-4  font-lora">Latest News</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {regularNews.map((item) => (
            <NewsCard key={item.id} news={item} isAdmin={isAdmin} />
          ))}
        </div>
      </div>
    </div>
  )
}
