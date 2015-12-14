import React, { Component, PropTypes } from 'react'
import {render} from 'react-dom';

class App extends Component {
  constructor() {
      super()
    }

  render(){
    return <div>
      <h1>Minimal Webpack+React+Babel</h1>
      This is the most minimalistic ReactJS config imaginable. It contains React, Webpack and ES2015 and is only 37.7KB gzipped. It also comes equipped with a ready-2-go express config.
      </div>
  }
}

render(
  <App />,
  document.getElementById('app')
);
