import React from 'react'


const NavBar = () => {

    const label = ["Projects", "About"];

  return (
    <header className="sticky bg-backgroundsecondary text-primary z-20">
        <nav className="flex flex-wrap items-center text-center p-4 px-6 justify-between">
            <h1 className="text-lg font-regular">
                Peitersen Photography
            </h1>

            <ul className="flex justify-end items-center text-center gap-8 font-regular text-base">
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