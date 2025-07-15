import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ConfigProvider } from 'antd-mobile';
import enUS from 'antd-mobile/es/locales/en-US';
import { startVconsole } from './utils';
import Login from '@containers/Login';
import Register from '@containers/Register';
import App from '@containers/App';
import './index.css';
import { CxtProvider } from '@utils/context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CxtProvider>
      <BrowserRouter>
        <ConfigProvider locale={enUS}>
          <Routes>
            <Route path='/' element={<App />}>
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
            </Route>
          </Routes>
        </ConfigProvider>
      </BrowserRouter>
    </CxtProvider>
  </React.StrictMode>,
);

// startVconsole();