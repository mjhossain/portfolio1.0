import '../css/Header.css'
import { useState, useEffect } from 'react'

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    
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
            <div className="title">
                <p><span className="mo">Mo</span>InTech</p>
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
                    <li onClick={handleLinkClick}><a href="MohammedJHossain.pdf" target='_blank'>Resume</a></li>
                    <li onClick={handleLinkClick}><a href="#skills">Skills</a></li>
                    <li onClick={handleLinkClick}><a href="#projects">Projects</a></li>
                    <li onClick={handleLinkClick}><a href="#blog">Blog</a></li>
                    <li onClick={handleLinkClick}><a href="/shell">&gt; Shell</a></li>
                </ul>
            </div>
        </div>
    )
}