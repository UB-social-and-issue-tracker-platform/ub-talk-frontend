"use client"

import { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { RootState } from "@/redux/store"
import { CommunityCard } from "@/components/communities/CommunityCard"
import { CommunityForm } from "@/components/communities/CommunityForm"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import { deleteCommunity, Community } from "@/redux/features/communitiesSlice"

export default function CommunitiesPage() {
  const dispatch = useDispatch()
  const communities = useSelector(
    (state: RootState) => state.communities.communities,
  )
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [editingCommunity, setEditingCommunity] = useState<
    Community | undefined
  >(undefined)

  const handleEdit = (community: Community) => {
    setEditingCommunity(community)
    setIsFormOpen(true)
  }

  const handleDelete = (id: string) => {
    if (window.confirm("Are you sure you want to delete this community?")) {
      dispatch(deleteCommunity(id))
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Student Communities</h1>
        <Button onClick={() => setIsFormOpen(true)}>
          <Plus className="mr-2 h-4 w-4" /> Create Community
        </Button>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {communities.map((community) => (
          <CommunityCard
            key={community.id}
            community={community}
            onEdit={() => handleEdit(community)}
            onDelete={() => handleDelete(community.id)}
          />
        ))}
      </div>
      <CommunityForm
        open={isFormOpen}
        onOpenChange={(open) => {
          setIsFormOpen(open)
          if (!open) setEditingCommunity(undefined)
        }}
        community={editingCommunity}
      />
    </div>
  )
}
