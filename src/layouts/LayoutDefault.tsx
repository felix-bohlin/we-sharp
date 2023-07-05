import type { Component, JSXElement } from "solid-js"

type TProps = {
  children?: JSXElement
  description?: string
  title?: string
}

export const LayoutDefault: Component<TProps> = (props) => (
  <main>{props?.children ?? null}</main>
)
