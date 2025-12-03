import React from 'react'
import NavBar from '../components/Navbar'

const Denmark = () => {
  return (
    <div>
        <NavBar />
        <div className="container mx-auto px-2 mt-12">
            <div className="flex flex-col md:max-w-1/2 mx-auto text-center mb-16 ">
                <h1 className="font-bold text-2xl text-primary mt-8">
                    Denmark, 2025.
                </h1>
                <p className="font-regular text-md text-secondary">
                    Photos of animals in Denmark from trips to different parts of Zealand.
                </p>
            </div>

            <div className="mt-4 grid grid-cols-1 xl:grid-cols-2 gap-2 pb-4">
                {[1,2].map((num) => (
                    <div key={num} className="w-full h-auto">
                        <img 
                        src={`/dk/${num}.jpg`} 
                        alt={`Denmark ${num}`} 
                        className="w-full h-auto object-cover"
                        />
                    </div>
                ))}
            </div>
            <div className="-mt-2 grid grid-cols-1 -mb-2">
                {[3].map((num) => (
                    <div key={num} className="w-full h-auto">
                        <img 
                        src={`/dk/${num}.jpg`} 
                        alt={`Denmark ${num}`} 
                        className="w-full h-auto object-cover"
                        />
                    </div>
                ))}
            </div>
            <div className="mt-4 grid grid-cols-1 xl:grid-cols-2 gap-2 pb-4">
                {[4,5,6,7,8,9].map((num) => (
                    <div key={num} className="w-full h-auto">
                        <img 
                        src={`/dk/${num}.jpg`} 
                        alt={`Denmark ${num}`} 
                        className="w-full h-auto object-cover"
                        />
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Denmark