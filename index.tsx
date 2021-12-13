import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';

import Home from './pages/Home/Home';

interface AppProps { }
interface AppState {
  name: string;
}

class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>        
        <Home />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
