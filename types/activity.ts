export type TActivityId =
  | 'ballsport'
  | 'cycling'
  | 'default'
  | 'golf'
  | 'martialArts'
  | 'run'
  | 'strength'
  | 'swim'
  | 'walk'
  | 'workout'
  | 'yoga'

export type TActivity = TActivityDefault | TGolf | TCycling | TRun | TSwim | TWalk

type TActivityBaseData = {
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
  type: TActivityId
  userId: string
}

export type TActivityDefault = TActivityBase & {
  data: TActivityBaseData
}

export type TCycling = TActivityBase & {
  data: TActivityBaseData & {
    distance?: number
  }
}

export type TGolf = TActivityBase & {
  data: TActivityBaseData & {
    holes?: number
    score?: number
  }
}

export type TRun = TActivityBase & {
  data: TActivityBaseData & {
    distance?: number
  }
}

export type TSwim = TActivityBase & {
  data: TActivityBaseData & {
    distance?: number
  }
}

export type TWalk = TActivityBase & {
  data: TActivityBaseData & {
    distance?: number
    steps?: number
  }
}

export type TWeather =
  'cloudy' | 'rainy' | 'sunny' | 'windy' | 'snowy' | 'thunderstorm' | 'mixed'

export type TMood = 'terrible' | 'bad' | 'neutral' | 'good' | 'great'

export type TActivityData = Record<string, {
  icon: string
  id: TActivityId
  newActivityTitle: string
  name: string
}>
