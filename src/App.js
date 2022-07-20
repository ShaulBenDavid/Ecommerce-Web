import Home from './routes/Home/Home.component';
import { Routes, Route } from 'react-router-dom';
import Navigation from './routes/navigation/navigation.component';
import Authentication from './routes/authentication/authentication.component';
import Shop from './routes/Shop/shop.component.jsx';
import Checkout from './routes/Checkout/Checkout.component.jsx';


const App = () => {

  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />}/>
        <Route path='shop/*' element={<Shop />}/>    
        <Route path='checkout' element={<Checkout />}/>    
        <Route path='auth' element={<Authentication />}/>    
      </Route>
    </Routes>
  );
}


export default App;
