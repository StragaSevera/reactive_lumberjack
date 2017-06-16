import React from 'react'
import Moment from 'moment'
import PropTypes from 'prop-types'
import TextBox from './TextBox'
import { DATE_DEFAULT_FORMAT } from '~/src/constants/date'

class ItemMeta extends React.Component {
  formatDate (date) {
    return Moment(date).format(DATE_DEFAULT_FORMAT)
  }

  render () {
    const meta = this.props.meta
    return (
      <div>
        <TextBox text={meta.name} newline />
        <TextBox text={`Created: ${this.formatDate(meta.dateCreatedAt)}`} newline />
        {
          !!meta.dateUpdatedAt && meta.dateCreatedAt < meta.dateUpdatedAt &&
          (<TextBox text={`Updated: ${this.formatDate(meta.dateUpdatedAt)}`} newline />)
        }
        {
          !!meta.likes && meta.likes > 0 &&
          (<TextBox text={`Likes: ${meta.likes}`} newline />)
        }
      </div>
    )
  }

  static propTypes = {
    meta: PropTypes.shape({
      name: PropTypes.string.isRequired,
      dateCreatedAt: PropTypes.instanceOf(Date).isRequired,
      dateUpdatedAt: PropTypes.instanceOf(Date),
      likes: PropTypes.number.isRequired
    })
  }
}

export default ItemMeta
