import React from 'react'
import ReactDOM from 'react-dom'
import R from 'ramda'
import PropTypes from 'prop-types'
import c3 from 'c3'
import Sticker from 'react-stickyfill'

import style from './PieChart.css'

class PieChart extends React.Component {
  componentDidMount () {
    this.chart = c3.generate({
      bindto: ReactDOM.findDOMNode(this.refs.chart),
      data: {
        columns: this.dataColumns(this.props.items),
        type: 'pie'
      }
    })
  }

  componentWillUnmount () {
    this.chart = this.chart.destroy()
  }

  componentWillReceiveProps (nextProps) {
    if (!R.equals(this.props, nextProps)) {
      this.chart.load({
        columns: this.dataColumns(nextProps.items)
      })
    }
  }

  dataColumns (items) {
    return R.map(
      (item) => [item.meta.name, item.likes],
      items
    )
  }

  render () {
    return (
      <Sticker>
        <div className={style.sticky}>
          <div ref="chart" />
        </div>
      </Sticker>
    )
  }

  static propTypes = {
    items: PropTypes.array.isRequired // без Shape, ибо на входе еще нет сгенерированного likeAction
  }
}

export default PieChart
