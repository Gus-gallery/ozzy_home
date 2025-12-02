import React from 'react'
import NavBar from '../components/Navbar'

const Norway = () => {
  return (
    <div>
        <NavBar />
        <div className="container mx-auto px-2">
            <div className="flex flex-col md:max-w-1/2 mx-auto text-center">
                <h1 className="font-bold text-2xl text-primary mt-8">
                    Norway, 2024.
                </h1>
                <p className="font-regular text-md text-secondary">
                    A series of photography from half a year in Norwegian nature.
                </p>
            </div>

            <div className="mt-4 grid grid-cols-1 xl:grid-cols-2 gap-2">
                {[1,2,3,4,5,6,7,8,9,10,11,12,13,14].map((num) => (
                    <div key={num} className="w-full h-auto">
                        <img 
                        src={`/nw/${num}.jpg`} 
                        alt={`Norway ${num}`} 
                        className="w-full h-auto object-cover"
                        />
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Norway