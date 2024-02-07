import 'bootstrap/dist/css/bootstrap.css';

import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import { thunk } from 'redux-thunk';

import App from './App';
import rootReducer from './components/reducers/reducers';

import './index.scss';

const store = applyMiddleware(thunk)(createStore);

const container = document.getElementById('root')!;

export const storeReducer = store(rootReducer);

const root = createRoot(container);

root.render(
  <Provider store={storeReducer}>
    <App />
  </Provider>
);
