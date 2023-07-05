import { CardActivity } from "../../components/CardActivity/CardActivity"
import { LayoutDefault } from "../../layouts/LayoutDefault"
import "./Feed.css"

export function Feed() {
  return (
    <LayoutDefault>
      <div class="card-list">
        <CardActivity
          activity={{
            activityType: "bike",
            comments: 4,
            description:
              "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.",
            duration: 30,
            location: "Stockholm",
            likes: 4,
            date: "08:30",
            title: "Morning run",
          }}
          user={{
            imageUrl: "",
            name: "Felix Bohlin",
            profileUrl: "#",
          }}
        />
        <CardActivity
          activity={{
            activityType: "tennis",
            comments: 4,
            description:
              "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.",
            duration: 30,
            location: "Stockholm",
            likes: 4,
            date: "08:30",
            title: "Morning run",
          }}
          user={{
            imageUrl: "",
            name: "Felix Bohlin",
            profileUrl: "#",
          }}
        />
      </div>
    </LayoutDefault>
  )
}
