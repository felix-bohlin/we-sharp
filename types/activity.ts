export type TActivityType =
  | 'ballsport'
  | 'cycling'
  | 'golf'
  | 'strength'
  | 'martialarts'
  | 'run'
  | 'swim'
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
  }
}

export type TSwim = TActivityBase & {
  data: TActivityData & {
    distance?: number
  }
}

export type TWalk = TActivityBase & {
  data: TActivityData & {
    distance?: number
    steps?: number
  }
}

export type TWeather =
  'cloudy' | 'rainy' | 'sunny' | 'windy' | 'snowy' | 'thunderstorm' | 'mixed'

export type TMood = 'terrible' | 'bad' | 'neutral' | 'good' | 'great'
