import React, { useState } from 'react'
import type { NextPage } from 'next'
import { twippyApi } from '~/apis/twippyApi'
import { tweetsObj } from '~/types/tweetDataTypes'
import { useSetRecoilState } from 'recoil'
import { tweetDataState } from '~/grobalStates/atoms'
import Link from 'next/link'

const HomePage: NextPage = () => {
  const [userName, setUserName] = useState<string>('')
  const setTweetData = useSetRecoilState<tweetsObj>(tweetDataState)

  const fetchUserData = async (screenName: string) => {
    try {
      const fetchData = await twippyApi.fetchTweets(screenName)
      setTweetData(fetchData)
      console.log(fetchData)
    } catch (e) {
      console.log(e)
      window.alert(
        'ユーザーが確認できませんでした。スクリーンネームが間違っていないか再度確認してください',
      )
    }
  }

  return (
    <>
      <div>
        <div>
          <h1>Twippy</h1>
        </div>
        <div>description</div>
        <input
          onChange={(e) => {
            setUserName(e.target.value)
          }}
        />
        <button onClick={() => fetchUserData(userName)}>ゲーム開始</button>
        <Link href="/game">
          <button>/geme</button>
        </Link>
      </div>
    </>
  )
}

export default HomePage
