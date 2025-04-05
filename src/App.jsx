import React from 'react'
import "./App.css"

export default function App() {

  const textColor=(colorName)=>{
    document.getElementById('text').style.color=colorName
  }
  const backColor=(colorName)=>{
    document.getElementById('text').style.backgroundColor=colorName
  }
  return (
   <>
   <h1 id="heading">Font Fusion</h1>
   <div className='container'>
      <div id= 'container1'>
        <h1 contentEditable='true' id='text'>Write your Text...</h1>
        <button id='down'>Download</button>
      </div>
      <div id='container2'>
        <div id='font-color'>
          <h2 id='text-h'>Choose your text color</h2>
          <div id='font-color-names'>
          <button id='red' onClick={()=>{textColor('red')}}></button>
          <button id='blue' onClick={()=>{textColor('blue')}}></button>
          <button id='yellow' onClick={()=>{textColor('yellow')}}></button>
          <button id='orange' onClick={()=>{textColor('orange')}}></button>
          <button id='pink' onClick={()=>{textColor('pink')}}></button>
          <input type="color" />
          </div>
        </div>
        <div id='bg-color'>
         <h2 id='text-h'> Choose your background color</h2>
         <div id='bg-color-names'>
         <button id='red' onClick={()=>{backColor('red')}}></button>
          <button id='blue' onClick={()=>{backColor('blue')}}></button>
          <button id='yellow' onClick={()=>{backColor('yellow')}}></button>
          <button id='orange' onClick={()=>{backColor('orange')}}></button>
          <button id='pink' onClick={()=>{backColor('pink')}}></button>
         
          <input type="color" />
          </div>
        </div>
        <div id='font-family'></div>
      </div>

   </div>
   
   </>
  )
}
