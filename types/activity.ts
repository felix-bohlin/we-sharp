export type TActivityType =
  | 'ballsport'
  | 'bike'
  | 'golf'
  | 'gym'
  | 'martialarts'
  | 'run'
  | 'swim'
  | 'tennis'
  | 'walk'
  | 'yoga'

export interface TActivity {
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

export type TWeather =
  'cloudy' | 'rainy' | 'sunny' | 'windy' | 'snowy' | 'thunderstorm'
