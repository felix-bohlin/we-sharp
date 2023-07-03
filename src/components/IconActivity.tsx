import type { JSX } from "solid-js/jsx-runtime"
import type { TActivityType } from "../types/activity"

import { Ballsport } from "./icons/Ballsport"
import { Climber } from "./icons/Climber"
import { Cycling } from "./icons/Cycling"
import { Dumbell } from "./icons/Dumbell"
import { Golf } from "./icons/Golf"
import { MartialArts } from "./icons/MartialArts"
import { Running } from "./icons/Running"
import { Swimming } from "./icons/Swimming"
import { Tennis } from "./icons/Tennis"
import { Walking } from "./icons/Walking"
import { Yoga } from "./icons/Yoga"

type TProps = {
  style?: JSX.CSSProperties
  type: TActivityType
}

export function IconActivity(props: TProps) {
  const icon = {
    ballsport: <Ballsport />,
    bike: <Cycling />,
    climbing: <Climber />,
    golf: <Golf />,
    gym: <Dumbell />,
    martialarts: <MartialArts />,
    run: <Running />,
    swim: <Swimming />,
    tennis: <Tennis />,
    walk: <Walking />,
    yoga: <Yoga />,
  }[props.type] || <Running />

  return (
    <span class="icon-activity" style={props.style || {}}>
      {icon}
    </span>
  )
}
