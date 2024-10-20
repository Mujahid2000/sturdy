import { useContext, useEffect, useState } from 'react';
import videoBg from '../assets/bannerBG.mp4';
import logo from '../assets/logo.png';
import './Banner.css';
import '../Layout/Navbar.css';
import { MyContext } from '../StateManage/StateMangeContext';
import { FaVolumeUp, FaVolumeMute } from 'react-icons/fa'; // Import sound icons

const Banner = () => {
  const [isMuted, setIsMuted] = useState(true);
  const { downArrow, setDownArrow } = useContext(MyContext);

  useEffect(() => {
    const videoElement = document.getElementById('banner-video');
    const customCursor = document.getElementById('custom-cursor');

    const moveCursor = (e) => {
      customCursor.style.left = `${e.clientX}px`;
      customCursor.style.top = `${e.clientY}px`;
    };

    const updateCursorIcon = () => {
      if (isMuted) {
        customCursor.style.background = "url('https://i.ibb.co/wWYwhzW/images-removebg-preview-1.png') no-repeat center center";
      } else {
        customCursor.style.background = "url('https://i.ibb.co/1MG7Cjp/images-removebg-preview.png') no-repeat center center";
      }
      customCursor.style.backgroundSize = '25px 25px'; 
    };

    // Update cursor icon when isMuted changes
    updateCursorIcon();

    if (window.innerWidth >= 768) {
      window.addEventListener('mousemove', moveCursor);
    }
  
    return () => {
      window.removeEventListener('mousemove', moveCursor);
    };
  }, [isMuted]);

  const onMute = () => {
    setIsMuted((prevState) => !prevState);
  };

  const handleMenu = () => {
    setDownArrow(!downArrow);
  };

  return (
    <div className="relative w-full pt-28" onClick={() => onMute()}>
      <video
        src='https://player.vimeo.com/progressive_redirect/playback/943453069/rendition/1080p/file.mp4?loc=external&signature=a135f50c1dddc6d892218e3dcb0487865deeca880e0d2e858f584f6e02798f9e'
        autoPlay
        loop
        muted={isMuted}
        id="banner-video"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <button
        onClick={() => handleMenu()}
        className="absolute z-40 right-2 top-5 block md:hidden backdrop-blur-lg cursor-pointer bg-black/60 text-white font-semibold px-4 py-2 rounded-full"
      >
        Menu
      </button>
      {/* Sound button only visible on mobile */}
      <button
        onClick={onMute}
        className="absolute z-40 right-20 top-5 block md:hidden backdrop-blur-lg cursor-pointer bg-black/60 text-white font-semibold px-4 py-2 rounded-full"
      >
        {isMuted ? <FaVolumeMute size={20} /> : <FaVolumeUp size={20} />}
      </button>

      <div className="absolute inset-0 bg-black opacity-70 z-0"></div>
      <div className="relative z-10 flex flex-col top-[8%] items-center h-full">
        <div className="text-white text-[10rem] font-bold tracking-tight leading-none">
          <img src={logo} alt="Logo" className="logo-image top-[13%] md:top-[18%]" />
        </div>
        <div className="w-full md:w-[38%] mt-[100%] md:mt-[16%]">
          <div className="mt-[4.4rem] md:mt-4 text-sm md:text-3xl font-semibold text-white text-center">
            VISUAL INNOVATION AND EXPERIENCES FOR WORLD CLASS ARTISTS AND BRANDS.
          </div>
          <div className="md:flex flex-wrap gap-4 justify-center pb-7 mt-5 hidden">
            <button className="px-3 border border-slate-700 py-1 rounded-full text-xs backdrop-blur-lg text-white">
              CREATIVE DIRECTION
            </button>
            <button className="px-3 border border-slate-700 py-1 rounded-full text-xs backdrop-blur-lg text-white">
              SHOW DESIGN
            </button>
            <button className="px-3 border border-slate-700 py-1 rounded-full text-xs backdrop-blur-lg text-white">
              3D ANIMATION
            </button>
            <button className="px-3 border border-slate-700 py-1 rounded-full text-xs backdrop-blur-lg text-white">
              LIVE TECHNOLOGY
            </button>
            <button className="px-3 border border-slate-700 py-1 rounded-full text-xs backdrop-blur-lg text-white">
              EXPERIENCE DESIGN & PRODUCTION
            </button>
            <button className="px-3 border border-slate-700 py-1 rounded-full text-xs backdrop-blur-lg text-white">
              CONTENT PRODUCTION
            </button>
            <button className="px-3 border border-slate-700 py-1 rounded-full text-xs backdrop-blur-lg text-white">
              MERCH DESIGN
            </button>
            <button className="px-3 border border-slate-700 py-1 rounded-full text-xs backdrop-blur-lg text-white">
              BRANDING
            </button>
            <button className="px-3 border border-slate-700 py-1 rounded-full text-xs backdrop-blur-lg text-white">
              MEDIA CAMPAIGNS
            </button>
          </div>
        </div>
      </div>
      {/* Custom cursor */}
      <div id="custom-cursor" className="custom-cursor hidden md:block"></div>
    </div>
  );
};

export default Banner;
