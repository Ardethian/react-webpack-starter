import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import Child from './containers/ChildContainer';

const App = (props) => {
  return (
    <div>
      <Child />
    </div>
  )
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
document.getElementById('index'));
