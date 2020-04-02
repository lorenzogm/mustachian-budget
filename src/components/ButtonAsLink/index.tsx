import React from 'react'
import { Link, LinkProps } from 'react-router-dom'
import Button, { ButtonProps } from '@material-ui/core/Button'

type ButtonAsLinkProps = LinkProps & ButtonProps

const ButtonAsLink: React.FC<ButtonAsLinkProps> = ({ children, to, ...rest }) => {
  if (to) {
    return (
      <Button component={Link} to={to} {...rest}>
        {children}
      </Button>
    )
  }

  return <Button {...rest}>{children}</Button>
}

export default ButtonAsLink
