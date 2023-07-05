import type { TActivityType, TActivity } from "../../types/activity"
import type { TUser } from "../../types/user"

import { IconActivity } from "../IconActivity"
import { ThumbFilled } from "../icons/ThumbFilled"
import { ThumbOutlined } from "../icons/ThumbOutlined"
import { Comment } from "../icons/Comment"

import "./CardActivity.css"

type TProps = {
  activity: TActivity
  user: TUser
}

export function CardActivity(props: TProps) {
  const userInitials = props?.user?.name
    .split(/[ ,]+/)
    .map((name: string) => name[0])
    .join("")

  return (
    <div class="card-activity-container">
      <section>
        <header>
          <p class="avatar">{userInitials}</p>
          <div>
            <a href={props?.user?.url} class="username">
              {props?.user?.name ?? ""}
            </a>
            <p class="subtitle">
              {props?.activity?.date} · {props?.activity?.location}
            </p>
          </div>
        </header>

        <div class="body">
          <IconActivity
            style={{
              display: "inline-flex",
              "font-size": "2rem",
              "justify-content": "center",
            }}
            type={props?.activity?.activityType as TActivityType}
          />

          <div>
            <h2>
              <a href="#">{props?.activity?.title}</a>
            </h2>
            <p>{props?.activity?.description}</p>

            <ul>
              <li>
                <span>Time</span> {props?.activity?.duration}
              </li>
            </ul>
          </div>

          <img src="https://picsum.photos/500" />
        </div>

        <footer>
          <button type="button">4 likes</button>

          <div class="interactions">
            <button type="button">
              {false ? <ThumbFilled /> : <ThumbOutlined />}
              <span>Like</span>
            </button>
            <button type="button">
              <Comment />
              <span>Comment</span>
            </button>
          </div>
        </footer>
      </section>
    </div>
  )
}
