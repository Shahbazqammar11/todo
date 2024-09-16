"use client"
import React, { useState } from 'react'
// Define the TodoItem type
type TodoItem = {
  movie: string;
  id: number;
};

const ToDoApp = () => {
  const [todos, setTodos] = useState<TodoItem[]>([]);
  const [inputVal,setinputVal] = useState("")
  const [inputId,setinputId] = useState(0)
  //functions
 const addItem = ()=>{
  let obj = todos.find(item =>item.id==inputId)
  if(obj){
    let newArray = todos.filter(item =>item.id !== obj.id)
    setTodos([...newArray,{movie:inputVal,id:inputId}])
    setinputVal("")
    setinputId(0)
return
  }
  setTodos([...todos,{movie:inputVal,id:inputId}])
  setinputVal("")
  setinputId(0) 
  
 }
 
 const editItem =(id:any)=>{
  let obj:any = todos.find(item =>item.id==id)
  setinputId(obj.id)
  setinputVal(obj.movie)
 
 }
 const delItem = (id:any)=>{
  let newArray = todos.filter(item =>item.id !== id)
  setTodos([...newArray])
 }
  return (
    <div className='max-w-4xl  mx-auto p-5'>
      <h1 className='text-center text-[30px]'>Weekly Todo App</h1>
      <div className='flex justify-between gap-20 mt-5'>
        <input 
        type='text'
       value={inputVal}
        onChange={(e:any)=>setinputVal(e.target.value)}
        className=' w-[65%] pl-2 ml-3 text-lg border-b focus:outline-none' placeholder='write here'>
        </input>
        <input 
        type='number'
       value={inputId}
        onChange={(e:any)=>setinputId(e.target.value)}
        className=' w-[15%] pl-2 ml-3 text-lg border-b focus:outline-none' placeholder='write ID here'>
        </input>
        <button  onClick={ addItem} className='bg-blue-500 w-[20%] text-white p-2 rounded-md hover:bg-blue-700'>
          Add Task
        </button>
      </div>
      <h1 className='text-center text-[20px] mt-5'>Weekly Task List</h1>
      <div className="grid grid-cols-2 gap-6 mt-5">
        {todos.map((item:any,i:any)=>{
          return(
            <div className='shadow p-4' key={i}>
            <div className='flex justify-between  '>
              <span className='shadow rounded-full h-8 w-8 text-center '>{i+1}</span>
              <span onClick={()=>delItem(item.id)} className='shadow rounded-full h-8 w-8 text-center cursor-pointer text-red-400 '>X</span>
            </div>
            <div className='mt-5 text-[30px] text-gray-700'>{item.movie}</div>
            <div className=''>
            <h2 onClick={()=>editItem(item.id)} className='text-right cursor-pointer'>Edit</h2>
          
          </div>
          </div>
         
     
          )
        
        })}
      
    </div>
    </div>
  )}

export default ToDoApp