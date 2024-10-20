import  { useEffect, useState } from 'react';
import TextMobile from '../MobileDevice/TextMobile';
import TextScroll from '../TextAnimation/Text';

const ShowText = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768); 

    useEffect(() =>{
        const handleResize = () =>{
          setIsMobile(window.innerWidth < 768)
        }
        handleResize();
        window.addEventListener('resize', handleResize);
    
        return() =>{
          window.removeEventListener('resize', handleResize)
        }
      },[])
    return (
        <div>
            {
                isMobile ? <TextMobile/> : <TextScroll/>
            }
        </div>
    );
};

export default ShowText;