import React from 'react'
import { Link } from 'react-router-dom'
function Interview() {
  return (
    <div className="p-10 bg-gray-100">
        <h1 className="text-3xl font-bold mb-8">Interview</h1>
        <div className="flex h-96 w-[700px] border-2 border-black shadow-lg rounded-md items-center justify-center bg-blue-200">
            <div className="size-12 bg-red-200 border border-black rounded-full flex items-center justify-center cursor-pointer">
                <div className="w-4 overflow-hidden inline-block mt-6 ml-2">
                    <div className="h-12 bg-black rotate-45 transform origin-top-left"></div>
                </div>
            </div>
        </div>
        <div className="mt-12">
            <Link to="/" className="text-sm bg-blue-500 text-white px-2 py-1 border shadow-md border-black rounded-md">Back to Home</Link>
        </div>
    </div>
  )
}

export default Interview