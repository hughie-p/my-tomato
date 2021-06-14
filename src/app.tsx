import * as React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Layout from 'components/pages/layout';
import Root from 'components/pages/root';
import './app.scss';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Root>
        <Layout />
      </Root>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
