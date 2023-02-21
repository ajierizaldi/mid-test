import {
  Router,
  Route
} from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import {
  Login,
  Register
} from './pages/Auth';
import {
  ProductList,
  ProductDetail
} from './pages/Product';

function App() {
  return (
    <Router>
      <Route path="/" component={Dashboard} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/products" component={ProductList} />
      <Route path="/product/:id" component={ProductDetail} />
    </Router>
  );
}

export default App;
