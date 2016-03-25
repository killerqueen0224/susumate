import React from 'react'
import Header from './header.jsx'
import Body from './body.jsx'

export default class Container extends React.Component {

  render() {
    return (
      <div id="contents">
        <Header />
        <Body />
      </div>
    );
  }
}
