import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { v4 as uuidv4 } from "uuid"

export type CommunityPlatform = "WhatsApp" | "Telegram" | "Discord" | "Other"

export interface Community {
  id: string
  name: string
  description: string
  platform: CommunityPlatform
  link: string
  creatorId: string
  createdAt: string
  updatedAt: string
  memberCount: number
  department?: string
  status: "Approved" | "Pending"
}

interface CommunitiesState {
  communities: Community[]
}

const initialState: CommunitiesState = {
  communities: [],
}

const communitiesSlice = createSlice({
  name: "communities",
  initialState,
  reducers: {
    addCommunity: (
      state,
      action: PayloadAction<
        Omit<Community, "id" | "createdAt" | "updatedAt" | "memberCount">
      >,
    ) => {
      const newCommunity: Community = {
        ...action.payload,
        id: uuidv4(),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        memberCount: 0,
      }
      state.communities.push(newCommunity)
    },
    updateCommunity: (
      state,
      action: PayloadAction<Partial<Community> & { id: string }>,
    ) => {
      const index = state.communities.findIndex(
        (c) => c.id === action.payload.id,
      )
      if (index !== -1) {
        state.communities[index] = {
          ...state.communities[index],
          ...action.payload,
          updatedAt: new Date().toISOString(),
        }
      }
    },
    deleteCommunity: (state, action: PayloadAction<string>) => {
      state.communities = state.communities.filter(
        (c) => c.id !== action.payload,
      )
    },
  },
})

export const { addCommunity, updateCommunity, deleteCommunity } =
  communitiesSlice.actions
export default communitiesSlice.reducer
