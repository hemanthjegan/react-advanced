// // using props


// import React, { useState } from "react";
// import CustomerView from "./CustomerView";

// export default function CustomerAdd(){

//     const [input, setInput] = useState('');
//     const [customers, setCustomers] = useState([]);

//     function addCustomer(){
//         if(input){
//             setCustomers((previousState)=> { return [...previousState, input]})
//             setInput('');
//         }

//         console.log(customers);
//     }

//     return <>
//         <h2>Add new customer</h2>
//         <input type="text" value={input} onChange={(e)=> {setInput(e.target.value) }} />
//         <button onClick={addCustomer} >Add</button>
        
//         <CustomerView customers = {customers} />
//     </>
// }


// Using Redux

import React, { useState } from "react";
import { addCustomer as addCustomerAction} from "./slice";
import { useDispatch } from "react-redux";

export default function CustomerAdd(){

    const [input, setInput] = useState('');
    // const [customers, setCustomers] = useState([]);

    const dispatch = useDispatch();  // dispatch function used to store the data in state using action creator

    function addCustomer(){
        if(input){
            // setCustomers((previousState)=> { return [...previousState, input]})

            dispatch(addCustomerAction(input));   // here addCustomerAction is the action creator it was created in slice compomemt
            setInput('');
        }
    }

    return <>
        <h2>Add new customer</h2>
        <input type="text" value={input} onChange={(e)=> {setInput(e.target.value) }} />
        <button onClick={addCustomer} >Add</button>
    </>
}