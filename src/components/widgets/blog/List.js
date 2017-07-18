import React from 'react'
import R from 'ramda'
import PropTypes from 'prop-types'
import Item from './Item'

import { List as SemanticList } from 'semantic-ui-react'

class List extends React.Component {
  mapItems () {
    const items = this.props.items
    if (items) {
      return R.map(
        (item) => {
          return (
            <Item
              item={item}
              key={item.id}
              likeAction={this.props.likeAction}
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
      <SemanticList divided={true}>
        {this.mapItems()}
      </SemanticList>
    )
  }

  static propTypes = {
    items: PropTypes.array.isRequired,
    likeAction: PropTypes.func
  }
}

export default List
