import MainLayout from 'components/layouts/MainLayout'

import { postsPath } from 'helpers/route'
import PostsContainer from 'containers/PostsContainer'
import PostContainer from 'containers/PostContainer'

import { fetchPosts } from 'actions/Posts'
import { fetchPost } from 'actions/Post'

const Index = {
  path: '/',
  component: PostsContainer,
  prepareData: (store) => {
    store.dispatch(fetchPosts())
  }
}

const PostRoute = {
  path: postsPath(),
  component: PostContainer,
  prepareData: (store, query, params) => {
    store.dispatch(fetchPost(params.id))
  }
}

export default {
  component: MainLayout,
  childRoutes: [
    Index,
    PostRoute
  ]
}
