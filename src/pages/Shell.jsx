import React, { useState } from 'react';
import { ReactTerminal } from 'react-terminal';
import '../css/Shell.css';
import ProjectsData from '../data/projects.json'

const Shell = () => {
    const [currentDirectory, setCurrentDirectory] = useState('~');


    const getPrompt = () => {
        return `visitor@mo-brain:${currentDirectory}$`;
    };

    const commands = {
        whoami: "Everything is not about you OKAY!! Do a 'whoismo' to learn about me! Thank you",
        whoismo: [
            <span className='highlight'>Name: </span>, "Mohammed J Hossain", <br />,
            <span className='highlight'>DOB: </span>, "01/14/1997", <br />,
            <span className='highlight'>IP Location: </span>, "New York, NY", <br />,
            <span className='highlight'>Job Title: </span>, "L1 IT Technician", <br />,
            <span className='highlight'>Job Technical Domains: </span>, "Networking, InTune Device Management, Automation w/ Powershell, Windows Server Management, Active Directory Management", <br />,
            <span className='highlight'>Certifications: </span>, "ISC2 Certified in Cybersecurity, Google Cybersecurity Professional", <br />,
            <span className='highlight'>Current Focus in Tech: </span>, "AWS, Networking, System Design", <br />,
            <span className='highlight'>Hobbies Outside of Tech: </span>, "Gaming, Guitar, Videography", <br />,
        ],
        describe: () => {
            return ([
                "As an IT Technician at DigaCore, I specialize in delivering comprehensive support for Networking, Windows Server, Active Directory, and Microsoft 365. My role includes optimizing network performance with SonicWall firewalls and VPNs, automating workflows using Azure, PowerShell, and Power Automate, and streamlining deployment processes through DevOps practices.",
                <br />, <br />,
                "Driven by a passion for cloud computing and automation, I am actively pursuing AWS Solutions Architect certification to transition into roles such as Cloud Engineer or Junior DevOps Engineer. With a focus on innovation, I aim to build secure, scalable, and efficient solutions that bridge infrastructure management and software development."
            ])
        },
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
                    ...Object.keys(ProjectsData).map(key =>
                        [<span className="highlight">{ProjectsData[key].id + ". " + ProjectsData[key].name}</span>, <br />]
                    ).flat(),
                    <br />,
                    "Use 'open <project-number>' for more details"
                ];
            }
            return ["resume.pdf", <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>, "github.lnk", <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>, "linkedin.lnk", <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>, "medium.lnk", <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>, <span className='file'>skills.md</span>, <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>, <span className='dir'>projects/</span>];
        },
        open: (num) => {
            if (currentDirectory !== '~/projects') {
                return 'Please cd into the projects directory first';
            }

            // Find the project by its id instead of using projectKey
            const project = Object.values(ProjectsData).find(p => p.id === parseInt(num));

            if (project) {
                return [
                    <span className="highlight">Title: </span>, project.name, <br />,
                    <span className="highlight">Description: </span>, project.desc, <br />,
                    <span className="highlight">Technologies: </span>, project.tech.join(', '), <br />,
                    <span className="highlight">View Project: </span>, <a href={project.link} target='_blank'>{project.viewType}</a>, <br />,
                ];
            }

            // Get available project IDs for better error message
            const availableIds = Object.values(ProjectsData).map(p => p.id).join(', ');
            return `Project not found. Available projects: ${availableIds}`;
        },
        cat: (arg) => {
            if (arg == 'resume.pdf' || arg == 'resume') {
                window.open("/MohammedJHossain.pdf", "_blank")
            } else if (arg == 'linkedin.lnk' || arg == 'linkedin') {
                window.open("https://www.linkedin.com/in/mohammedjhossain/", "_blank")
            } else if (arg == 'github.lnk' || arg == 'github') {
                window.open("https://github.com/mjhossain", "_blank")
            } else if (arg == 'medium.lnk' || arg == 'medium') {
                window.open("https://medium.com/@mjhossainnyc", "_blank")
            } else if (arg == 'skills.md' || arg == 'skills') {
                return [
                    <span className='highlight'>Programming: </span>, "Python | Powershell | Bash | JavaScript", <br />,
                    <span className='highlight'>DevOps: </span>, "Linux | Microsoft Azure | AWS | Docker | Terraform | Git | Github Actions | Jenkins", <br />,
                    <span className='highlight'>Networking: </span>, "Firewall Management | Unifi Management | Cloud Networking | VPN Management", <br />,
                    <span className='highlight'>Security: </span>, "Wireshark Packet Analysis | SIEM Dashboards | LOG Analysis"
                ]
            }
        },
        help: () => [
            "Available commands:", <br />,
            "ls - List files and directories", <br />,
            "cd <directory> - Change directory (projects or ..)", <br />,
            "cat <file-name> - to open an files in the home directory, make sure to check out 'cat skills'", <br />,
            "whoismo - to check my details", <br />,
            "describe - for a little paragraph describing me", <br />,
            "clear - to clear the terminal", <br />,
            "exit - to open the GUI website", <br />, <br />,
            "Psst... There are some hidden commands too! Try to find them 🕵️‍♂️.. maybe try rickroll to begin with.", <br />, <br />, <br />,
            "+----------------------------------------------------------------------+", <br />, <br />, <br />,
            "Usage:", <br />, <br />,
            "To open any file or link use 'cat <file-name>':", <br />,
            "Example: cat skills.md or cat skills", <br />, <br />,
            "To check out projects: use 'cd projects'", <br />,
            "Once inside projects folder use 'open <project-id>' to checkout a project", <br />, <br />,
            "To clear the screen at any point just type 'clear'", <br />, <br />,
            "To get back to the GUI website type 'exit'", <br />, <br />,

        ],
        exit: () => {
            // Display a message
            console.log("Exiting... Redirecting to the homepage in 2 seconds.");
            // Wait 2 seconds before redirecting
            setTimeout(() => {
                window.location.href = "/"; // Replace '/' with your homepage route
            }, 2000); // 2000 milliseconds = 2 seconds
            return "Exiting in 2 seconds...Good bye! Hope you learned something new about me!";
        },
        sudo: () => "Permission granted to explore my shell-world!",
        'coinflip': () => Math.random() < 0.5 ? "Heads! 🪙" : "Tails! 🪙",
        'matrix': () => [
            "Wake up, Neo...", <br />,
            "⠀⠀⠀⠀⠀⠀⠀⣀⣤⣴⣶⣾⣿⣿⣿⣿⣷⣶⣦⣤⣀", <br />,
            "⠀⠀⠀⠀⣠⣴⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣦⣄", <br />,
            "The Matrix has you... 🐰"
        ],
        'time': () => `The current time is: ${new Date().toLocaleTimeString()}`,
        'rickroll': () => {

            setTimeout(() => {
                window.open("https://www.youtube.com/watch?v=xvFZjo5PgG0", "_blank");
            }, 2000);

            return [
                "Never gonna give you up, never gonna let you down... 🎶", <br />,
                "(You just got Rickrolled!)",
            ]

        },
        'ping': () => "Pong! 🏓 Latency: 0ms. (Not bad, huh?)",
        'echo': (input) => `Echoing back to you: "${input}"`,
        'rm': (file) => `Error: Permission denied. You can’t delete ${file}, it's too precious!`,
        'mkdir': (dir) => `Directory ${dir} successfully created! Oh wait, just kidding.. Permission denied.`,
        'ps': () => [
            "PID TTY          TIME CMD", <br />,
            "001 pts/0    00:00:01 bash", <br />,
            "002 pts/1    00:00:00 node", <br />,
            "003 pts/2    00:00:00 fun-process"
        ],
        'top': () => [
            "Tasks: 1 total, 1 running, 0 sleeping", <br />,
            "PID USER      PR  NI    VIRT    RES    SHR S  %CPU %MEM     TIME+ COMMAND", <br />,
            "1   you       20   0  16232   4320   3296 R   0.3  0.0   0:00.03 exploring-terminal"
        ],
        'df': () => [
            "Filesystem     1K-blocks     Used Available Use% Mounted on", <br />,
            "virtual-world  102400000 10240000 92320000  10% /"
        ],
        // ... rest of your existing commands ...
    };

    return (
        <div className='terminal_box'>
            <div className='terminal'>
                <ReactTerminal
                    commands={commands}
                    welcomeMessage={[
                        "\n",
                        <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>, <br />,
                        <span>&nbsp;__&nbsp;&nbsp;&nbsp;__&nbsp;&nbsp;_______&nbsp;&nbsp;___&nbsp;&nbsp;&nbsp;__&nbsp;&nbsp;&nbsp;&nbsp;_&nbsp;&nbsp;_______&nbsp;&nbsp;_______&nbsp;&nbsp;_______&nbsp;&nbsp;__&nbsp;&nbsp;&nbsp;__&nbsp;&nbsp;&nbsp;</span>, <br />,
                        <span>|&nbsp;&nbsp;|_|&nbsp;&nbsp;||&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;||&nbsp;&nbsp;&nbsp;|&nbsp;|&nbsp;&nbsp;|&nbsp;&nbsp;|&nbsp;||&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;||&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;||&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;||&nbsp;&nbsp;|&nbsp;|&nbsp;&nbsp;|&nbsp;&nbsp;</span>, <br />,
                        <span>|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;||&nbsp;&nbsp;&nbsp;_&nbsp;&nbsp;&nbsp;||&nbsp;&nbsp;&nbsp;|&nbsp;|&nbsp;&nbsp;&nbsp;|_|&nbsp;||_&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_||&nbsp;&nbsp;&nbsp;&nbsp;___||&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;||&nbsp;&nbsp;|_|&nbsp;&nbsp;|&nbsp;&nbsp;</span>, <br />,
                        <span>|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;||&nbsp;&nbsp;|&nbsp;|&nbsp;&nbsp;||&nbsp;&nbsp;&nbsp;|&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;|___&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;||&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;</span>, <br />,
                        <span>|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;||&nbsp;&nbsp;|_|&nbsp;&nbsp;||&nbsp;&nbsp;&nbsp;|&nbsp;|&nbsp;&nbsp;_&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;___||&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_||&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;</span>, <br />,
                        <span>|&nbsp;||_||&nbsp;||&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;||&nbsp;&nbsp;&nbsp;|&nbsp;|&nbsp;|&nbsp;|&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;|___&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|_&nbsp;|&nbsp;&nbsp;&nbsp;_&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;</span>, <br />,
                        <span>|_|&nbsp;&nbsp;&nbsp;|_||_______||___| |_|&nbsp;&nbsp;|__|&nbsp;&nbsp;|___|&nbsp;&nbsp;|_______||_______||__|&nbsp;|__|&nbsp;&nbsp;</span>, <br />, <br />,
                        "\n",
                        "Welcome to Mo's Shell\n",
                        <br />, <br />,
                        "Enter 'help' to learn about the available commands",
                        <br />, <br />,
                        <br />,
                        ""
                    ]}
                    prompt={getPrompt()}
                    themes={{
                        "my-custom-theme": {
                            themeBGColor: "black",
                            themeToolbarColor: "gray",
                            themeColor: "#FFFEFC",
                            themePromptColor: "#69b41e"
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