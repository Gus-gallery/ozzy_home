import React from 'react'
import NavBar from '../components/Navbar'

const Tanzania = () => {
  return (
    <div>
        <NavBar />
        <div className="p-4 container mx-auto">
            <div className="flex flex-col max-w-1/2">
                <h1 className="font-medium text-2xl text-primary mt-8">
                    Tanzania, 2025.
                </h1>
                <p className="font-regular text-md text-secondary">
                    Summer 2025 trip to Tanzania, capturing the stunning wildlife and landscapes.
                </p>
            </div>

            <div className="mt-4 grid grid-cols-1 lg:grid-cols-2 gap-2">
                {[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20].map((num) => (
                    <div key={num} className="w-full h-auto">
                        <img 
                        src={`/af/${num}.jpeg`} 
                        alt={`Tanzania ${num}`} 
                        className="w-full h-auto object-cover"
                        />
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Tanzania