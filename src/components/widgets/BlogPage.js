import React from 'react'
import BlogList from './blog/List'
import R from 'ramda'
import {lensMatching} from '~/vendor/ramda-extensions'

import {items} from '../../constants/static/items'

class BlogPage extends React.Component {
  constructor (props) {
    super(props)

    this.state = { items: items }
  }

  // Биндим при помощи transform-class-properties
  likeAction = (id) => {
    const lensId = lensMatching(R.propEq('id', id))
    const likeLens = R.compose(R.lensProp('items'), lensId, R.lensPath(['meta', 'likes']))

    return () => this.setState(R.over(likeLens, R.inc, this.state))
  }

  render () {
    return (<BlogList items={this.state.items} likeAction={this.likeAction}/>)
  }
}

export default BlogPage
