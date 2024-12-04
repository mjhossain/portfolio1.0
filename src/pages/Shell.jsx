// Shell.jsx
import React from 'react';
import { ReactTerminal } from 'react-terminal';
import '../css/Shell.css'



const Shell = () => {
    // Define commands for the terminal
    const commands = {
        whoami: "Mohammed J Hossain",
        help: "Available commands: help, ls, whoismo, cat <file name>, explore <interest/technology>, exit, man <command>",
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
        cat: (arg) => {
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
        show: (arg) => {
            if (arg == 'skills') {
                return [
                    <span className='highlight'>Programming: </span>, "Python | Powershell | Bash | JavaScript", <br />,
                    <span className='highlight'>DevOps: </span>, "Linux | Microsoft Azure | AWS | Docker | Terraform | Git | Github Actions | Jenkins", <br />,
                    <span className='highlight'>Networking: </span>, "Firewall Management | Unifi Management | Cloud Networking | VPN Management", <br />,
                    <span className='highlight'>Security: </span>, "Wireshark Packet Analysis | SIEM Dashboards | LOG Analysis"
                ]
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
        },
        sudo: () => "Permission granted to explore my shell-world!"
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
                        "Enter 'help' to learn about the available commands, more commands are added with every new update!",
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
