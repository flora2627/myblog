// SVG imports are transformed into React components by @svgr/webpack
// (see next.config.js). Declare the module so TypeScript resolves them.
declare module '*.svg' {
  import type { FC, SVGProps } from 'react'
  const content: FC<SVGProps<SVGSVGElement>>
  export default content
}
