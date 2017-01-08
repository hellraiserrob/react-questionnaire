import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import store from '../store.jsx'

class TestComponent extends Component {
  render() { return (<div className="test" />) }
}

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Provider store={store}>
      <App><TestComponent /></App>
    </Provider>
  , div);
});
