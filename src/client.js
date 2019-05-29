import App from './App';
import { BrowserRouter} from 'react-router-dom';
import React from 'react';
import { render } from 'react-dom';

import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';

import { Provider } from 'react-redux';
import configureStore from './store'


// the initial state configured on the server is sent through
// the `window` object before the bundle to make sure it doesn't get blocked
const initialState = window.INITIAL_STATE || {};
// once this gets loaded in, garbage collect the old `window` state
delete window.INITIAL_STATE;

const store = configureStore(initialState);

render(
  <Provider store={store}>
    <I18nextProvider
      i18n={i18n}
      initialI18nStore={window.initialI18nStore}
      initialLanguage={window.initialLanguage}
    >
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </I18nextProvider>
  </Provider>,
  document.getElementById('root'),
);

if (module.hot) {
  module.hot.accept();
}
