import React from 'react'
import NavBar from '../components/Navbar'
import { Link } from 'react-router-dom'

const Projects = () => {
    const projects = ["Denmark", "Norway", "Tanzania"];

  return (
    <div>
        <NavBar />
        <div className="h-screen flex justify-center items-center">
            <ul className="text-2xl font-regular -mt-16 text-center text-primary">
                {projects.map((project) => (
                    <li key={project} className="p-4">
                        <Link to={'/projects/' + project.toLowerCase()}
                        className="opacity-40 cursor-pointer hover:opacity-100 transition-all duration-300 ease-in-out" 
                        >
                            {project}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    </div>
  )
}

export default Projects