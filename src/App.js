// App.js
import './App.css';
import { createContext, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Pages/Navbar';
import Home from './Pages/Home';
import Buy from './Pages/Buy';
import Rent from './Pages/Rent';
import Aboutus from './Pages/Aboutus';
import Blog from './Pages/Blog';
import Signin from './Pages/Signin';
import Signup from './Pages/Signup';
import Search from './Pages/Search';
import Nopage from './Pages/Nopage';
import Footer from './Pages/Footer';
import Profile from './Pages/Profile';

export const UserContext = createContext(null);

function App() {
  const isSigned = localStorage.getItem("userName") !== null;
  const [isAuth, setIsAuth] = useState(isSigned);
  const [userDetails, setUserDetails] = useState({
    username: localStorage.getItem("userName") || '',
  });
  
  const contextValue = { isAuth, setIsAuth, userDetails, setUserDetails };
  
  return (
    <UserContext.Provider value={contextValue}>
      <div>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/buy' element={<Buy />} />
            <Route path='/rent' element={<Rent />} />
            <Route path='/aboutus' element={<Aboutus />} />
            <Route path='/blog' element={<Blog />} />
            <Route path='/signin' element={<Signin />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/search' element={<Search />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='*' element={<Nopage />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </UserContext.Provider>
  );
}

export default App;
