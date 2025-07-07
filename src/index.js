import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Register from './containers/Register';
import { startVconsole } from './utils';

import { ConfigProvider } from 'antd-mobile';
import enUS from 'antd-mobile/es/locales/en-US';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ConfigProvider locale={enUS}>
      <Register />
    </ConfigProvider>
  </React.StrictMode>,
);

startVconsole();