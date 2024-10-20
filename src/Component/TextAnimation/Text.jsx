import React, { useEffect, useState } from 'react';
import './text.css';

const TextScroll = () => {
    const texts = [
        'DRAKE',
        'BAD BUNNY',
        'LINKIN PARK',
        'PESO PLUMA',
        'KENDRICK LAMAR',
        'EVERYTHING ALWAYS',
        'RAUW ALEJANDRO',
        'TRAVIS SCOTT',
        'BABY KEEM',
        'REDBULL',
        'ROSALÍA',
        'BACARDI'
    ];

    const [scrollIndex, setScrollIndex] = useState(0);

    const handleScroll = (event) => {
         

        if (event.deltaY > 0 && scrollIndex < texts.length - 1) {
            // Scroll down: Only scroll if not at the last index
            // event.preventDefault(); 
            setScrollIndex((prevIndex) => prevIndex + 1);
        } else if (event.deltaY < 0 && scrollIndex > 0) {
            // Scroll up: Only scroll if not at the first index
            setScrollIndex((prevIndex) => prevIndex - 1);
            event.preventDefault(); 
        }
    };

    useEffect(() => {
        window.addEventListener('wheel', handleScroll, { passive: false }); // Make sure the event listener is non-passive
        return () => {
            window.removeEventListener('wheel', handleScroll);
        };
    }, [scrollIndex]);

    return (
        <div className="scroll-container h-4/5">
            {texts.map((text, index) => {
                const offset = index - scrollIndex;
                const rotation = offset * 30; // Rotate each item by 40 degrees
                const opacity = 1 - Math.abs(offset) * 0.2; // Fade out distant items
                const zIndex = texts.length - Math.abs(offset); // Ensure current text stays on top

                return (
                    <div
                        key={index}
                        className="scroll-item"
                        style={{
                            transform: `rotateX(${rotation}deg) translateZ(200px)`,
                            opacity,
                            zIndex,
                        }}
                    >
                        {text}
                    </div>
                );
            })}
        </div>
    );
};

export default TextScroll;
