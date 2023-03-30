import React from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectedProduct,removeSelectedProduct } from '../redux/action'
const ProductDetails = () => {

    const{id}=useParams();
    const disatch=useDispatch()
    const product=useSelector((state)=>{
        return state.product
    })
    // console.log(product)
    const{image,title,price,category,description}=product
    // console.log("productDetails",product)
    const fetchProductDetails=async (id)=>{
        const respose=await axios.get(`https://fakestoreapi.com/products/${id}`).catch((err)=>{
            console.log("error",err)
        })
        
        disatch(selectedProduct(respose.data))
    }

    useEffect(() => {
     fetchProductDetails(id)
     return()=>{
        disatch(removeSelectedProduct());
     }
    }, [id])
    

  return (
    <div className='ui grid container'>
        {Object.keys(product).length===0 ? (
            <div>...Loading</div>
        ):(
            <div className='ui placeholder segment'>
            <div style={{
                display:"flex",
                justifyContent:"space-evenly"
            }} className='ui two column stackable center aligned grid'>
                <div className='ui vertcal divider'>AND</div>
                <div className='middle aligned row'>
                    <div className='column lp'>
                        <img src={image} className="ui fuid image" alt='xxx'/>
                    </div>

                </div>
                <div className='column rp'>
                    <h1>{title}</h1>
                    <h2>
                        <a className='ui teal tag label'>${price}</a>

                    </h2>
                    <h3 className='ui brown block header'>{category}</h3>
                    <p>{description}</p>
                    <div className='ui vertical animated button' tabIndex="0">
                        <div className='hidden content'>
                            <i className='shop icon'></i>
                        </div>
                        <div className='visible content'>Add to Cart</div>
                    </div>
                </div>
            </div>
        </div>
        )}

        
    </div>
  )
}

export default ProductDetails