import React, { ReactElement } from 'react'

type LayoutProps = Required<{
  readonly children: ReactElement
}>

export const Layout: React.VFC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <div>header</div>
      <div>
        <div>{children}</div>
      </div>
    </div>
  )
}
