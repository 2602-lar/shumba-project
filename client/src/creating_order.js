import React from 'react';
import "./App.css";
import {useState} from "react";
import Axios from 'axios';

var ordernumber = 1

function create_order(){
    ordernumber = ordernumber + 1
    
    const [order_num, setOrder_num] = useState(0);
    const [recipient_name, setRecipient_name] = useState("");
    const [recipient_surname, setRecipient_surname] = useState("");
    const [recipient_id_no, setRecipient_id_no] = useState("");
    const [phone_number, setPhone_number] = useState(0);
    const [dest_country, setDest_country] = useState("");
    const [address, setAddress] = useState("");

    const [sender_name, setSender_name] = useState("");
    const [sender_id, setSender_Id] = useState("");
    const [source_country, setSource_country] = useState("")

    const [currency, setCurrency] = useState("");
    const [amount, setAmount] = useState(0);
    const [name_of_bank, setName_of_bank] = useState("");
    const [bank_acc_number, setBank_acc_number] = useState(0);

    const make_order= () =>{
        ordernumber = ordernumber + 1
        Axios.post('http://localhost:3001/create', {
            order_num: order_num,
            recipient_name: recipient_name,
            recipient_surname: recipient_surname,
            recipient_id_no: recipient_id_no,
            phone_number: phone_number,
            dest_country: dest_country,
            address: address,
            sender_name: sender_name,
            sender_id: sender_id,
            source_country: source_country,
            currency: currency,
            amount: amount,
            name_of_bank: name_of_bank,
            bank_acc_number: bank_acc_number
        }).then(() => {
            console.log("success")
        });
    }
    return(
        <form>
            <section width="75%" className='createorder'>
                <h2>Create Order</h2>
                <hr/>
                <lable>Oder Number : </lable>
                <input type="Number" value = {ordernumber} onChange = {
                    (event) =>{setOrder_num(event.target.value);
                    }}
                />
                <hr/>
                <div className = "recipient">
                    <h2>Recipient Details</h2>
                    <table>
                        <tr>
                            <td>
                                <lable>Recipient Name : </lable>
                            </td>
                            <td>
                                <input type="text" 
                                    onChange = {
                                     (event) =>{setRecipient_name(event.target.value);
                                        }}
                                />
                            </td>
                            <td>
                                <lable>Recipient Surname : </lable>
                            </td>
                            <td>
                                <input type="text"
                                onChange = {
                                    (event) =>{setRecipient_surname(event.target.value);
                                       }} 
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <lable>National ID number : </lable>
                            </td>
                            <td>
                                <input type="text" 
                                onChange = {
                                    (event) =>{setRecipient_id_no(event.target.value);
                                       }}
                                />
                            </td>
                            <td>
                                <lable>Phone Number : </lable>
                            </td>
                            <td>
                                <input type="number" 
                                onChange = {
                                    (event) =>{setPhone_number(event.target.value);
                                       }}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <lable>Destination Country : </lable>
                            </td>
                            <td>
                                <input type ="text" 
                                onChange = {
                                    (event) =>{setDest_country(event.target.value);
                                       }}
                                />
                            </td>
                            <td>
                                <lable>Address : </lable>
                            </td>
                            <td>
                                <input type="text"
                                onChange = {
                                    (event) =>{setAddress(event.target.value);
                                       }}
                                />
                            </td>
                        </tr>
                    </table>
                </div>
                <hr/>
                <div>
                    <h2>Senders Details</h2>
                    <lable>User_Id : </lable>
                    <input type="text"
                    onChange = {
                        (event) =>{setSender_Id(event.target.value);
                           }}
                    />
                    <lable>Name : </lable>
                    <input type="text" 
                    onChange = {
                        (event) =>{setSender_name(event.target.value);
                           }}
                    />
                    <lable>Source Country : </lable>
                    <input type="text"
                    onChange = {
                        (event) =>{setSource_country(event.target.value);
                           }}
                    />
                </div>
                <hr/>
                <div>
                    <h2>Payment</h2>
                    <p>NB* currency should be in short hand eg. USD for United States Dollars</p>
                    <table>
                        <tr>
                            <td><lable>Currency : </lable></td>
                            <td><input type="text" 
                            onChange = {
                                (event) =>{setCurrency(event.target.value);
                                   }}
                            /></td>
                            <td><lable> Name of bank : </lable></td>
                            <td><input type="text" 
                            onChange = {
                                (event) =>{setName_of_bank(event.target.value);
                                   }}
                            /></td>
                        </tr>
                        <tr>
                            <td><lable>Amount  : </lable></td>
                            <td><input type="Number" 
                            onChange = {
                                (event) =>{setAmount(event.target.value);
                                   }}
                            /></td>
                            <td><lable>Bank Account Number  : </lable></td>
                            <td><input type="Number" 
                            onChange = {
                                (event) =>{setBank_acc_number(event.target.value);
                                   }}
                            /></td>
                        </tr>
                    </table>
                    <br/> 
                </div>
                <hr/>
                <button onClick={make_order}>Create Order</button>
            </section>  
        </form>
         
       );   
}


export default create_order;