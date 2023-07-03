export type TActivityType =
  | "ballsport"
  | "bike"
  | "climbing"
  | "golf"
  | "gym"
  | "martialarts"
  | "run"
  | "swim"
  | "tennis"
  | "walk"
  | "yoga"

export type TActivity = {
  activityType: TActivityType
  comments?: number
  date: string
  description?: string
  duration?: number
  id: string
  images?: string[]
  location?: string
  likes?: number
  title: string
  userId: string
}
