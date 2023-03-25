
import './App.css';
import Acomponent from './Components/Acomponent';
import { createContext, useState } from 'react';
import { useEffect } from 'react';
export const GlobalData=createContext();

function App() {
  const [data,shareData]=useState([]);
  useEffect(() => {
    getUserData();
  }, [])
  const [pass,passData]=useState([]);
async function getUserData(){
  const streamResponse=await fetch(`https://randomuser.me/api/?results=20`);
  const textResponse=await streamResponse.text();
  const jsonData=JSON.parse(textResponse);
  // console.log(jsonData)
  passData(jsonData)
}

  return (
    <div className="App">
      <GlobalData.Provider value={{data,shareData,pass,passData}}>
      <Acomponent/>
      </GlobalData.Provider>
    </div>
  );
}

export default App;
