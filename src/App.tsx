import React from 'react';
import './App.css';
import { BrowserRouter, Navigate, Outlet, Route, Routes } from 'react-router-dom';
import HomePage from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {

  const MainLayout = () => {
    return(
      <div className='MainLayout'>
        <Header/>
        <Outlet/>
        <Footer/>
      </div>
    )
  }
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout/>}>
            <Route path='/' element={<HomePage/>}/>
            <Route path='*' element={<Navigate to="/" replace/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
