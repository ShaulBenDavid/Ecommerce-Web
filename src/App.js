import './App.css';
import Home from './components/routes/Home/Home.component';
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/routes/navigation/navigation.component';
import SignIn from './components/routes/sign-in/sign-in.component';


const App = () => {

  const Shop = () => {
    return <h1>Shop</h1>;
  }

  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />}/>
        <Route path='shop' element={<Shop />}/>    
        <Route path='sign-in' element={<SignIn />}/>    
      </Route>
    </Routes>
  );
}


export default App;
