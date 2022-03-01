import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from 'pages/Home';
import Navbar from 'components/Navbar';
import Catalog from 'pages/Catalog';
import Admin from 'pages/Admin';

const Routes = () => (
  <BrowserRouter>
    <Navbar />
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/Products">
        <Catalog />
      </Route>

      <Route path="/Admin">
        <Admin />
      </Route>
    </Switch>
  </BrowserRouter>
);
export default Routes;
