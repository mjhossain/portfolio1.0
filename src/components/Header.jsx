import '../css/Header.css'
import { useState, useEffect } from 'react'
import { useTheme } from '../context/ThemeContext'
import { HiSun, HiMoon } from 'react-icons/hi'

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const { theme, toggleTheme } = useTheme();
    
    // Check if screen is mobile size
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768);
            if (window.innerWidth > 768) {
                setMenuOpen(false);
            }
        };
        
        checkMobile();
        window.addEventListener('resize', checkMobile);
        
        return () => {
            window.removeEventListener('resize', checkMobile);
        };
    }, []);
    
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };
    
    // Close menu when clicking a link
    const handleLinkClick = () => {
        if (isMobile) {
            setMenuOpen(false);
        }
    };
    
    return (
        <div className="header">
            <div className="header-container">
                <div className="title">
                    <p>MHossain.Dev</p>
                </div>
                
                {isMobile && (
                    <div className="hamburger-icon" onClick={toggleMenu}>
                        <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
                        <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
                        <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
                    </div>
                )}
                
                <div className={`navbar-box ${menuOpen ? 'open' : ''}`}>
                    <ul className="navbar">
                        <li onClick={handleLinkClick}>
                            <a href="MohammedJHossain.pdf" target='_blank'>Resume</a>
                        </li>
                        <li onClick={handleLinkClick}>
                            <a href="#skills">Skills</a>
                        </li>
                        <li onClick={handleLinkClick}>
                            <a href="#projects">Projects</a>
                        </li>
                        <li onClick={handleLinkClick}>
                            <a href="#blog">Blog</a>
                        </li>
                        <li onClick={handleLinkClick}>
                            <a href="/shell" className="shell-link">
                                <span className="shell-icon">&gt;</span> Shell
                            </a>
                        </li>
                        <li className="theme-toggle-nav">
                            <button 
                                className="theme-toggle" 
                                onClick={toggleTheme}
                                aria-label="Toggle theme"
                            >
                                {theme === 'light' ? (
                                    <HiMoon className="theme-icon" />
                                ) : (
                                    <HiSun className="theme-icon" />
                                )}
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
