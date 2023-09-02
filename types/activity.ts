export type TActivityType =
  | 'ballsport'
  | 'cycling'
  | 'golf'
  | 'gym'
  | 'martialarts'
  | 'run'
  | 'swim'
  | 'tennis'
  | 'walk'
  | 'yoga'

export type TBaseActivity<T extends TActivityType> = {
  activityType: T
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

export type TGolf = TBaseActivity<'golf'> & {
  holes?: number
  score?: number
}

export type TCycling = TBaseActivity<'cycling'> & {
  avgSpeed?: number
  distance?: number
}

export type TRun = TBaseActivity<'run'> & {
  distance?: number
  pace?: number
}

export type TWalk = TBaseActivity<'walk'> & {
  steps?: number
}

export type TWeather =
  'cloudy' | 'rainy' | 'sunny' | 'windy' | 'snowy' | 'thunderstorm'

export type TMood = 'horrible' | 'bad' | 'neutral' | 'good' | 'great'
