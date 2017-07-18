import R from 'ramda'
import * as types from 'constants/actionTypes/PostsActionTypes'

const initialState = {
  isFetching: false,
  error: null,
  entries: []
}

export default function (state = initialState, action) {
  switch (action.type) {
    case types.FETCH_POSTS_REQUEST:
      return R.merge(initialState, { isFetching: true })
    case types.FETCH_POSTS_ERROR:
      return R.merge(initialState, { error: action.error })
    case types.FETCH_POSTS_SUCCESS:
      return R.merge(initialState, { entries: action.response })
    default:
      return state
  }
}
