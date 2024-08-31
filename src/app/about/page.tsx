"use client"
import React, { useContext } from "react";
import { CountContext } from "../context";

const Test=()=>{
    const ratan = useContext(CountContext)
    return(
        <div>{ratan.count}</div>
      
    )
}



export default Test;