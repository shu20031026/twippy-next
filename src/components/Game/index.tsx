import React from 'react'
import type { NextPage } from 'next'
import { useRecoilValue } from 'recoil'
import { tweetDataState } from '~/grobalStates/atoms'

const GamePage: NextPage = () => {
  const tweetData = useRecoilValue(tweetDataState)

  const Success = new Audio('success.mp3')
  const Miss = new Audio('miss.mp3')
  const Skip = new Audio('skip.mp3')
  const OpenModal = new Audio('openModal.mp3')

  return (
    <>
      <div>game</div>
      <div>{JSON.stringify(tweetData)}</div>
    </>
  )
}

export default GamePage
