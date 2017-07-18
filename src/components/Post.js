import React from 'react'
import PropTypes from 'prop-types'

import { Item } from 'semantic-ui-react'
import BlogItem from 'components/widgets/blog/Item'

const Post = ({ item }) => (
  <Item.Group>
    {
      !!item &&
      (<BlogItem item={item}/>)
    }
  </Item.Group>
)

Post.propTypes = {
  item: PropTypes.object
}

export default Post
