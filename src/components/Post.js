import React from 'react'
import PropTypes from 'prop-types'

import {items} from '~/src/constants/static/items'

import { Item } from 'semantic-ui-react'
import BlogItem from 'components/widgets/blog/Item'

const Post = ({params}) => (
  <Item.Group>
    <BlogItem item={items[params.id - 1]}/>
  </Item.Group>
)

export default Post

Post.propTypes = {
  params: PropTypes.object
}
