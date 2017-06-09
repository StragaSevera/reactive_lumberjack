import React from 'react'
import PropTypes from 'prop-types'
import Image from './Image'
import TextBox from './TextBox'
import ItemMeta from './ItemMeta'
import Like from '../Like'

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
        <Like id={item.id} likeAction={this.props.likeAction}/>
        <br />
      </div>
    )
  }

  // Я правильно понимаю, что перепроверять то, что мы отправляем
  // в Image и ItemMeta, не стоит, ибо оно проверяется в них и так?
  static propTypes = {
    item: PropTypes.shape({
      image: PropTypes.object.isRequired,
      meta: PropTypes.object.isRequired,
      title: PropTypes.string.isRequired,
      post: PropTypes.string.isRequired,
    }),
    likeAction: PropTypes.func.isRequired
  }
}

export default BlogItem
