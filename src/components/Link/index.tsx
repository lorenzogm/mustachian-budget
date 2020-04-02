import React from 'react'
import { Link as LinkReactRouterDom, LinkProps as LinkPropsReactRouterDom } from 'react-router-dom'
import LinkMUI, { LinkBaseProps } from '@material-ui/core/Link'

type LinkProps = LinkPropsReactRouterDom & LinkBaseProps

const Link: React.FC<LinkProps> = ({ children, ...rest }) => {
  return (
    <LinkMUI component={LinkReactRouterDom} {...rest}>
      {children}
    </LinkMUI>
  )
}

export default Link
