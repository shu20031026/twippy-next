import axios from 'axios'
import { tweetsObj } from '~/types/tweetDataTypes'

const twippyAxios = axios.create({
  baseURL: 'http://localhost:3000/api/proxy',
})

export const twippyApi = {
  fetchTweets: async (screenName: string) => {
    const data = await twippyAxios.get(`/tweets?name=${screenName}`)
    return data.data
  },
}
