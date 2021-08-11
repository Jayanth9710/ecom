import React from 'react';
import { useState } from "react";



export default function CartList(props){

  // const [qty,setQty] = useState(1);

  // setQty(qty+1);

  //   console.log(qty);
  
  
    return (
        <div>
            <ul class="list-group">
            
  <li class="list-group-item d-flex justify-content-between align-items-center">
    {props.data.title} Price:{props.data.price} Quantity - {props.data.qty}
    <button class="btn btn-primary"  onClick={()=>{props.decreQty(props.data.id)}}>-</button>
    <button class="btn btn-danger" onClick={()=>{props.handleRemove(props.data.id)}} >Remove</button>
    <button class="btn btn-primary"  onClick={()=>{props.increQty(props.data.id)}}>+  </button>
  </li>
  
</ul>
        </div>
    )
}