import React from 'react'
import NavBar from '../components/Navbar'

const Projects = () => {
    const projects = ["Denmark", "Norway", "Tanzania"];

  return (
    <div>
        <NavBar />
        <div className="h-screen flex justify-center items-center">
            <ul className="text-lg font-regular text-primary opacity-60 transition-all duration-300 ease-in-out hover:opacity-100">
                {projects.map((project) => (
                    <li key={project}>
                        <Link to={'/projects/' + project.toLowerCase()}
                        className="opacity-60 cursor-pointer hover:opacity-100 transition-all duration-300 ease-in-out" 
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