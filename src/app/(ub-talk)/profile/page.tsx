"use client"

import { useState } from "react"
import { useSelector } from "react-redux"
import { RootState } from "@/redux/store"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Edit, Users2 } from "lucide-react"
import { EditProfileForm } from "@/components/profile/EditProfileForm"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export default function ProfilePage() {
  const user = useSelector((state: RootState) => state.auth.user)
  const complaints = useSelector((state: RootState) =>
    state.complaints.complaints.filter((c) => c.userId === user?.id),
  )
  const communities = useSelector((state: RootState) =>
    state.communities.communities.filter((c) => c.creatorId === user?.id),
  )

  const [activeTab, setActiveTab] = useState("details")
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false)

  if (!user) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <Card className="mb-8">
        <CardHeader className="flex flex-row items-center justify-between">
          <div className="flex items-center space-x-4">
            <Avatar className="h-20 w-20">
              <AvatarImage src={user.profilePicture} alt={user.name} />
              <AvatarFallback>
                {user.name.slice(0, 2).toUpperCase()}
              </AvatarFallback>
            </Avatar>
            <div>
              <CardTitle className="text-2xl">{user.name}</CardTitle>
              <CardDescription>Matricule: {user.matricule}</CardDescription>
            </div>
          </div>
          <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
            <DialogTrigger asChild>
              <Button>
                <Edit className="mr-2 h-4 w-4" /> Update Profile
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Edit Profile</DialogTitle>
                <DialogDescription>
                  Update your profile information here. Click save when
                  you&apos;re done.
                </DialogDescription>
              </DialogHeader>
              <EditProfileForm />
            </DialogContent>
          </Dialog>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h3 className="font-semibold">Email</h3>
              <p>{user.email}</p>
            </div>
            <div>
              <h3 className="font-semibold">Faculty</h3>
              <p>{user.faculty || "Not specified"}</p>
            </div>
            <div>
              <h3 className="font-semibold">Department</h3>
              <p>{user.department || "Not specified"}</p>
            </div>
            <div>
              <h3 className="font-semibold">Interests</h3>
              <p>{user.interests?.join(", ") || "Not specified"}</p>
            </div>
          </div>
          {user.bio && (
            <div className="mt-4">
              <h3 className="font-semibold">Bio</h3>
              <p>{user.bio}</p>
            </div>
          )}
        </CardContent>
      </Card>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList>
          <TabsTrigger value="complaints">My Complaints</TabsTrigger>
          <TabsTrigger value="communities">My Communities</TabsTrigger>
        </TabsList>
        <TabsContent value="complaints">
          <Card>
            <CardHeader>
              <CardTitle>My Complaints</CardTitle>
            </CardHeader>
            <CardContent>
              {complaints.length === 0 ? (
                <p>You haven&apos;t submitted any complaints yet.</p>
              ) : (
                <div className="space-y-4">
                  {["Pending", "Completed", "Escalated"].map((status) => (
                    <div key={status}>
                      <h3 className="font-semibold mb-2">{status}</h3>
                      <div className="space-y-2">
                        {complaints
                          .filter((c) => c.status === status)
                          .map((complaint) => (
                            <Card key={complaint.id}>
                              <CardHeader>
                                <CardTitle className="text-lg">
                                  {complaint.title}
                                </CardTitle>
                                <CardDescription>
                                  {new Date(
                                    complaint.createdAt,
                                  ).toLocaleDateString()}
                                </CardDescription>
                              </CardHeader>
                              <CardFooter>
                                <Badge>{complaint.category}</Badge>
                                <Link
                                  href={`/complaints/${complaint.id}`}
                                  className="ml-auto"
                                >
                                  View Details
                                </Link>
                              </CardFooter>
                            </Card>
                          ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="communities">
          <Card>
            <CardHeader>
              <CardTitle>My Communities</CardTitle>
            </CardHeader>
            <CardContent>
              {communities.length === 0 ? (
                <p>You haven&apos;t created any communities yet.</p>
              ) : (
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {communities.map((community) => (
                    <Card key={community.id}>
                      <CardHeader>
                        <CardTitle className="text-lg">
                          {community.name}
                        </CardTitle>
                        <CardDescription>{community.platform}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="line-clamp-2">{community.description}</p>
                      </CardContent>
                      <CardFooter>
                        <Users2 className="mr-2 h-4 w-4" />
                        <span>{community.memberCount} members</span>
                        <Link
                          href={`/communities/${community.id}`}
                          className="ml-auto"
                        >
                          View Details
                        </Link>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
