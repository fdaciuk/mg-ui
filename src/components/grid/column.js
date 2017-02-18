'use strict'

import React, { PropTypes as t } from 'react'

const maybe = (value) => (prefix) => value ? prefix + value : ''

const Column = ({ className, size, offset, children, ...props }) => {
  const maybeSize = maybe(size)
  const maybeOffset = maybe(offset)
  const col = maybeSize('column-')
  const os = maybeOffset('column-offset-')
  const cssClass = `column ${col} ${os} ${className}`

  return (
    <div className={cssClass} {...props}>
      {children}
    </div>
  )
}

Column.defaultProps = {
  className: ''
}

const allowedSizes = [10, 20, 25, 33, 34, 50, 66, 67, 75, 80, 90]

Column.propTypes = {
  children: t.any,
  className: t.string,
  size: t.oneOf(allowedSizes),
  offset: t.oneOf(allowedSizes)
}

export { Column }
