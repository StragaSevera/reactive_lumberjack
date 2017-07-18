import axios from 'axios'

import * as types from 'constants/actionTypes/PostsActionTypes'
import {postsPath} from 'helpers/request'

const requestPosts = () => ({
  type: types.FETCH_POSTS_REQUEST
})

const receivePosts = (response) => ({
  type: types.FETCH_POSTS_SUCCESS,
  response
})

const errorPosts = (error) => ({
  type: types.FETCH_POSTS_ERROR,
  error
})

export function fetchPosts () {
  return (dispatch) => {
    dispatch(requestPosts())

    return axios.get(postsPath())
      .then((response) => dispatch(receivePosts(response.data)))
      .catch((error) => dispatch(errorPosts(error)))
  }
}
