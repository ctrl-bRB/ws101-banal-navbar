import React from "react"; 
import './About.css';

const About = () => {
   

    return (
        <div className="Button-Link">
            <div className="video-responsive">
                <iframe 
                    src="https://www.youtube.com/embed/HaWce-m_LtI?autoplay=1&mute=1&loop=1&playlist=HaWce-m_LtI" 
                    title="YouTube Video" 
                    frameBorder="0" 
                    allow="autoplay; encrypted-media" 
                    allowFullScreen
                ></iframe>
            </div>
            
        </div>
    );
};

export default About;