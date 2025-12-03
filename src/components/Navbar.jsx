import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {

    const label = ["Projects", "About",];

  return (
    <header className="sticky -top-1  text-primary bg-backgroundsecondary shadow-md z-20">
        <nav className="flex flex-wrap items-center text-center p-4 px-6 justify-between">
            <Link to="/" className="text-lg font-bold">
                Oskar Peitersen Photo
            </Link>

            <ul className="flex justify-end items-center text-center gap-8 font-regular text-base">
                {label.map((label) => (
                    <li key={label}>

                        <Link to={'/'+label.toLowerCase()}
                        className="opacity-60 cursor-pointer hover:opacity-100 transition-all duration-300 ease-in-out" 
                        >
                            {label}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    </header>
  )
}

export default NavBar