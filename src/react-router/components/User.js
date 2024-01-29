// Route parameters example

import React from "react";
import { useParams } from "react-router-dom";

export default function User(){
    const {id} = useParams();  // It give the parameters that are passed in the routers
    return<>
        <h1>User Profile Page</h1>
        <p>User Id is <b>{id}</b></p>
    </>
}