import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  componentDidMount(){
    this.refs.sample.focus();
  }

  render() {
    return (
      <div>
          <input ref="sample"/>
        // we can add autoFocus attribute also
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
