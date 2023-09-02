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

export type TActivity = {
  activityType: TActivityType
  comments?: number
  date: string
  description?: string
  duration?: number
  id: string
  images?: string[]
  likes?: number
  location?: string
  mood?: TMood
  title: string
  userId: string
  weather?: TWeather
}

export type TWeather =
  'cloudy' | 'rainy' | 'sunny' | 'windy' | 'snowy' | 'thunderstorm'

export type TMood = 'horrible' | 'bad' | 'neutral' | 'good' | 'great'
