import React from "react";
import { Link } from "react-router-dom";

const HomeNav = () =>{
    return(
        <>
        <div className="homeNav">
            <div className="homeNavHeader">
                <h1>Fine Words</h1>
            </div>
            <div className="homeLinks">
                <Link to = "/quotes" className="link">
                    <strong>Quotes</strong>
                </Link>
                <Link to = "/dialogues" className="link">
                    <strong>Dialogues</strong>
                </Link>
                <Link to = "/proverbs" className="link">
                    <strong>Proverbs</strong>
                </Link>
            </div>
        </div>
        </>
    )
}


export default HomeNav;