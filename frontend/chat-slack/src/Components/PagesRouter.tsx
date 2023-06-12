
import {
  BrowserRouter as Router,
  Switch,
  Route,
 }
from 'react-router-dom'

import { LoginPage } from './LoginPage'
import Header from './Header'
import { ErrorPage } from './ErrorPage'

export const PagesRouter = () => (
  <Router>
    <Header/>
      <main>
        <Switch>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="*">
            <ErrorPage />
          </Route>
        </Switch>
      </main>
  </Router>
)
