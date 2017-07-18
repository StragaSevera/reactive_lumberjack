import axios from 'axios'

import * as types from 'constants/actionTypes/PostActionTypes'
import {postPath} from 'helpers/request'

const requestPost = (id) => ({
  type: types.FETCH_POST_REQUEST,
  id
})

const receivePost = (id, response) => ({
  type: types.FETCH_POST_SUCCESS,
  response,
  id
})

const errorPost = (id, error) => ({
  type: types.FETCH_POST_ERROR,
  error,
  id
})

export function fetchPost (id) {
  return (dispatch) => {
    dispatch(requestPost(id))

    return axios.get(postPath(id))
      .then((response) => dispatch(receivePost(id, response.data)))
      .catch((error) => dispatch(errorPost(id, error)))
  }
}
