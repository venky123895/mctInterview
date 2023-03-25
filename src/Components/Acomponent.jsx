import React from 'react'
import Bcomponent from './Bcomponent'
import './acomp.css'
import { useContext } from 'react';
import { GlobalData } from '../App';
const Acomponent = () => {
    const{data,shareData,pass,passData}=useContext(GlobalData);
  return (
    <div className='main'>
        <button className='button' onClick={()=>{
            shareData(pass)
        }}>Send</button>
        <Bcomponent/>
    </div>
  )
}

export default Acomponent