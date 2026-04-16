import Nevbar from './Component/Nevbar'
import Home from './Component/Home'
import { Route, Routes } from "react-router-dom";
import About from './Component/About';
import Shop from './Component/Shop';
import Login from './Page/Login';
import Footer from './Component/Footer';
import Register from './Page/Register';
import { useContext } from 'react';
import { AuthContext } from './Context/Contextapi';
import Nasted from './Page/Nasted';
import ProductDetail from './Component/ProductDetail';

const App = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className='bg-[#0d0d0d] h-screen'>

      {user && <Nevbar />}

      <Routes>
        <Route path='/' element={<Home />} />
       <Route path='/shop' element={<Shop />}>
       <Route path='nasted' element ={<Nasted/>}/>
       </Route> 
        <Route path='/about' element={<About />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/productdetail/:id' element={<ProductDetail/>}/>
      </Routes>

      {user && <Footer />}

    </div>
  )
}

export default App;