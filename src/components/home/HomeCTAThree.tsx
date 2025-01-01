import Link from "next/link"
import { Button } from "../ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card"

const HomeCTAThree = () => {
  return (
    <section>
      <Card>
        <CardHeader>
          <CardTitle className="font-lora">Get Involved</CardTitle>
          <CardDescription className="font-expletusSans">
            Make your voice heard and contribute to the university community
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4 md:grid-cols-3">
          <Button asChild>
            <Link href="/complaints/new">Submit a Complaint</Link>
          </Button>
          <Button asChild>
            <Link href="/communities/new">Create a Community</Link>
          </Button>
          <Button asChild>
            <Link href="/students/profile">Update Your Profile</Link>
          </Button>
        </CardContent>
      </Card>
    </section>
  )
}
export default HomeCTAThree
