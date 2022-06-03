import React from 'react'
import type { NextPage } from 'next'
import { css } from '@emotion/react'
const Test = css`
  color: red;
`

const Home: NextPage = () => {
  return (
    <>
      <div css={Test}>hoge</div>
    </>
  )
}

export default Home
