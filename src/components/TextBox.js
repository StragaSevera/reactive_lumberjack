import React from 'react'
import PropTypes from 'prop-types'

const TextBox = ({text, newline}) => {
  let result = ( <span>{text}</span> )
  if (newline) {
    result = ( <p>{result}</p> )
  }
  return result
}

TextBox.propTypes = {
  text: PropTypes.string.isRequired,
  newline: PropTypes.bool
}

export default TextBox
