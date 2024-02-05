import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProjects } from '../helpers/features/projects/projectSlice';
import Project from '../helpers/Project';
import '../styles/components/Projects.css';

function Projects({ value }) {
   const dispatch = useDispatch();
   const { items: projects, loading, error } = useSelector((state) => state.projects);

   useEffect(() => {
      dispatch(fetchProjects());
   }, [dispatch]);

   return (
   <>
      <div className="title--container">
         <p className='title'> Projects </p>
      </div>
      <div className={`projects-container--grid ${value}`}>
         {loading && <p>Loading...</p>}
         {error && <p>Error: {error}</p>}
         {!loading && !error && projects.map((project, index) => {
            return (
               <div key={project.id} className="project-container">
                  <Project 
                     key={project.id}
                     image={project.image}
                     name={project.name}
                     startDescription={project.startDescription}
                     description={project.description}
                     github={project.github}
                     dribbble={project.dribbble}
                     website={project.website}
                  />
               </div>
            )
         })}

      </div>
      {/* <div className="see-more--container">
         <Link to='/' className="btn ">
            <span> See more </span>
         </Link>
      </div> */}
   </>
  )
};

export default Projects;