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
    dispatch(updateCommunity({ id: communityId, status: "Approved" }))
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 font-lora text-primary">
        Manage Communities
      </h1>
      <Card>
        <CardHeader>
          <CardTitle className="font-lora">Pending Communities</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="font-expletusSans">Name</TableHead>
                <TableHead className="font-expletusSans">Description</TableHead>
                <TableHead className="font-expletusSans">Platform</TableHead>
                <TableHead className="font-expletusSans">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {communities.length !== 0 &&
                communities
                  .filter((c) => c.status === "Pending")
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
          {communities.length === 0 && (
            <div className="flex justify-center items-center h-40">
              <p>No pending community to display!</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
