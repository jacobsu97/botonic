import React from 'react'
import { Message } from './message'
import { renderComponent } from '../utils'

export const WhatsappTemplate = props => {
  const renderBrowser = () => {
    let params = ''
    for (const param in props.parameters) {
      params = params + " '" + props.parameters[param] + "', "
    }
    // Return a dummy message for browser
    return (
      <Message {...props} type='text'>
        Template {props.name} would be send to the user with parameters:&quot;
        {params} and namespace {props.namespace}
      </Message>
    )
  }

  const renderNode = () => {
    let params = ''
    for (const param in props.parameters) {
      params = params + ', ' + props.parameters[param]
    }
    return (
      <Message {...props} type='text'>
        &[Fallback text]({props.namespace}, {props.name}
        {params})
      </Message>
    )
  }

  return renderComponent({ renderBrowser, renderNode })
}
