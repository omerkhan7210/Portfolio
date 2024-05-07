/* eslint-disable react/prop-types */
import {Link} from 'react-router-dom'
import SocialIcons from './SocialIcons';
import {AnimatePresence, motion} from 'framer-motion'
import { useRef } from 'react';

const OffCanvasMenu = ({isOffcanvasOpen,toggleOffcanvas}) => {

  const ref = useRef()
  

  const navItems = [
    { title: "Home", href: "/",   },
    { title: "About", href: "/about",   },
    { title: "Projects", href: "/projects",},
    { title: "Blogs", href: "/blogs",},
    { title: "Contact", href: "/contact",  }
  ];
  

  return (
    <div id="offcanvas" ref={ref} className={`offcanvas right-0 top-0 bottom-0 z-50 transform translate-x-full fixed h-full w-[350px] md:w-[460px] transition-all ease-in-out duration-300 bg-black-800 pl-8 flex flex-wrap flex-col justify-between ${isOffcanvasOpen ? 'offcanvas-open' : ''}`}>
    {/* close button start */}
    <div>
      <div className="flex flex-wrap justify-between items-center border-b border-border-white mb-[80px]">
        <a href="index.html">
          <img src="assets/images/logo/signature-logo.png" className="w-[100px]" alt="Umer Khan Signature" />
        </a>
        <button id="offcanvas-close" className="offcanvas-close bg-primary py-7 px-[38px]" aria-label="offcanvas" onClick={toggleOffcanvas}>
          <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M19.2803 4.71967C19.5732 5.01256 19.5732 5.48744 19.2803 5.78033L5.78033 19.2803C5.48744 19.5732 5.01256 19.5732 4.71967 19.2803C4.42678 18.9874 4.42678 18.5126 4.71967 18.2197L18.2197 4.71967C18.5126 4.42678 18.9874 4.42678 19.2803 4.71967Z" fill="white" />
            <path fillRule="evenodd" clipRule="evenodd" d="M4.71967 4.71967C5.01256 4.42678 5.48744 4.42678 5.78033 4.71967L19.2803 18.2197C19.5732 18.5126 19.5732 18.9874 19.2803 19.2803C18.9874 19.5732 18.5126 19.5732 18.2197 19.2803L4.71967 5.78033C4.42678 5.48744 4.42678 5.01256 4.71967 4.71967Z" fill="white" />
          </svg>
        </button>
      </div>
      
      <nav className="offcanvas-menu mr-[40px] flex flex-wrap flex-col justify-between">
        <ul>
          <AnimatePresence>
          {navItems.map((item,index)=>(
            <motion.li 
            initial={{opacity:0,x:100}}
            animate={{
              opacity:1,
              x:0,
              transition:{
                duration:1,
                delay:index*0.2
              }
            }}
            exit={{opacity:0,x:100}}
            key={index} 
            className="border-b border-border-white py-4 group">
            <Link to={item.href} className="text-white text-xl font-bold font-Syne leading-none flex flex-wrap items-center justify-between hover:text-blue-400 transition duration-300">{item.title}
              <span className="inline-block group-hover:animate-arrow-move-up">
                <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 17L17 7" stroke="currentColor" strokeOpacity="0.9" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M7 7H17V17" stroke="currentColor" strokeOpacity="0.9" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </Link>
          </motion.li>
          ))}
          </AnimatePresence>
          
        </ul>
      </nav>
    </div>
    <nav className="pb-10">
      <SocialIcons/>
    </nav>
  </div>
  )
}

export default OffCanvasMenu