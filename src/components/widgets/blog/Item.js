import React from 'react'
import PropTypes from 'prop-types'
import { ListItem, Header } from 'semantic-ui-react'

import Image from './elements/Image'
import TextBox from './elements/TextBox'
import Meta from './elements/Meta'
import Like from './elements/Like'
import Link from 'components/elements/Link'
import { postsPath } from 'helpers/route/index'

import style from './Item.css'

const makeLikeAction = (id, likeAction) => {
  if (likeAction) {
    return likeAction(id)
  } else {
    return () => console.log(`Like called without action for item ${id}!`)
  }
}

const Item = ({item, likeAction}) => {
  return (
    <ListItem>
      <div className={style.flex}>
        <div className={style.meta}>
          <Image
            src={item.image.src}
            width={item.image.width}
            height={item.image.height}
            alt={item.meta.name}
          />
          <Meta meta={item.meta}/>
        </div>
        <div className={style.text}>
          <Header as='h3'>
            <Link to={postsPath(item.id)}>{item.title}</Link>
          </Header>
          <TextBox text={item.post} newline />
          <Like likes={item.likes} likeAction={makeLikeAction(item.id, likeAction)}/>
        </div>
      </div>
    </ListItem>
  )
}

Item.propTypes = {
  item: PropTypes.shape({
    image: PropTypes.shape(Image.propTypes).isRequired,
    meta: PropTypes.shape(Meta.propTypes).isRequired,
    likes: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    post: PropTypes.string.isRequired
  }),
  likeAction: PropTypes.func // не Required, ибо проблемы с Post
}

export default Item
