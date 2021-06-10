/*
 * File: App.tsx
 * Author: Abdelmawla Souat
 * Email: abdelmawla.souat@gmail.com
 * -----
 * Created at: 2021-06-10 8:21:20 pm
 * Last Modified: 2021-06-10 11:32:27 pm
 * -----
 * Copyright (c) 2021 Yuei
 */

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import CountryDetails from './pages/CountryDetails';

export default function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/country/:name">
          <CountryDetails />
        </Route>
      </Switch>
    </Router>
  );
}
