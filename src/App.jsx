import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { TerminalContextProvider } from "react-terminal";
import { ThemeProvider } from './context/ThemeContext';
import './App.css'
import Home from './pages/Home'
import Shell from './pages/Shell'

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shell" element={
            <TerminalContextProvider>
              <Shell />
            </TerminalContextProvider>
          } />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App
