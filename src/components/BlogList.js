import React from 'react'
import R from 'ramda'
import PropTypes from 'prop-types'
import BlogItem from './BlogItem'
import {lensMatching} from '../lib/ramda-extensions'

class BlogList extends React.Component {
  constructor (props) {
    super(props)
    
    this.state = R.clone(props)
  }
  
  // Биндим при помощи transform-class-properties
  likeItem = (id) => {
    return () => {
      const lensId = lensMatching(R.propEq('id', id))
      const likeLens = R.compose(R.lensProp('items'), lensId, R.lensPath(['meta', 'likes']))
      
      this.setState(R.over(likeLens, R.inc, this.state))
    }
  }
  
  mapItems () {
    const items = this.state.items
    if (items) {
      return R.map(
        (item) => {
          return (
            <BlogItem 
              item={R.merge(item, {likeAction: this.likeItem(item.id)})} 
              key={item.id} 
            />
          )
        },
        items
      )
    } else {
      return null
    }
  }
  render () {
    return (
      <div>
        {this.mapItems()}
      </div>
    )
  }

  static propTypes = {
    items: PropTypes.array
  }
}

export default BlogList
