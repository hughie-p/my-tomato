import * as React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from 'contexts/auth';
import Layout from 'components/pages/layout';
import Root from 'components/pages/root';
import './app.scss';

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <Root>
          <Layout />
        </Root>
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
