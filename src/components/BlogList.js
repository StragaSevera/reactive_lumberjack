import React from 'react'
import R from 'ramda'
import PropTypes from 'prop-types'
import BlogItem from './BlogItem'
import PieChart from './PieChart'

class BlogList extends React.Component {
  mapItems () {
    const items = this.props.items
    if (items) {
      return R.map(
        (item) => {
          return (
            <BlogItem 
              item={item}
              key={item.id}
              likeAction={this.props.likeAction(item.id)}
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
        <PieChart items={this.props.items}/>
      </div>
    )
  }

  static propTypes = {
    items: PropTypes.array,
    likeAction: PropTypes.func.isRequired
  }
}

export default BlogList
