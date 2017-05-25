import React from 'react'
import Image from './Image'
import TextBox from './TextBox'

class BlogItem extends React.Component {
  render () {
    return (
      <div>
        <Image
          src={this.props.src}
          width={this.props.width}
          height={this.props.height}
          alt={this.props.name}
        />
        <br />
        <TextBox text={this.props.name} />
        <br />
        <TextBox text={this.props.title} />
        <br />
        <TextBox text={this.props.post} />
      </div>
    )
  }
}

export default BlogItem
