import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link, BrowserRouter } from 'react-router-dom';
import { TerminalContextProvider } from "react-terminal";
import './App.css'
import Home from './pages/Home'
import Shell from './pages/Shell'

function App() {
  return (
    <BrowserRouter>
      {/* Define the routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shell" element={
          <TerminalContextProvider>
            <Shell />
          </TerminalContextProvider>
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App
