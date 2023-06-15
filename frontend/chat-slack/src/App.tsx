import {
  BrowserRouter, BrowserRouter as Router,
  Switch,
  Route,
 }
from 'react-router-dom'
import './App.css';
import { ErrorPage } from './pages/errorPage/ErrorPage';
import { LoginPage } from './pages/loginPage/LoginPage';


export function App() {
  return (
  <BrowserRouter>
    <Router>
      <main>
        <Switch>
          <Route path="/">
            <LoginPage />
          </Route>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="*/">
            <ErrorPage />
          </Route>
        </Switch>
      </main>
    </Router>
  </BrowserRouter>
  );
};


