//@flow
import React, { Component, PropTypes } from 'react';
import {render} from 'react-dom';

class App extends Component {
  constructor() {
      super()
    }

  render(){
    return <div>
      <h1>EZ React</h1>
      <div>React has never been this easy. Just add this package as a dependency and you're good to go. It contains React, Webpack and ES2015 and is only 38KB gzipped.</div>
      <div>
        <h4>Instructions</h4>
        <p>
          1. Create a new folder
          </p><p>
          2. Type <strong>npm init</strong>
          </p><p>
          3. Type <strong>npm i --save ezreact</strong>
          </p><p>
          4. Success
        </p>
      </div>
      <div>
        Source: <a href="https://github.com/svenanders/ezreact">github.com/svenanders/ezreact</a>
      </div>
    </div>
  }
}

render(
  <App />,
  document.getElementById('app')
);
