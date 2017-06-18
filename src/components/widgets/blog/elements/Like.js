import React from 'react'
import PropTypes from 'prop-types'
import { Button } from 'semantic-ui-react'

const Like = ({likes, likeAction}) => {
  return (
    <Button
      color='blue'
      icon='heart'
      size='small'
      label={{
        basic: true,
        color: 'blue',
        pointing: 'left',
        content: likes
      }}
      onClick={likeAction}
    />
  )
}

Like.propTypes = {
  likeAction: PropTypes.func.isRequired,
  likes: PropTypes.number
}

export default Like
