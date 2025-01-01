import { configureStore } from "@reduxjs/toolkit"
import authReducer from "./features/authSlice"
import complaintsReducer from "./features/ComplaintsSlice"
import communitiesReducer from "./features/communitiesSlice"
import studentsReducer from "./features/studentsSlice"
import newsReducer from "./features/newsSlice"

export const store = configureStore({
  reducer: {
    auth: authReducer,
    complaints: complaintsReducer,
    communities: communitiesReducer,
    students: studentsReducer,
    news: newsReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
