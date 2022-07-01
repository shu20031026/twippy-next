import React, { useState } from 'react'
import type { NextPage } from 'next'
import { twippyApi } from '~/apis/twippyApi'
import { tweetsObj } from '~/types/tweetDataTypes'
import { useSetRecoilState } from 'recoil'
import { tweetDataState } from '~/grobalStates/atoms'
import Link from 'next/link'
import { useRouter } from 'next/router'

const HomePage: NextPage = () => {
  const [userName, setUserName] = useState<string>('')
  const setTweetData = useSetRecoilState<tweetsObj>(tweetDataState)
  const router = useRouter()

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

  const certification = async () => {
    try {
      await fetchUserData(userName)
      router.replace('/game')
    } catch (e) {
      console.error(e)
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
        <button onClick={() => certification()}>ゲーム開始</button>
      </div>
    </>
  )
}

export default HomePage
