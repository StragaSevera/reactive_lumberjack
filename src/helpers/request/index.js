const baseURL = 'http://localhost:3001'
const basify = (url) => baseURL + url

export const postsPath = () => basify('/')
export const postPath = (id) => basify(`/posts/${id}`)
