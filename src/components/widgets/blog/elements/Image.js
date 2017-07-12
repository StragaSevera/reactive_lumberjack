import React from 'react'
import PropTypes from 'prop-types'
import { Image as SemanticImage } from 'semantic-ui-react'

const Image = ({src, width, height, alt}) => {
  return (
    <SemanticImage
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
