import React from "react";
import BingeBuddyImg from "../../assets/images/binge_buddy_preview.png";
import PizzaHuntImg from "../../assets/images/pizza_hunt_preview.png";
import TaskioImg from "../../assets/images/taskio_preview.PNG";
import ThoughtsImg from "../../assets/images/thoughts_social_media_preview.PNG";
import WeatherImg from "../../assets/images/weather_dashboard_preview.png";
export default function ProjectList() {
    const projects = [
        {
            image: BingeBuddyImg,
            name: 'Binge Buddy',
            description: 'Binge Buddy utilizes TMDB and Tasty API to randomly generate movies and recipes based on user input. It is simple to use and guides the iser through prompts to select the type of movie and food they are looking for to return a result.',
            link: 'https://trm621.github.io/movie-night-generator/',
            github: 'https://github.com/trm621/movie-night-generator'
        },
        {
            image: PizzaHuntImg,
            name: 'Pizza Hunt',
            description: 'A cute sample project that allows users to interact and create pizza.',
            link: 'https://limitless-lowlands-46493.herokuapp.com/',
            github: 'https://github.com/jtboyman/pizza-hunt'
        },
        {
            image: TaskioImg,
            name: 'Task.io',
            description: 'The prototype for an app that allows users to sign up and create groups, then assign tasks and award points upon their completion.',
            link: 'https://taskio-project2323.herokuapp.com/',
            github: 'https://github.com/jtboyman/task.io'
        },
        {
            image: ThoughtsImg,
            name: 'Deep Thoughts',
            description: 'A sample full-stack social media app using React.',
            link: 'https://deep-thoughts-social23.herokuapp.com/',
            github: 'https://github.com/jtboyman/deep-thoughts'
        },
        {
            image: WeatherImg,
            name: 'Weather Dashboard',
            description: 'A simple weather app that shows current temperature, wind speed, humidity, and UVI, as well as a 5-day forecast for many different cities.',
            link: 'https://jtboyman.github.io/weather-dashboard/',
            github: 'https://github.com/jtboyman/weather-dashboard'
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