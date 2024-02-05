// // using props

// import React from "react";

// export default function CustomerView({customers}){
//     return<>
//         <h2>Customer List</h2>
//         <ul style={{listStyle: 'none'}}>
//             {
//                 customers.map((customer)=> <li>{customer}</li>)
//             }
//         </ul>       
//     </>
// }

// sharing data using Redux 

import React from "react";
import { useDispatch, useSelector } from "react-redux"; // useSelector)() is used to get the whole data from the store
import { deleteCustomer } from "./slice";

export default function CustomerView(){

    const customers = useSelector((store)=> store.customers)
    const dispatch = useDispatch();

    function deleteHandler(index){
        dispatch(deleteCustomer(index))
    }

    return<>
        <h2>Customer List</h2>
        <ul style={{listStyle: 'none'}}>
            {
                customers.map((customer, index)=> <li key={index}>{customer} <button onClick={()=> deleteHandler(index)}>Delete</button></li>)
            }
        </ul>       
    </>
}