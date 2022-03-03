import React, {useState, useEffect} from "react";
import Preload from "./Preload";

const Proverbs = () =>{

    
    let [proverbs, setProverbs] = useState([])

    let [loading, setloading] = useState(true)


  let getData = async() =>{
      let res = await fetch('https://finewordsapi.herokuapp.com/proverbs')
      let data = await res.json();
    setProverbs(data)
    setloading(false)


    
  }
  
  useEffect(()=>{
      getData();

  }, [1])

  if(loading){
      return(
          <Preload/>
      )
  }
  else{

  
    return(
        <>
         <div className='proverbsMain'>
           
           <div className='proverbsContainer'>
               <h2>Proverbs</h2>
               {
                   proverbs.map((proverb)=>{
                       return(
                           <>
                           <div className='proverbWrapper' key={proverb.id}>
                              
                               <div className='proverbText'>
                           <p key={proverb.id}>{proverb.text}</p>
                           </div>
                           <div className='proverbFooter'>
                                   <strong >~{proverb.origin}</strong>
                               </div>
                           </div>
                           </>
                       )
                   })
               }
           </div>
       </div>
        </>
    )
            }
}

export default Proverbs