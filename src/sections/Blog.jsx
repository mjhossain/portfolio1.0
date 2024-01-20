import '../css/Article.css'
import React, { useState, useEffect } from 'react';


const MediumArticles = () => {
    const [articles, setArticles] = useState([]);

    function extractURL(text) {
        const urlRegex = /http[s]?:\/\/.*\.(jpg|png)/g;
        const matches = text.match(urlRegex);
        return matches ? matches[0] : null;
    }



    useEffect(() => {
        fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@mjhossainnyc')
            .then(response => response.json())
            .then(data => {
                const mediumArticles = data.items;
                setArticles(mediumArticles);
                console.log(articles);
            })
            .catch(error => console.error('Error fetching articles:', error));
    }, []);


    return (
        <div className='articleSection'>
            <h1>Blog // Writeups</h1>
            <div className="articleBox">
                {articles.map((article, index) => {
                    const imgLink = extractURL(article.content);
                    return (
                        <a href={article.link} target='_blank' key={index} className='articleCard'>
                            <img
                                src={imgLink}
                                alt={article.title}
                            />
                            <h3>{article.title}</h3>
                        </a>
                    );
                })}
            </div>
        </div>
    );
};


export default MediumArticles