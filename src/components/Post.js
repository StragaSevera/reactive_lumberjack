import React from 'react'
import PropTypes from 'prop-types'
import {postsPath} from 'helpers/request'
import axios from 'axios'

import { Item } from 'semantic-ui-react'
import BlogItem from 'components/widgets/blog/Item'

class Post extends React.Component {
  constructor (props) {
    super(props)

    this.state = { item: null }
  }

  componentDidMount () {
    this.fetchPost()
  }

  fetchPost () {
    axios.get(postsPath(this.props.params.id))
      .then((res) => this.setState({item: res.data}))
      .catch((err) => console.log('HTTP error: ' + err))
  }

  render () {
    return (
      <Item.Group>
        {
          !!this.state && !!this.state.item &&
          (<BlogItem item={this.state.item}/>)
        }
      </Item.Group>
    )
  }
}

export default Post

Post.propTypes = {
  params: PropTypes.object
}
