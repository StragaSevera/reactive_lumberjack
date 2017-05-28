import React from 'react'
import R from 'ramda'
import BlogItem from './BlogItem'

class BlogList extends React.Component {
  mapItems () {
    const items = this.props.items
    if (items) {
      return R.map(
        (item) => {
          return (
            <BlogItem item={item} key={item.id} />
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
}

export default BlogList
