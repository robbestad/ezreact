//@flow
import React, { Component, PropTypes } from 'react';
import {render} from 'react-dom';

class App extends Component {
  constructor() {
      super()
    }

  render(){
    return <div>
      <h1>Minimal Webpack+React+Babel</h1>
      <div>This is the most minimalistic ReactJS config imaginable. It contains React, Webpack and ES2015 and is only 38KB gzipped.</div>
      <div> It also comes equipped with a ready-2-go express config.
      </div>
      <div>
        To use: download, install node modules and then <strong>npm start</strong>
      </div>
      <div>
        Source: <a href="https://github.com/svenanders/minimal-react">github.com/svenanders/minimal-react</a>
      </div>
      <h3>Stats</h3>
      <div>- Babel 6</div>
      <div>- React 0.14</div>
      <div>- Webpack</div>
      <div>Size: 38KB</div>
      <div>Demo: <a href="https://minimalreact.herokuapp.com/">minimalreact.herokuapp.com</a></div>
    </div>
  }
}

render(
  <App />,
  document.getElementById('app')
);
