'use strict'

import React, { PropTypes as t } from 'react'
import { Row } from './row'

const Container = ({ className, children, ...props }) => (
  <div className={`container ${className}`} {...props}>
    {children}
  </div>
)

Container.defaultProps = {
  className: ''
}

const rowType = t.shape({ type: t.oneOf([Row]) })

Container.propTypes = {
  children: t.oneOfType([
    rowType,
    t.arrayOf(rowType)
  ]).isRequired,
  className: t.string
}

export { Container }
