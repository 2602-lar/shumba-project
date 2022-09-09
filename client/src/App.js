
import React,{useEffect} from "react";
import "./App.css";
import create_order from "./creating_order";
import Images_main from "./Dashboard_image";
import logo_pic from "./logo"
import show_orders from"./showrecipients"
import {useState} from "react";
import Axios from 'axios';

const App = () =>{
    const[user, setUser] = useState([])
    useEffect(() => {
        Axios.get('http://localhost:3001/api/getuser').then((response) => {
            setUser(response.data)
        })
    },[])
    return(
       <body>
            <header>
                
                    <blockquote>
                    <h1 align="center">
                        <strong>Wellcome to myShumbamoney dashbord</strong>
                    </h1>
                    {user.map((val)=>{
                    return(
                    <h1>User Id : {val.user_id}<br/> User Name : {val.user_name}{val.user_surname} </h1>
                    )})}

                    </blockquote>
               
            </header>
            <div>
                <div className = "dashbord">
                <section>{logo_pic()}</section>
                    
                </div>
                {create_order()}
                {show_orders()}

            </div>
       </body>
    );
}
export default App;