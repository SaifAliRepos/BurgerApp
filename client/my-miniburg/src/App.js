import './App.css';
import Burger from './components/Burger';
import Header from './components/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Order from './components/Order';
import ViewOrders from './components/ViewOrders';
import { PrivateRoutes } from './routes/PrivateRoutes';
import Login from './components/Login';

function App() {
  return (
    <div className='text-center'>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Burger />} />
          <Route path="/users/:user_id" element={<Burger />} />
          <Route path="/login" element={<Login />} />
          <Route path="/my_orders" element={<PrivateRoutes Component={ViewOrders} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
