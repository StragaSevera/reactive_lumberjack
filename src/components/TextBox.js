import React from 'react'

const TextBox = ({text, newline}) => {
  let result = ( <span>{text}</span> )
  if (newline) {
    result = ( <p>{result}</p> )
  }
  return result
}

export default TextBox
