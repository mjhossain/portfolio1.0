// Shell.jsx
import React from 'react';
import { ReactTerminal } from 'react-terminal';
import '../css/Shell.css'

const Shell = () => {
    // Define commands for the terminal
    const commands = {
        whoami: "Mohammed J Hossain",
        help: "Available commands: help, echo <text>, clear",
        echo: (args) => args.join(' '),
        clear: () => "Type 'clear' in the terminal to reset it.",
    };

    return (
        <div id='terminal'>
            <h1 style={{ color: "white" }}>Mo's Brain</h1>
            <ReactTerminal
                commands={commands}
                welcomeMessage={`Welcome to the React Terminal!\n\nType 'help' for a list of available commands.\n\nEnjoy exploring the terminal!`}
                prompt="user@mo-brain:~$"
                theme="material-dark"
                showControlBar={false}
                showControlButtons={false}
            />
        </div>
    );
};

export default Shell;
