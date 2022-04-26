import './App.css';
import Home from './components/routes/Home/Home.component';
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/routes/navigation/navigation.component';


const App = () => {

  const Shop = () => {
    return <h1>Shop</h1>;
  }

  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />}/>
        <Route path='shop' element={<Shop />}/>    
      </Route>
    </Routes>
  );
}

export default App;
