import { useEffect, useState } from 'react'
import OffCanvasMenu from 'src/GlobalComponents/OffCanvasMenu'
import Logo from 'src/GlobalComponents/Logo';

const Header = () => {

    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
      function handleScroll() {
        const scroll = window.scrollY;
        if (scroll < 1) {
          setIsSticky(false);
        } else {
          setIsSticky(true);
        }
      }
  
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

    const [isOffcanvasOpen, setIsOffcanvasOpen] = useState(false);

  const toggleOffcanvas = () => {
    setIsOffcanvasOpen(!isOffcanvasOpen);
  };
    
  return (
    <>
  <header id="sticky-header" className={`xl:px-12 absolute left-0 top-0 w-full z-10 ${isSticky ? 'is-sticky' : ''}`}>
    <div className="flex pl-4 xl:pl-0">
      <div className="flex-1 flex items-center justify-between border-b border-black-800 border-opacity-40">
        <Logo/>
        {/* Link Start */}
        <a href="contact.html" className="flex items-center flex-wrap py-[6px] px-3 text-[15px] font-bold text-active leading-none mr-2 transition-all duration-300 hover:text-orange md:hover:text-white group">Contact me
          <span className="inline-block ml-3 group-hover:animate-arrow-move-up">
            <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7 17L17 7" stroke="currentColor" strokeOpacity="0.9" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
              <path d="M7 7H17V17" stroke="currentColor" strokeOpacity="0.9" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </a>
        {/* Link End */}
      </div>
      {/* Button Start */}
      <div id="offcanvas-toggle" className="flex-none bg-active flex items-center flex-wrap justify-center py-7 px-[38px] cursor-pointer" onClick={toggleOffcanvas} >
        <button >
          <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x={3} y={8} width={18} height={2} fill="white" />
            <rect x={3} y={14} width={18} height={2} fill="white" />
          </svg>
        </button>
      </div>
      {/* Button End */}
    </div>
  </header>
    <OffCanvasMenu isOffcanvasOpen={isOffcanvasOpen} toggleOffcanvas={toggleOffcanvas}/>

    </>
  )
}

export default Header