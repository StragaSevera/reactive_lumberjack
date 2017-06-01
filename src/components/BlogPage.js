import React from 'react'
import BlogList from './BlogList'

import logo1 from './avatar_1.svg'
import logo2 from './avatar_2.png'
import logo3 from './avatar_3.png'

const items = [
  {
    id: 0,
    image: {src: logo1, width: 100},
    name: 'ReactJS Fan',
    title: 'ReactJS is awesome!',
    post: 'I think ReactJS can even cut web into clean logs!'
  },
  {
    id: 1,
    image: {src: logo2, height: 100},
    name: 'Ramda Newbie',
    title: 'I wanna try Ramda',
    post: 'Hello. I want to learn Functional Programming and advanced concepts like currying by using Ramda library. Is it a good idea?'
  },
  {
    id: 2,
    image: {src: logo3, height: 100},
    name: 'Wood Chopper',
    title: 'Chop-chop-chop!',
    post: 'Do you like to chop wood? I like it too! Let\'s chop together!'
  }
]

class BlogPage extends React.Component {
  constructor (props) {
    super(props)

    this.state = { items }
  }

  render () {
    return (<BlogList items={this.state.items} />)
  }
}

export default BlogPage
