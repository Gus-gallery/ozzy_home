import React from 'react'
import NavBar from '../components/Navbar'

const Aboutpage = () => {
  return (
    <div>
        <NavBar />

        <div className="container mx-auto w-3/4 md:w-1/2 mt-8">
          <div className="p-8 border rounded-2xl bg-stone-900 border-stone-500">
            <h1 className="font-bold text-xl text-primary text-center mb-4">
              About Oskar
            </h1>
            <p className="text-primary opacity-80 text-md font-regular text-left">
              Oskar Peitersen is a biologist and wildlife photographer based in Denmark, with a passion for capturing the beauty of nature and its inhabitants. 
            </p>
            <img src="/ozzy_home/af/10.jpeg" className="w-full object-contain py-4"/>
            <div className="flex gap-4 mt-4 items-center justify-center"> 
              <button className="text-primary bg-stone-800 border hover:bg-stone-600 transition-all duration-200 rounded-full px-4 py-2 opacity-80 text-md font-regular text-left">Instagram</button>
              <button className="text-primary bg-stone-800 border hover:bg-stone-600 transition-all duration-200 rounded-full px-4 py-2 opacity-80 text-md font-regular text-left">LinkedIn</button>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Aboutpage