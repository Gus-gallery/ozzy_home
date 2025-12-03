import React from 'react'
import NavBar from '../components/Navbar'

const Tanzania = () => {
  return (
    <div>
        <NavBar />
        <div className="container mx-auto px-2 mt-12">
            <div className="flex flex-col md:max-w-1/2 mx-auto text-center">
                <h1 className="font-bold text-2xl text-primary mt-8">
                    Tanzania, 2025.
                </h1>
                <p className="font-regular text-md text-secondary">
                    Summer 2025 trip to Tanzania, capturing the stunning wildlife and landscapes.
                </p>
            </div>

            <div className="mt-4 grid grid-cols-1 xl:grid-cols-2 gap-2 pb-4">
                {[1,2].map((num) => (
                    <div key={num} className="w-full h-auto">
                        <img 
                        src={`/af/${num}.jpeg`} 
                        alt={`Tanzania ${num}`} 
                        className="w-full h-auto object-cover"
                        />
                    </div>
                ))}
            </div>
            <div className="-mt-2 grid grid-cols-1 gap-2 -mb-2">
                {[3].map((num) => (
                    <div key={num} className="w-full h-auto">
                        <img 
                        src={`/af/${num}.jpeg`} 
                        alt={`Norway ${num}`} 
                        className="w-full h-auto object-cover"
                        />
                    </div>
                ))}
            </div>
            <div className="mt-4 grid grid-cols-1 xl:grid-cols-2 gap-2 pb-4">
                {[4,5,6,7,8,9,10,11,12].map((num) => (
                    <div key={num} className="w-full h-auto">
                        <img 
                        src={`/af/${num}.jpeg`} 
                        alt={`Tanzania ${num}`} 
                        className="w-full h-auto object-cover"
                        />
                    </div>
                ))}
            </div>
            <div className="-mt-2 grid grid-cols-1 gap-2 -mb-2">
                {[12].map((num) => (
                    <div key={num} className="w-full h-auto">
                        <img 
                        src={`/af/${num}.jpeg`} 
                        alt={`Norway ${num}`} 
                        className="w-full h-auto object-cover"
                        />
                    </div>
                ))}
            </div>
            <div className="mt-4 grid grid-cols-1 xl:grid-cols-2 gap-2 pb-4">
                {[13,14,15,16,17,18,19,20].map((num) => (
                    <div key={num} className="w-full h-auto">
                        <img 
                        src={`/af/${num}.jpeg`} 
                        alt={`Tanzania ${num}`} 
                        className="w-full h-auto object-cover"
                        />
                    </div>
                ))}
            </div>
            <div className="-mt-2 grid grid-cols-1 gap-2 -mb-2">
                {[21].map((num) => (
                    <div key={num} className="w-full h-auto">
                        <img 
                        src={`/af/${num}.jpeg`} 
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

export default Tanzania