"use client"

import { useSelector, useDispatch } from "react-redux"
import { RootState } from "@/redux/store"
import { updateCommunity } from "@/redux/features/communitiesSlice"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export default function AdminCommunities() {
  const dispatch = useDispatch()
  const communities = useSelector(
    (state: RootState) => state.communities.communities,
  )

  const handleApprove = (communityId: string) => {
    dispatch(updateCommunity({ id: communityId, isApproved: true }))
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Manage Communities</h1>
      <Card>
        <CardHeader>
          <CardTitle>Pending Communities</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Description</TableHead>
                <TableHead>Platform</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {communities
                .filter((c) => !c.isApproved)
                .map((community) => (
                  <TableRow key={community.id}>
                    <TableCell>{community.name}</TableCell>
                    <TableCell>{community.description}</TableCell>
                    <TableCell>{community.platform}</TableCell>
                    <TableCell>
                      <Button onClick={() => handleApprove(community.id)}>
                        Approve
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
