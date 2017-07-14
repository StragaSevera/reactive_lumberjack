import React from 'react'
import Moment from 'moment'
import PropTypes from 'prop-types'
import TextBox from './TextBox'
import { DATE_DEFAULT_FORMAT } from 'constants/date'

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
      </div>
    )
  }

  static propTypes = {
    meta: PropTypes.shape({
      name: PropTypes.string.isRequired,
      dateCreatedAt: PropTypes.oneOfType([PropTypes.instanceOf(Date), PropTypes.string]).isRequired,
      dateUpdatedAt: PropTypes.oneOfType([PropTypes.instanceOf(Date), PropTypes.string])
    })
  }
}

export default ItemMeta
