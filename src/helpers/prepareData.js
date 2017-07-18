import { parse } from 'qs'
import R from 'ramda'

export default function (store, state) {
  const {location, params, routes} = state

  const query = parse(location.search.substr(1))

  const prepareDataFns = R.reject(R.isNil, R.pluck('prepareData', routes))

  R.juxt(prepareDataFns)(store, query, params, location)
}
