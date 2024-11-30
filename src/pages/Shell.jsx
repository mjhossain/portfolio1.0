// Shell.jsx
import React from 'react';
import { ReactTerminal } from 'react-terminal';
import '../css/Shell.css'

const Shell = () => {
    // Define commands for the terminal
    const commands = {
        whoami: "Mohammed J Hossain",
        help: "Available commands: help, whoismo, learn <interest/technology>, exit, man <command>",
        whoismo: [
            "Name: Mohammed", <br />,
            "DOB: 01/14/1997", <br />,
            "IP Location: New York, NY", <br />,
            "Job Title: L1 IT Technician", <br />,
            "Hobbies: Scripting, Automation, Web Devlopment, Networking, Gaming", <br />,

        ],
        learn: (arg) => {
            if (arg == 'devops') {
                return ["DevOps\n Devops", <br />, "Learn"]
            }
        },
        clear: () => "Type 'clear' in the terminal to reset it.",
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
