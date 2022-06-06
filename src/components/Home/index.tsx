import React, { useState } from 'react'
import type { NextPage } from 'next'
import { twippyApi } from '~/apis/twippyApi'
import { tweetsObj } from '~/types/tweetDataTypes'

const HomePage: NextPage = () => {
  const [tweetsData, setTweetsData] = useState<tweetsObj>()
  const MOCK_USER = 'fukke0906'

  const fetchUserData = async (screenName: string) => {
    try {
      const fetchData = await twippyApi.fetchTweets(screenName)
      setTweetsData(fetchData)
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
        <div>入力フォーム</div>
        <button onClick={() => fetchUserData(MOCK_USER)}>ゲーム開始</button>
        <div>{JSON.stringify(tweetsData)}</div>
      </div>
    </>
  )
}

export default HomePage
