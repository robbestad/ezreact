import React, { Component, PropTypes } from 'react'
import {render} from 'react-dom';

class App extends Component {
  constructor() {
      super()
    }

  render(){
    return <div>
      <h1>Minimal Webpack+React+Babel</h1>
      <div>This is the most minimalistic ReactJS config imaginable. It contains React, Webpack and ES2015 and is only 37.7KB gzipped. It also comes equipped with a ready-2-go express config.
      </div>
      <div>
        To use: download, install node modules and then <strong>npm start</strong>
      </div>
      <div>
        Source: <a href="https://github.com/svenanders/minimal-react">github.com/svenanders/minimal-react</a>
      </div>
      </div>
  }
}

render(
  <App />,
  document.getElementById('app')
);
