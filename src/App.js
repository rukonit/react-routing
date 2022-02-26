import {Redirect, Route, Switch} from 'react-router-dom'
import Products from './components/Products';
import Welcome from './components/Welcome';
import Header from './components/Header';
import ProductDetails from './components/ProductDetails';
function App() {
  return (
    <div>
      <Header />
      <main>
        <Switch>
      <Route path='/' exact>
        <Redirect to="/welcome" ></Redirect>
      </Route>
      <Route path="/welcome" >
        <Welcome />
     </Route>
     <Route path="/products" exact>
        <Products />
     </Route>
     <Route path="/products/:productId" >
        <ProductDetails />
     </Route>
     </Switch>
      </main>
   
    </div>
  );
}

export default App;
