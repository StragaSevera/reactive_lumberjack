import React from 'react'
import R from 'ramda'
import {lensMatching} from '~/vendor/ramda-extensions'
import {items} from '../../constants/static/items'

import { Grid, GridRow, GridColumn } from 'semantic-ui-react'
import List from './blog/List'
import PieChart from './blog/PieChart'

class BlogPage extends React.Component {
  constructor (props) {
    super(props)

    this.state = { items: items }
  }

  // Биндим при помощи transform-class-properties
  likeAction = (id) => {
    const lensId = lensMatching(R.propEq('id', id))
    const likeLens = R.compose(R.lensProp('items'), lensId, R.lensProp('likes'))

    return () => this.setState(R.over(likeLens, R.inc, this.state))
  }

  render () {
    return (
      <Grid columns={2}>
        <GridRow>
          <GridColumn width={8}>
            <List items={this.state.items} likeAction={this.likeAction}/>
          </GridColumn>
          <GridColumn width={4}>
            <PieChart items={this.state.items}/>
          </GridColumn>
        </GridRow>
      </Grid>
    )
  }
}

export default BlogPage
