import React, { useState } from 'react';
import { ReactTerminal } from 'react-terminal';
import '../css/Shell.css';
import ProjectsData from '../data/projects.json'

const Shell = () => {
    const [currentDirectory, setCurrentDirectory] = useState('~');

    const projects = {
        'project1': {
            title: 'E-Commerce Platform',
            description: 'A full-stack web application built with MERN stack',
            tech: ['React', 'Node.js', 'MongoDB', 'Express'],
            link: 'https://google.com',
            viewType: 'Github'
        },
        'project2': {
            title: 'Cloud Infrastructure Monitor',
            description: 'AWS monitoring dashboard with real-time metrics',
            tech: ['AWS', 'React', 'Node.js', 'CloudWatch'],
            link: 'https://google.com',
            viewType: 'Web Page'
        },
        'project3': {
            title: 'Automated Deployment Pipeline',
            description: 'CI/CD pipeline using GitHub Actions and Docker',
            tech: ['GitHub Actions', 'Docker', 'Jenkins', 'Terraform'],
            link: 'https://google.com',
            viewType: 'Github'
        }
    };

    const getPrompt = () => {
        return `visitor@mo-brain:${currentDirectory}$`;
    };

    const commands = {
        whoami: "Mohammed J Hossain",
        cd: (dir) => {
            if (dir === '..') {
                if (currentDirectory !== '~') {
                    setCurrentDirectory('~');
                    return 'Directory changed to: ~';
                }
                return 'Already in home directory';
            } else if (dir === 'projects') {
                setCurrentDirectory('~/projects');
                return 'Directory changed to: ~/projects';
            } else {
                return 'Directory not found. Available directories: projects';
            }
        },
        pwd: () => {
            return `Current directory: ${currentDirectory}`;
        },
        ls: () => {
            if (currentDirectory === '~/projects') {
                return [
                    "Available projects:", <br />,
                    ...Object.keys(projects).map(key =>
                        [<span className="highlight">{projects[key].title}</span>, <br />]
                    ).flat(),
                    <br />,
                    "Use 'project-info <project-number>' for more details"
                ];
            }
            return ["resume.pdf", <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>, "github.lnk", <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>, "linkedin.lnk", <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>, "medium.lnk", <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>, "projects/"];
        },
        'project-info': (num) => {
            const projectKey = `project${num}`;
            if (currentDirectory !== '~/projects') {
                return 'Please cd into the projects directory first';
            }
            if (projects[projectKey]) {
                const project = projects[projectKey];
                return [
                    <span className="highlight">Title: </span>, project.title, <br />,
                    <span className="highlight">Description: </span>, project.description, <br />,
                    <span className="highlight">Technologies: </span>, project.tech.join(', '), <br />,
                    <span className="highlight">View Project: </span>, <a href={project.link} target='_blank'>Visit {project.viewType}</a>, <br />,
                ];
            }
            return 'Project not found. Available projects: 1, 2, 3';
        },
        // ... your existing commands ...
        help: () => [
            "Available commands:", <br />,
            "cd <directory> - Change directory (projects or ..)", <br />,
            "pwd - Print working directory", <br />,
            "ls - List directory contents", <br />,
            "project-info <number> - View project details", <br />,
            // ... your existing help text ...
            "Type 'ls' to see available files and directories"
        ],
        // ... rest of your existing commands ...
    };

    return (
        <div className='terminal_box'>
            <div className='terminal'>
                <ReactTerminal
                    commands={commands}
                    welcomeMessage={[
                        "Welcome to Mo's Shell\n",
                        <br />, <br />,
                        "Enter 'help' to learn about the available commands",
                        <br />, <br />,
                        "Try 'cd projects' to explore my portfolio",
                        <br />,
                        ""
                    ]}
                    prompt={getPrompt()}
                    themes={{
                        "my-custom-theme": {
                            themeBGColor: "black",
                            themeToolbarColor: "gray",
                            themeColor: "#FFFEFC",
                            themePromptColor: "green"
                        }
                    }}
                    theme="my-custom-theme"
                    showControlBar={true}
                    showControlButtons={true}
                />
            </div>
        </div>
    );
};

export default Shell;