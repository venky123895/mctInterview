
import './App.css';
import Header from './components/Header';
import ProductListing from './components/ProductListing';
import {Routes, Route } from "react-router-dom";
import PageNotFound from './components/PageNotFound';
import ProductDetails from './components/ProductDetails';
function App() {
  

  return (
    <div className="App">
      <Header/>
      <Routes>
      <Route path='/' element={<ProductListing/>}/>
      <Route path='/product' element={<ProductListing/>}/>
      <Route path='/product/:id' element={<ProductDetails/>}/>
      <Route path='/*' element={<PageNotFound/>}/>
      </Routes>
        
    </div>
  );
}

export default App;
