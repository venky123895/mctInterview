import React, { useEffect } from 'react'
// import { useSelector } from 'react-redux'
import ProductComponent from './ProductComponent';
import { useDispatch } from 'react-redux';
import { setProducts } from '../redux/action';
import axios from "axios"

const ProductListing = () => {
    
    const dispatch=useDispatch();
    // console.log("products",products.productReducer.products)

    const fetchProducts= async ()=>{
         const response=await axios.get("https://fakestoreapi.com/products").catch((err)=>{
            console.log("error",err)
         })
         dispatch(setProducts(response.data))
    }
    
    useEffect(() => {
     fetchProducts()
    })
    
  return (
    <div className='ui grid four column container'>
        <ProductComponent/>
    </div>
  )
}

export default ProductListing