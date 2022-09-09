import React, { useEffect } from 'react';
import "./App.css";
import {useState} from "react";
import Axios from 'axios';


function show_orders(){
    
    const[deluporder_number,setDelorder_num] = useState(0)
    
    const delete_order = ()=>{
        Axios.put('http://localhost:3001/delete', {
            deluporder_number: deluporder_number
        }).then(()=>{console.log("success")})
    }

    const[orders, setOrders] = useState([])
    useEffect(() => {
        Axios.get('http://localhost:3001/api/getorders').then((response) => {
            setOrders(response.data)
        })
    },[])
    return(
        <section className='orders'>
            <h2>Orders</h2>
            <div>
                {orders.map((val)=>{
                    return(
                        <table width="1200px" border="2">
                        <tbody>
                          <tr>
                            <th scope="col">order_num</th>
                            <th scope="col">recipient_name</th>
                            <th scope="col">recipient_surname</th>
                            <th scope="col">recipient_id_number</th>
                            <th scope="col">phone_number</th>
                            <th scope="col">destination_country</th>
                            <th scope="col">currency</th>
                            <th scope="col">amount</th>
                          </tr>
                          <tr>
                            <td>{val.order_id}</td>
                            <td>{val.recipient_name}</td>
                            <td>{val.recipient_surname}</td>
                            <td>{val.national_id}</td>
                            <td>{val.phone_number}</td>
                            <td>{val.destination_country}</td>
                            <td>{val.currency}</td>
                            <td>{val.amount}</td>
                             
                          </tr>
                        </tbody>
                  </table>
                    )
                })}


                <table width="200" border="0">
                    <tbody>
                        <tr>
                            <td><input type = "text" placeholder='Order id'
                            onChange = {
                                        (event) =>{setDelorder_num(event.target.value);
                                        }}
                            />
                            </td>
                        </tr>
                        
                        <tr>
                            <td>
                                <button onClick={delete_order}>Delete order</button>
                            </td>
                            
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    )
}
export default show_orders;