import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { startVconsole } from './utils';

import { ConfigProvider } from 'antd-mobile';
import enUS from 'antd-mobile/es/locales/en-US';
import Login from '@containers/Login';
import Register from '@containers/Register';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ConfigProvider locale={enUS}>
      {/* <Register /> */}
      <Login />
    </ConfigProvider>
  </React.StrictMode>,
);

// startVconsole();