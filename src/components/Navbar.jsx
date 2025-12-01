import React from 'react'


const NavBar = () => {

    const label = ["Projects", "About"];

  return (
    <header className="sticky bg-backgroundsecondary z-20">
        <nav className="container mx-auto flex flex-wrap items-center p-4 justify-between">
            <h1 className="text-lg font-light">
                Peitersen Photography
            </h1>

            <ul className="flex flex-wrap md:flex-row justify-end items-center gap-8 lg:gap-12 font-light text-base">
                {label.map((label) => (
                    <li key={label}>
                        <p
                        className="opacity-60 cursor-pointer hover:opacity-100 transition-all duration-300 ease-in-out" 
                        >
                            {label}
                        </p>
                    </li>
                ))}
            </ul>
        </nav>
    </header>
  )
}

export default NavBar