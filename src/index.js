//@flow
import React, { Component, PropTypes } from 'react';
import {render} from 'react-dom';

class App extends Component {
  constructor() {
      super()
    }

  render(){
    return <div>
      <h1>Minimal Webpack + React + Babel + Hot reload</h1>
      <div>This is the most minimalistic ReactJS config imaginable. It contains React, Webpack and ES2015 and is only 38KB gzipped.</div>
      <div> It also comes equipped with a ready-2-go express config for both local dev and for publishing your public folder.
      </div>
      <div>
        To use: 
        <p>
          1. Run <strong>npm i</strong> to install
          </p><p>
          2. Run <strong>npm run dev</strong> to run dev server
          </p><p>
          3. View results in <strong>http://localhost:3000/</strong>
          </p><p>
          4. Success
        </p>
      </div>
      <div>
        Source: <a href="https://github.com/svenanders/minimal-react">github.com/svenanders/minimal-react</a>
      </div>
      <h3>Stats</h3>
      <p>- Babel 6</p>
      <p>- React 0.14</p>
      <p>- Webpack</p>
      <p>- Hot Reload</p>
      <p><strong>Production size: 38KB</strong></p>
      <p>Demo: <a href="https://minimalreact.herokuapp.com/">minimalreact.herokuapp.com</a></p>
    </div>
  }
}

render(
  <App />,
  document.getElementById('app')
);
