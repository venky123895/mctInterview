import React from 'react'
import { useContext } from 'react'
import { GlobalData } from '../App'
const Dcomponent = () => {
    const {data}=useContext(GlobalData);
  return (
    <div>
       
        {
            data.results.map((ele)=>{
                return <p>{ele.name.first}</p>
            })
        }
    </div>
  )
}

export default Dcomponent