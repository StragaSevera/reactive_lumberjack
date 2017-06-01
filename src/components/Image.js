import React from 'react'

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

export default Image
