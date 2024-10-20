import { useState, useEffect } from 'react';

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

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isScrolling, setIsScrolling] = useState(false);

    const handleScroll = (event) => {
        if (isScrolling) return; // Prevent further scrolling actions

        setIsScrolling(true);
        // Check the direction of the scroll
        if (event.deltaY > 0 && currentIndex < texts.length - 1) {
            setCurrentIndex(prevIndex => prevIndex + 1);
        } else if (event.deltaY < 0 && currentIndex > 0) {
            setCurrentIndex(prevIndex => prevIndex - 1);
        }

        // Set a timeout to re-enable scrolling after processing
        setTimeout(() => {
            setIsScrolling(false);
        }, 500); // Delay to allow the scroll event to finish processing

        // Prevent default scroll behavior
        event.preventDefault();
    };

    useEffect(() => {
        window.addEventListener('wheel', handleScroll);

        // Cleanup event listener on unmount
        return () => {
            window.removeEventListener('wheel', handleScroll);
        };
    }, [currentIndex, isScrolling]);

    return (
        <div className="h-screen flex justify-center items-center overflow-hidden">
            <div className="text-[2.5rem]">
                {texts.map((text, index) => (
                    <div
                        key={index}
                        className={`my-2 transition-all duration-500`}
                        style={{
                            textAlign: currentIndex === index ? 'right' : 'left',
                            
                            pointerEvents: currentIndex === index ? 'none' : 'none', // Disable pointer events for inactive texts
                        }}
                    >
                        {text}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TextScroll;
