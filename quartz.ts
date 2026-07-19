import { createElement } from "preact"
import type { JSX } from "preact"
import { componentRegistry } from "./quartz/components/registry"
import { loadQuartzConfig, loadQuartzLayout } from "./quartz/plugins/loader/config-loader"

type PanelIconComponent = (props: JSX.SVGAttributes<SVGSVGElement>) => JSX.Element

const BookIcon: PanelIconComponent = (props) =>
  createElement(
    "svg",
    { ...props, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.8 },
    createElement("path", { d: "M6 4.5A2.5 2.5 0 0 1 8.5 2H20v17h-11.5A2.5 2.5 0 0 0 6 21.5z" }),
    createElement("path", { d: "M6 4.5v17" }),
    createElement("path", { d: "M9 6h8" }),
  )

componentRegistry.setOptionOverrides("root-index-panels", {
  icons: { book: BookIcon },
  defaultIcon: "book",
})

const config = await loadQuartzConfig()
export default config
export const layout = await loadQuartzLayout()
