import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { v4 as uuidv4 } from "uuid"
import { NewsItemType } from "@/types"

interface NewsState {
  news: NewsItemType[]
  filters: {
    faculty: string
    date: string
  }
}

const initialState: NewsState = {
  news: [],
  filters: {
    faculty: "all",
    date: "all",
  },
}

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    addNews: (
      state,
      action: PayloadAction<
        Omit<
          NewsItemType,
          "id" | "createdAt" | "updatedAt" | "reactions" | "comments"
        >
      >,
    ) => {
      const newNews: NewsItemType = {
        ...action.payload,
        id: uuidv4(),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        reactions: { likes: 0, dislikes: 0 },
        comments: [],
      }
      state.news.push(newNews)
    },
    updateNews: (
      state,
      action: PayloadAction<Partial<NewsItemType> & { id: string }>,
    ) => {
      const index = state.news.findIndex((n) => n.id === action.payload.id)
      if (index !== -1) {
        state.news[index] = {
          ...state.news[index],
          ...action.payload,
          updatedAt: new Date().toISOString(),
        }
      }
    },
    deleteNews: (state, action: PayloadAction<string>) => {
      state.news = state.news.filter((n) => n.id !== action.payload)
    },
    addComment: (
      state,
      action: PayloadAction<{
        newsId: string
        userId: string
        content: string
      }>,
    ) => {
      const news = state.news.find((n) => n.id === action.payload.newsId)
      if (news) {
        news.comments.push({
          id: uuidv4(),
          userId: action.payload.userId,
          content: action.payload.content,
          createdAt: new Date().toISOString(),
        })
      }
    },
    addReaction: (
      state,
      action: PayloadAction<{ newsId: string; reaction: "likes" | "dislikes" }>,
    ) => {
      const news = state.news.find((n) => n.id === action.payload.newsId)
      if (news) {
        news.reactions[action.payload.reaction]++
      }
    },
    setNewsFilter: (
      state,
      action: PayloadAction<{ type: "faculty" | "date"; value: string }>,
    ) => {
      state.filters[action.payload.type] = action.payload.value
    },
    togglePinNews: (state, action: PayloadAction<string>) => {
      const news = state.news.find((n) => n.id === action.payload)
      if (news) {
        news.isPinned = !news.isPinned
      }
    },
  },
})

export const {
  addNews,
  updateNews,
  deleteNews,
  addComment,
  addReaction,
  setNewsFilter,
  togglePinNews,
} = newsSlice.actions
export default newsSlice.reducer
