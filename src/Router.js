import React from 'react'
import { HashRouter, Match, Link } from 'react-router'

import AppMiddleware from './AppMiddleware';
import AppObservable from './AppObservable';

const Page = ({ title, children }) => (
  <div>
    <h2>{title}</h2>
    {children}
  </div>
)

export default () => (
  <HashRouter>
    <div>
      <ul>
        <li><Link to="/middleware">middleware</Link></li>
        <li><Link to="/observable">observable</Link></li>
      </ul>
      <div>
        <Match pattern="/middleware" render={ () =>
          <Page title="Middleware Pattern"><AppMiddleware /></Page>
        } />
        <Match pattern="/observable" render={ () =>
          <Page title="Observable Pattern"><AppObservable /></Page>
        } />
      </div>
    </div>
  </HashRouter>
)