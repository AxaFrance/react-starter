import React from 'react';
import ReactDOM from 'react-dom';
import './polyfills';
import 'moment/locale/fr';

import '@axa-fr/react-toolkit-all/dist/style/bootstrap/grid.css';
import '@axa-fr/react-toolkit-all/dist/style/bootstrap/reboot.css';
import '@axa-fr/react-toolkit-core/dist/assets/fonts/icons/af-icons.css';
import '@axa-fr/react-toolkit-all/dist/style/af-components.css';

import { ContextProvider } from 'context/Context';
import App from 'layout/App';

ReactDOM.render(
  <ContextProvider>
    <App />
  </ContextProvider>,
  document.getElementById('root')
);
