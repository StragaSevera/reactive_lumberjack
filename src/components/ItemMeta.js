import React from 'react'
import TextBox from './TextBox'
import moment from 'moment'

class ItemMeta extends React.Component {
  formatDate (date) {
    return moment(date).format('D MMMM YYYY, H:mm:ss')
  }
  
  
  render () {
    const meta = this.props.meta
    return (
      <div>
        <TextBox text={meta.name} newline />
        <TextBox text={`Created: ${this.formatDate(meta.dateCreatedAt)}`} newline />
        {
          !!meta.dateUpdatedAt && meta.dateCreatedAt < meta.dateUpdatedAt && 
          ( <TextBox text={`Updated: ${this.formatDate(meta.dateUpdatedAt)}`} newline /> )
        }
        {
          !!meta.likes && meta.likes > 0 &&
          ( <TextBox text={`Likes: ${meta.likes}`} newline /> )
        }
      </div>
    )
  }
}

export default ItemMeta
