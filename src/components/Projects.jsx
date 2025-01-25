import { useState } from "react";
import projects from "../data/projects";
import ProjectCard from "./ProjectCard";

function Projects(){

    
    return(
        <div id="Projects" className="pt-20">
            <h1 className="text-4xl font-semibold ml-10 mb-20">My Recent Projects</h1>
            <div className="flex flex-wrap gap-5 justify-center text-white">
                {
                    projects.map((w,i)=>(
                        <ProjectCard key={i} img={w.img} title={w.title} description={w.description} source={w.source} demo={w.demo}/>
                    ))
                }
            </div>
        </div>
    )
}
export default Projects;