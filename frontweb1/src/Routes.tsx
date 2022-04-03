import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from 'pages/Home';
import Navbar from 'components/Navbar';
import Catalog from 'pages/Catalog';
import Admin from 'pages/Admin';
import ProductDetails from 'pages/ProductDetails';

const Routes = () => (
  <BrowserRouter>
    <Navbar />
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/Products" exact>
        <Catalog />
      </Route>

      <Route path="/Products/:productId">
        <ProductDetails />
      </Route>

      <Route path="/Admin">
        <Admin />
      </Route>
    </Switch>
  </BrowserRouter>
);
export default Routes;
