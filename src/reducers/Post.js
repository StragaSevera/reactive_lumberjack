import R from 'ramda'
import * as types from 'constants/actionTypes/PostActionTypes'

const initialState = {
  isFetching: false,
  error: false,
  entry: null
}

export default function (state = initialState, action) {
  switch (action.type) {
    case types.FETCH_POST_REQUEST:
      return R.merge(initialState, { isFetching: true })
    case types.FETCH_POST_ERROR:
      return R.merge(initialState, { error: true })
    case types.FETCH_POST_SUCCESS:
      return R.merge(initialState, { entry: action.response })
    default:
      return state
  }
}
