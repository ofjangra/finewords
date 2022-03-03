import React, {useState, useEffect} from "react";
import Preload from "./Preload";
const Dialogues = () =>{
    let [dialogues, setDialogues] = useState([])
    let [loading, setloading] = useState(true)
    let getData = async () =>{
        let res = await fetch("https://finewordsapi.herokuapp.com/dialogues");
        setDialogues(await res.json())
        setloading(false)
    }
useEffect(() =>{
    getData()
})

if(loading){
    return(
        <Preload/>
    )
}
else{
    return(
        <div className='dialoguesMain'>
           
            <div className='dialoguesContainer'>
                <h2>Dialogues</h2>
                {
                    dialogues.map((dialogue)=>{
                        return(
                            <>
                            <div className='dialogueWrapper' key={dialogue.id}>
                                <div className='dialogueHeader'>
                                    <img src = './img/profilePic2.png' alt = "profile/"/>
                                    <strong >{dialogue.character}, {dialogue.series}</strong>
                                </div>
                                <div className='dialogueText'>
                            <p key={dialogue.id}>{dialogue.text}</p>
                            </div>
                            </div>
                            </>
                        )
                    })
                }
            </div>
        </div>
    )
            }
}

export default Dialogues