import React from 'react'
import ButtonMUI, { ButtonProps as ButtonMUIProps } from '@material-ui/core/Button'

type ButtonProps = ButtonMUIProps

const Button: React.FC<ButtonProps> = ({ children, ...rest }) => {
  return <ButtonMUI {...rest}>{children}</ButtonMUI>
}

export default Button
