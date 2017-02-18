'use strict'

import React, { PropTypes as t } from 'react'

const Button = ({ href, children, kind, className, ...props }) => (
  React.createElement(
    href ? 'a' : 'button',
    {
      ...props,
      href,
      className: `button ${kind ? 'button-' + kind : ''} ${className}`
    },
    children
  )
)

Button.propTypes = {
  kind: t.oneOf(['outline', 'clear'])
}

export default Button
