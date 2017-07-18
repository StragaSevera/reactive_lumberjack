import React from 'react'
import PropTypes from 'prop-types'

import { Grid, GridRow, GridColumn } from 'semantic-ui-react'
import List from './widgets/blog/List'
import PieChart from './widgets/blog/PieChart'

const BlogPage = ({items}) => (
  <Grid columns={2}>
    <GridRow>
      <GridColumn width={8}>
        <List items={items} />
      </GridColumn>
      <GridColumn width={4}>
        <PieChart items={items}/>
      </GridColumn>
    </GridRow>
  </Grid>
)

BlogPage.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default BlogPage
