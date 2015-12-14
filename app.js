import React, { Component, PropTypes } from 'react'
import {render} from 'react-dom';

class App extends Component {
  constructor() {
      super()
    }

  render(){
    return <div>Hello</div>
  }
}

render(
  <App />,
  document.getElementById('app')
);
