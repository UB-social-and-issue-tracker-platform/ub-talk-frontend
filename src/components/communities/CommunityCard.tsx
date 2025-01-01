//TODO: Connect to various chat API's to get member counts

import { Community } from "@/redux/features/communitiesSlice"
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Edit, Trash2 } from "lucide-react"

interface CommunityCardProps {
  community: Community
  onEdit: () => void
  onDelete: () => void
}

export function CommunityCard({
  community,
  onEdit,
  onDelete,
}: CommunityCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          {community.name}
          <span className="text-sm font-normal text-muted-foreground">
            via {community.platform}
          </span>
        </CardTitle>
        <CardDescription>{community.description}</CardDescription>
      </CardHeader>
      <CardContent>
        {community.department && (
          <p className="text-sm text-muted-foreground">
            Department: {community.department}
          </p>
        )}
        <p className="text-sm text-muted-foreground">
          Members: {community.memberCount}
        </p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button asChild variant="outline">
          <a href={community.link} target="_blank" rel="noopener noreferrer">
            Join
            <ExternalLink className="ml-2 h-4 w-4" />
          </a>
        </Button>
        <div>
          <Button variant="ghost" size="icon" onClick={onEdit}>
            <Edit className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" onClick={onDelete}>
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
      </CardFooter>
    </Card>
  )
}
