import React, {useState, useEffect} from 'react'
import Preload from './Preload'
const Quotes = () =>{

    let [loading, setloading] = useState(true)
    let [quotes, setQuotes] = useState([])
  let getData = async() =>{
      let res = await fetch('https://finewordsapi.herokuapp.com/quotes')
      let data = await res.json();
    setQuotes(await data.quotes)
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
        <div className='quotesMain'>
           
            <div className='quotesContainer'>
                <h2>Quotes</h2>
                {
                    quotes.map((quote)=>{
                        return(
                            <>
                            <div className='quoteWrapper' key={quote.id}>
                                <div className='quoteHeader'>
                                    <img src = "./img/profilePic.jpg" alt = "profile"/>
                                    <strong >{quote.author}</strong>
                                </div>
                                <div className='quoteText'>
                            <p key={quote.id}>{quote.text}</p>
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

export default Quotes