import React from 'react'
import Image from './Image'
import TextBox from './TextBox'

class BlogItem extends React.Component {
  render () {
    const item = this.props.item
    return (
      <div>
        {/*
          Здесь все же деструктурируем, чтобы дважды
          не делать свойство name,
          которое должно идти в альт-текст
        */}
        <Image
          src={item.image.src}
          width={item.image.width}
          height={item.image.height}
          alt={item.name}
        />
        <br />
        <TextBox text={item.name} />
        <br />
        <TextBox text={item.title} />
        <br />
        <TextBox text={item.post} />
      </div>
    )
  }
}

export default BlogItem
