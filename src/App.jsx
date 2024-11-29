import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router';
import { TerminalContextProvider } from "react-terminal";
import './App.css'
import Home from './pages/Home'
import Shell from './pages/Shell'

function App() {
  return (
    <Router>
      {/* Define the routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shell" element={
          <TerminalContextProvider>
            <Shell />
          </TerminalContextProvider>
        } />
      </Routes>
    </Router>
  );
}

export default App
