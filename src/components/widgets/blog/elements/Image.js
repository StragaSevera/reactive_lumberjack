import React from 'react'
import PropTypes from 'prop-types'

const Image = ({src, width, height, alt}) => {
  return (
    <img
      src={src}
      width={width}
      height={height}
      alt={alt}
      title={alt}
    />
  )
}

Image.propTypes = {
  src: PropTypes.string.isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
  alt: PropTypes.string
}

export default Image
