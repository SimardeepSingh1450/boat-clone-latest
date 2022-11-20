import {BrowserRouter as Router,Route,Routes,Link} from 'react-router-dom';
import Shop from './pages/Shop';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import './App.css';
import Successfulpayment from './pages/Successfulpayment';
import PaymentFailure from './pages/PaymentFailure';
// import Paypal from './components/Paypal';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        {/* <Route exact path='/cart/PaypalGateway' element={<Paypal/>}/> */}
        <Route exact path="/login" element={<Login/>}/>
        <Route exact path="/success" element={<Successfulpayment/>}/>
        <Route exact path="/cancel" element={<PaymentFailure/>}/>
        <Route exact path="/cart/:email" element={<Cart/>}/>
        <Route exact path="/shop" element={<Shop/>}/>
        <Route exact path="/register" element={<Register/>}/>
      </Routes>
    
    </div>
  );
}

export default App;
