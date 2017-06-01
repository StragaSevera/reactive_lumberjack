import React from 'react'
import Image from './Image'
import TextBox from './TextBox'
import ItemMeta from './ItemMeta'

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
          alt={item.meta.name}
        />
        <ItemMeta meta={item.meta}/>
        <TextBox text={item.title} newline />
        <TextBox text={item.post} newline />
      </div>
    )
  }
}

export default BlogItem
