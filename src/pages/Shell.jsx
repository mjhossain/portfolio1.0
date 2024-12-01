// Shell.jsx
import React from 'react';
import { ReactTerminal } from 'react-terminal';
import '../css/Shell.css'


const Shell = () => {
    // Define commands for the terminal
    const commands = {
        whoami: "Mohammed J Hossain",
        help: "Available commands: help, ls, whoismo, open <file name>, explore <interest/technology>, exit, man <command>",
        whoismo: [
            "Name: Mohammed J Hossain", <br />,
            "DOB: 01/14/1997", <br />,
            "IP Location: New York, NY", <br />,
            "Job Title: L1 IT Technician", <br />,
            "Job Technical Domains: Networking, InTune Device Management, Automation w/ Powershell, Windows Server Management, Active Directory Management", <br />,
            "Current Focus in Tech: AWS, Networking, System Design", <br />,
            "Hobbies Outside of Tech: Gaming, Guitar, Videography", <br />,
        ],
        explore: (arg) => {
            switch (arg) {
                case 'devops':
                    return "With an interest in cloud computing and web app development it naturally leads to interest in devops"
                    break;
                case 'programming':
                    return "Programming was the first step of mine in IT"
                    break;
                default:
                    return ["Please enter a correct option, currently you can explore", <br />,
                        "devops", <br />,
                        "programming", <br />,
                        "automation", <br />,
                        "networking"]
            }
        },
        clear: () => "Type 'clear' in the terminal to reset it.",
        ls: () => ["resume.pdf", <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>, <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>, "github.lnk", <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>, "linkedin.lnk", <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>, "medium.lnk"],
        open: (arg) => {
            if (arg == 'resume.pdf' || arg == 'resume') {
                window.open("/MohammedJHossain.pdf", "_blank")
            } else if (arg == 'linkedin.lnk' || arg == 'linkedin') {
                window.open("https://www.linkedin.com/in/mohammedjhossain/", "_blank")
            } else if (arg == 'github.lnk' || arg == 'github') {
                window.open("https://github.com/mjhossain", "_blank")
            } else if (arg == 'medium.lnk' || arg == 'medium') {
                window.open("https://medium.com/@mjhossainnyc", "_blank")
            }
        },
        exit: () => {
            // Display a message
            console.log("Exiting... Redirecting to the homepage in 2 seconds.");
            // Wait 2 seconds before redirecting
            setTimeout(() => {
                window.location.href = "/"; // Replace '/' with your homepage route
            }, 2000); // 2000 milliseconds = 2 seconds
            return "Exiting in 2 seconds...Good bye! Hope you learned something new about me!";
        }
    };

    return (
        <div className='terminal_box'>
            <div className='terminal'>
                {/* <h1 style={{ color: "white" }}>Mo's Brain</h1> */}
                <ReactTerminal
                    commands={commands}
                    welcomeMessage={[
                        "Welcome to Mo's Shell\n",
                        <br />, <br />,
                        "Enter 'help' to learn about the available commands",
                        <br />, <br />,
                        "",
                        ""
                    ]}
                    prompt="visitor@mo-brain:~$"
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
