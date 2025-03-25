import '../css/Article.css'
import React, { useState, useEffect } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const MediumArticles = () => {
    const [articles, setArticles] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [isMobile, setIsMobile] = useState(false);

    function extractURL(text) {
        const urlRegex = /http[s]?:\/\/.*\.(jpg|png|jpeg)/g;
        const matches = text.match(urlRegex);
        return matches ? matches[0] : null;
    }

    useEffect(() => {
        fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@mjhossainnyc')
            .then(response => response.json())
            .then(data => {
                const mediumArticles = data.items;
                setArticles(mediumArticles);
            })
            .catch(error => console.error('Error fetching articles:', error));
    }, []);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        
        checkMobile();
        window.addEventListener('resize', checkMobile);
        
        return () => {
            window.removeEventListener('resize', checkMobile);
        };
    }, []);

    const articlesPerPage = isMobile ? 1 : 2;
    const totalPages = Math.ceil(articles.length / articlesPerPage);

    const handlePrevPage = () => {
        setCurrentPage(prev => (prev > 0 ? prev - 1 : totalPages - 1));
    };

    const handleNextPage = () => {
        setCurrentPage(prev => (prev < totalPages - 1 ? prev + 1 : 0));
    };

    const currentArticles = articles.slice(
        currentPage * articlesPerPage,
        (currentPage + 1) * articlesPerPage
    );

    return (
        <div className='articleSection' id='blog'>
            <h1>Blog // Writeups</h1>
            
            <div className="slider-container">
                {articles.length > articlesPerPage && (
                    <button 
                        className="slider-arrow prev-arrow" 
                        onClick={handlePrevPage}
                        aria-label="Previous articles"
                    >
                        <FaArrowLeft />
                    </button>
                )}
                
                <div className="articleBox">
                    {currentArticles.map((article, index) => {
                        const imgLink = extractURL(article.content);
                        
                        return (
                            <a href={article.link} target='_blank' rel="noopener noreferrer" key={index} className='articleCard'>
                                <img
                                    src={imgLink}
                                    alt={article.title}
                                    loading="lazy"
                                />
                                <h3>{article.title}</h3>
                            </a>
                        );
                    })}
                </div>
                
                {articles.length > articlesPerPage && (
                    <button 
                        className="slider-arrow next-arrow" 
                        onClick={handleNextPage}
                        aria-label="Next articles"
                    >
                        <FaArrowRight />
                    </button>
                )}
            </div>
            
            {articles.length > articlesPerPage && (
                <div className="pagination-dots">
                    {Array.from({ length: totalPages }).map((_, index) => (
                        <span 
                            key={index} 
                            className={`pagination-dot ${currentPage === index ? 'active' : ''}`}
                            onClick={() => setCurrentPage(index)}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default MediumArticles