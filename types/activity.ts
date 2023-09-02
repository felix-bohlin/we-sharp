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

export type TActivity = TActivityDefault | TGolf | TCycling | TRun | TSwim | TWalk

type TActivityData = {
  duration: number
  mood?: TMood
  weather?: TWeather
}

export type TActivityBase = {
  comments?: number
  date: string
  description?: string
  id: string
  images?: string[]
  likes?: number
  location?: string
  title: string
  type: TActivityType
  userId: string
}

export type TActivityDefault = TActivityBase & {
  data: TActivityData
}

export type TCycling = TActivityBase & {
  data: TActivityData & {
    distance?: number
  }
}

export type TGolf = TActivityBase & {
  data: TActivityData & {
    holes?: number
    score?: number
  }
}

export type TRun = TActivityBase & {
  data: TActivityData & {
    distance?: number
    pace?: number
  }
}

export type TSwim = TActivityBase & {
  data: TActivityData & {
    distance?: number
    pace?: number
  }
}

export type TWalk = TActivityBase & {
  data: TActivityData & {
    steps?: number
  }
}

export type TWeather =
  'cloudy' | 'rainy' | 'sunny' | 'windy' | 'snowy' | 'thunderstorm'

export type TMood = 'horrible' | 'bad' | 'neutral' | 'good' | 'great'
