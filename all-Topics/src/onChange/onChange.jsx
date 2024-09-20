import styles from './onChange.module.css'

import React, {useState} from "react";

function OnChange()
{
    const [name, setName] = useState("Guest");
    const [quantity, setQuantity] = useState(0);
    const [comment, setComment] = useState("");
    const [payment, setpayment] = useState("");
    const [shipping, setShipping] = useState("Delivery");


    const handleNameChange = (event) =>
    {
        setName(event.target.value);
    }

    const handleQuantityChange = (event)=>
    {
        setQuantity(event.target.value);
    }

    const handleCommentChange=(event)=>
    {
        setComment(event.target.value);
    }

    const handlePayment = (event) =>
    {
        setpayment(event.target.value);
    }

    const handleShipping = (event)=>
    {
        setShipping(event.target.value);
    }

    return(
        <div className={styles.container}>
            <input value={name} onChange={handleNameChange}></input>
            <p>Name: {name}</p>

            <input  value = {quantity} type="number" onChange={handleQuantityChange}></input>
            <p>Quantity:{quantity}</p>

            <textarea value = {comment} onChange={handleCommentChange} placeholder="Delivery Instructions"></textarea>
            <p>Comment:{comment}</p>

            <select value={payment} onChange={handlePayment}>
                <option>Select an Option</option>
                <option value="Visa">Visa</option>
                <option value="Mastercard">MasterCard</option>
                <option value="UPI">UPI</option>
            </select>

            <p>Payment selected: {payment}</p>

            <label>
                Pick Up
            </label>
            <input type='radio' value = "Pick Up" onChange={handleShipping} checked = {shipping==="Pick Up"}></input>
            <br></br>
            <label>
                Delivery
            </label>
            <input type='radio' value = "Delivery" onChange={handleShipping} checked = {shipping==="Delivery"}></input>

            <p>Shipping : {shipping}</p>

            

            
        </div>
    );

}

export default OnChange;