import React, { useEffect } from 'react';
import TechStack from "./TechStack";
import '../css/ProjectModal.css';

export default function ProjectModal({ isOpen, onClose, project }) {
    // Simple body scroll prevention
    useEffect(() => {
        if (isOpen) {
            document.body.classList.add('modal-open');
        } else {
            document.body.classList.remove('modal-open');
        }
        
        return () => {
            document.body.classList.remove('modal-open');
        };
    }, [isOpen]);

    if (!isOpen) return null;

    // Determine if we have gallery images
    const hasGallery = project.gallery && project.gallery.length > 0;
    const isSingleImage = hasGallery && project.gallery.length === 1;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="close-modal" onClick={onClose}>
                    ×
                </button>
                <h3>{project.name}</h3>

                {/* Gallery Section */}
                {hasGallery && (
                    isSingleImage ? (
                        <div className="single-image-container">
                            <div className="single-image-wrapper">
                                <img 
                                    src={project.gallery[0]} 
                                    alt={`${project.name} screenshot`}
                                    className="single-gallery-image"
                                />
                            </div>
                        </div>
                    ) : (
                        <div className="gallery-grid">
                            {project.gallery.map((image, index) => (
                                <div key={index} className="gallery-item">
                                    <img 
                                        src={image} 
                                        alt={`${project.name} screenshot ${index + 1}`}
                                    />
                                </div>
                            ))}
                        </div>
                    )
                )}

                <p className='overview'>Core Technologies:</p>
                <div className="tech-stack">
                    {project.tech.map(tech => (
                        <TechStack key={tech} name={tech} />
                    ))}
                </div>
                <p className='overview'>Idea:</p>
                <p className='pj-desc'>{project.desc}</p>
                {project.deployment && <p className='overview'>Dev & Ops:</p>}
                {project.deployment && <p className='pj-desc'>{project.deployment}</p>}
                {project.notableFeatures && <p className='overview'>Notable Features:</p>}
                {project.notableFeatures && (
                    <ul className='feature-list'>
                        {project.notableFeatures.map((feature, index) => (
                            <li key={index} className='pj-desc'>{feature}</li>
                        ))}
                    </ul>
                )}
                <div className="modal-buttons">
                    {project.github && <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub</a>}
                    {project.demo && <a href={project.demo} target="_blank" rel="noopener noreferrer">Live Demo</a>}
                </div>
            </div>
        </div>
    );
}