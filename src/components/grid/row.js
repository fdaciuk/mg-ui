'use strict'

import React, { PropTypes as t } from 'react'
import { Column } from './column'

const Row = ({ className, children, ...props }) => (
  <div className={`row ${className}`} {...props}>
    {children}
  </div>
)

Row.defaultProps = {
  className: ''
}

const columnType = t.shape({ type: t.oneOf([Column]) })

Row.propTypes = {
  children: t.oneOfType([
    columnType,
    t.arrayOf(columnType)
  ]).isRequired,
  className: t.string
}

export { Row }
