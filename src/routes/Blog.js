import MainLayout from '../components/layouts/MainLayout'
import BlogPage from '../components/widgets/BlogPage'

const Index = {
  path: '/',
  component: BlogPage
}

export default {
  component: MainLayout,
  childRoutes: [
    Index
  ]
}
