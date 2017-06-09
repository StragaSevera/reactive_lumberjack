import React from 'react'
import PropTypes from 'prop-types'

const Like = ({id, likeAction}) => {
  return (
    <input type="button" onClick={likeAction(id)} value="like" />
  )
}

Like.propTypes = {
  id: PropTypes.number.isRequired,
  newline: PropTypes.func.isRequired
}

export default Like