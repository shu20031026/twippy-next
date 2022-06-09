import React, { useEffect, useState } from 'react'
import type { NextPage } from 'next'
import { useRecoilValue } from 'recoil'
import { tweetDataState } from '~/grobalStates/atoms'
import { tweetsObj } from '~/types/tweetDataTypes'
import Router from 'next/router'

const GamePage: NextPage = () => {
  const [fetchedTweetData, setFetchedTweetData] = useState<tweetsObj>()
  const [tweetNumber, setTweetNumber] = useState<number>(0)
  const [form, setForm] = useState<string>('')
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false)

  const tweetStateValue = useRecoilValue(tweetDataState)
  const questionNumber = tweetNumber + 1
  const tweets = tweetStateValue.tweets
  console.log(tweetStateValue)

  useEffect(() => {
    if (!tweetStateValue.name && !tweetStateValue.icon) {
      Router.push('/')
    }

    const f = async () => {
      try {
        const fetchedTweet: tweetsObj = await tweetStateValue
        setFetchedTweetData(fetchedTweet)
      } catch (e) {
        console.error(e)
      }
    }
    f()
  }, [])

  const judge = () => {
    if (form === tweets[tweetNumber]) {
      if (tweetNumber === tweets.length) {
        setIsOpenModal(true)
      } else {
        setTweetNumber((tweetNumber) => tweetNumber + 1)
        setForm('')
        console.log('Success')
      }
      console.log('Success')
    } else {
      console.log('failed')
    }
  }

  return (
    <>
      <div>
        <p>Twippy</p>
        <p>{questionNumber}問目</p>
        <p>秒</p>
      </div>
      <div>
        <div>
          <div>
            <img src={fetchedTweetData?.icon} alt="" />
          </div>
          <div>
            <p>{fetchedTweetData?.name}のツイート</p>
            <p>{tweets[tweetNumber]}</p>
          </div>
        </div>
        <div>
          <div>
            <img src={fetchedTweetData?.icon} alt="" />
          </div>
          <div>
            <p>{fetchedTweetData?.name}のツイート</p>
            <textarea
              placeholder={'入力してください'}
              value={form}
              onChange={(e) => {
                setForm(e.target.value)
              }}
            />
          </div>
        </div>
      </div>
      <div>
        <button onClick={() => judge()}>判定</button>
      </div>
    </>
  )
}

export default GamePage
