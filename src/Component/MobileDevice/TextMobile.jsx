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

    const [currentIndex, setCurrentIndex] = useState(0); // Start at index 0

    useEffect(() => {
        const handleScroll = (event) => {
            // Check the direction of the scroll
            if (event.deltaY > 0) {
                // Scroll down
                setCurrentIndex(prevIndex => 
                    prevIndex < texts.length - 1 ? prevIndex + 1 : 0 // Wrap to 0
                );
                event.preventDefault(); // Prevent default scroll behavior
            } else if (event.deltaY < 0) {
                // Scroll up
                setCurrentIndex(prevIndex => 
                    prevIndex > 0 ? prevIndex - 1 : texts.length - 1 // Wrap to last index
                );
                event.preventDefault(); // Prevent default scroll behavior
            }
        };

        window.addEventListener('wheel', handleScroll);

        // Cleanup event listener on unmount
        return () => {
            window.removeEventListener('wheel', handleScroll);
        };
    }, [texts.length]);

    return (
        <div className="">
            <div className="flex flex-col h-[300vh]">
                {texts.map((text, index) => (
                    <div
                        key={index}
                        className={`my-2 text-[2.5rem] transition-all duration-500 text-left ${
                            index <= currentIndex ? 'text-right' : 'text-left'
                        }`}
                    >
                        {text}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TextScroll;
