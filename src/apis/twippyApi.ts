import axios from 'axios'

const twippyAxios = axios.create({
  baseURL: 'http://localhost:3000/api/proxy',
})

export const twippyApi = {
  fetchTweets: async (screenName: string) => {
    const data = await twippyAxios.get(`/tweets?name=${screenName}`)
    return data.data
  },
}
