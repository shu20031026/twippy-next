import { atom } from 'recoil'
import { tweetsObj } from '~/types/tweetDataTypes'

export const tweetDataState = atom<tweetsObj>({
  key: 'dataState',
  default: { name: '', screenName: '', icon: '', tweets: [''] },
})
