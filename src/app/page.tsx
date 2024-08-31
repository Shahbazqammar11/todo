"use client"
import React from 'react';
import { useContext } from 'react';
import { CountContext } from './context';
const ComponentName = () => {
  const obj = useContext(CountContext)
  console.log(obj)
  return (
    <div>
      <h1>home page</h1> 
      <p>{obj.count}</p><br/>
      <button onClick={()=>{
        obj.setCount(++obj.count)
      }}>increment</button><br/>
      <button onClick={()=>{
        obj.setCount(--obj.count)
      }}>decrement</button><br/>
    </div>
  );
}

export default ComponentName;

