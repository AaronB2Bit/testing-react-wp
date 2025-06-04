import { useState } from 'react'
import './App.css'
import { Link } from 'react-router-dom'
function App() {

  const changeHeaderColor = () => {
    const header = document.querySelector('h1');
    header.style.color = 'red';
  }

  return (
    <>
    <div className="p-10 bg-gray-100">
      <h1 className="text-3xl font-bold">Hello WordPress</h1>     
      <p className="text-gray-500">this is a react project test, hello from the other side</p>
      <div className="mt-12">
        <Link to="/interview" className=" bg-blue-500 text-white px-2 py-1 border-2 border-black rounded-md">
          Start Interview
      </Link>
      </div>
    </div>
    </>
  )
}

export default App
