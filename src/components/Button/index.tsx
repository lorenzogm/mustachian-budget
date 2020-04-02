import React from 'react'
import { Link as LinkReactRouterDom, LinkProps as LinkPropsReactRouterDom } from 'react-router-dom'
import ButtonMUI, { ButtonProps as ButtonPropsMUI } from '@material-ui/core/Button'

type ButtonProps = LinkPropsReactRouterDom & ButtonPropsMUI

const Button: React.FC<ButtonProps> = ({ children, to, ...rest }) => {
  if (to) {
    return (
      <ButtonMUI component={LinkReactRouterDom} to={to} {...rest}>
        {children}
      </ButtonMUI>
    )
  }

  return <ButtonMUI {...rest}>{children}</ButtonMUI>
}

export default Button
