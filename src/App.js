import './App.css';
import Navigation from './components/navigation_topbar/navigation';
import Cart from './screens/cart/cart';
import Home from './screens/home/home';
import ProductListing from './screens/plp/plp';
import Wishlist from './screens/wishlist/wishlist';
import LoginScreen from './screens/login/login';

function App() {
  return (
    <div className='App'>
      <Navigation />
      <Home />
      <ProductListing />
      <Cart />
      <Wishlist />
      <LoginScreen />
    </div>
  );
}

export default App;
