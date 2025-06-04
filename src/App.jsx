import { useState } from 'react'
import './App.css'

function App() {

  const changeHeaderColor = () => {
    const header = document.querySelector('h1');
    header.style.color = 'red';
  }

  return (
    <>
      <h1>Hello WordPress</h1>     
      <p>this is a test</p>
      <button onClick={changeHeaderColor}>Click me</button>
    </>
  )
}

export default App
