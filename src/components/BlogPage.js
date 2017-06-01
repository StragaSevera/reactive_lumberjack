import React from 'react'
import BlogList from './BlogList'

import logo1 from './avatar_1.svg'
import logo2 from './avatar_2.png'
import logo3 from './avatar_3.png'

const items = [
  {
    id: 0,
    image: {src: logo1, width: 100},
    meta: {name: 'ReactJS Fan', dateCreatedAt: new Date()},
    title: 'ReactJS is awesome!',
    post: 'I think ReactJS can even cut web into clean logs!'
  },
  {
    id: 1,
    image: {src: logo2, height: 100},
    meta: {
      name: 'Ramda Newbie', 
      dateCreatedAt: new Date("Jan 26 2015 16:32:44"), 
      dateUpdatedAt: new Date("Jan 26 2015 16:44:55")
    },
    title: 'I wanna try Ramda',
    post: 'Hello. I want to learn Functional Programming and advanced concepts like currying by using Ramda library. Is it a good idea?'
  },
  {
    id: 2,
    image: {src: logo3, height: 100},
    meta: {
      name: 'Wood Chopper', 
      dateCreatedAt: new Date("Jan 27 2015 5:06"),
      dateUpdatedAt: new Date("Jan 27 2015 4:06")
    },
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
