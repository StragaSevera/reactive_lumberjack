import React from 'react'
import PropTypes from 'prop-types'

const Like = ({likeAction}) => {
  return (
    <input type="button" onClick={likeAction} value="like" />
  )
}

Like.propTypes = {
  likeAction: PropTypes.func.isRequired
}

export default Like