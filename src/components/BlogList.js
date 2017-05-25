import React from 'react'
import R from 'ramda'
import BlogItem from './BlogItem'

class BlogList extends React.Component {
  mapItems () {
    const items = this.props.items
    if (items) {
      return R.addIndex(R.map)(
        (item, i) => {
          return (
            <BlogItem
              src={item.src}
              width={item.width}
              height={item.height}
              name={item.name}
              title={item.title}
              post={item.post}
              key={i}
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
}

export default BlogList
