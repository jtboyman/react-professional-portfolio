import React from "react";

export default function ProjectList() {
    const projects = [
        {
            image: "../assets/images/binge_buddy_preview.png",
            name: 'Binge Buddy',
            description: 'Binge Buddy utilizes TMDB and Tasty API to randomly generate movies and recipes based on user input. It is simple to use and guides the iser through prompts to select the type of movie and food they are looking for to return a result.',
            link: 'https://trm621.github.io/movie-night-generator/',
            github: 'https://github.com/trm621/movie-night-generator'
        },
        {
            image: 'image link',
            name: 'project 2',
            description: '2 project description',
            link: 'project link',
            github: 'project github'
        }
    ];

    function buildProject(project) {
        return (
            <div>
                <img src={project.image} alt={project.name}/>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <ul>
                    <li><a href={project.link}>Check it out!</a></li>
                    <li><a href={project.github}>View GitHub Repository</a></li>
                </ul>
            </div>
        )
    }

    return (
        <div>
            {projects.map(buildProject)}
        </div>
    )
}