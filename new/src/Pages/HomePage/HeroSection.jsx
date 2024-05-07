import { motion} from 'framer-motion'
import SocialIcons from 'src/GlobalComponents/SocialIcons'

const HeroSection = () => {

  const variants = {
    initial:{
      opacity:0,
      scale:0.5
    },
    animate:{
      opacity:1,
      scale:1,
      transition:{
        duration:1
      }
    }
  }

  return (
   
<section 
className="bg-secondary relative pt-[140px] pb-[125px]">
  <motion.div className="container" 
variants={variants}
initial="initial"
animate="animate">
    <div className="grid grid-cols-1 2xl:-mx-4">
      <div className="xl:pt-12">
        <motion.span className="font-Syne text-black-800 font-bold text-2xl lg:text-[32px] leading-none flex flex-wrap items-center mb-3">
          <span className="mr-6">
            <svg xmlns="http://www.w3.org/2000/svg" width={65} height={2} viewBox="0 0 65 2" fill="none">
              <path d="M0 1H65" stroke="#080808" />
            </svg>
          </span> Hello, I’m
          <img className="ml-2" src="assets/images/icon/victory.png" alt="icon" />
        </motion.span>
        <h1 className="relative z-[1] font-Syne text-black-800 font-bold text-[80px] lg:text-[100px] xl:text-[120px] 2xl:text-[140px] leading-[64px] lg:leading-[80px] xl:leading-[90px] 2xl:leading-[110px] 2xl:before:w-[120px] xl:before:w-[100px] 2xl:before:h-[120px] xl:before:h-[100px] before:rounded-full before:bg-primary before:block before:absolute before:top-[0px] before:left-0 before:-z-[1] lg:before:w-[85px] lg:before:h-[85px] before:w-[70px] before:h-[70px]" >
          Umer
          {/* <br /> Henry */}
        </h1>
        <h2 className="font-Syne text-black-800 font-bold text-[80px] lg:text-[100px] xl:text-[120px] 2xl:text-[140px] leading-[64px] lg:leading-[80px] xl:leading-[90px] 2xl:leading-[110px] mb-[20px]" >
          Khan</h2>
        <p className="font-Syne text-black-700 font-bold text-lg md:text-xl xl:text-2xl leading-tight mb-[30px]" >Software Developer | Based in Pakistan
        </p>
        <div className="flex flex-wrap mb-[30px] ">
          {/* Link Start */}
          <span>
            <a href="contact.html" className="flex items-center flex-wrap btn-primary mr-2 group">Let’s
              Talk
              <span className="inline-block ml-3 group-hover:animate-arrow-move-up">
                <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 17L17 7" stroke="currentColor" strokeOpacity="0.9" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M7 7H17V17" stroke="currentColor" strokeOpacity="0.9" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </a>
          </span>
          {/* Link End */}
          {/* Link Start */}
          <span >
            <a href="projects.html" className="flex items-center flex-wrap btn-primary-outline group">
              My Work
              <span className="inline-block ml-3 group-hover:animate-arrow-move-up">
                <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 17L17 7" stroke="currentColor" strokeOpacity="0.9" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M7 7H17V17" stroke="currentColor" strokeOpacity="0.9" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </a>
          </span>
          {/* Link End */}
        </div>
        <div className="flex flex-wrap items-center" >
        
          <div className="mt-1 sm:mt-0">
            <SocialIcons/>
          </div>
        </div>
      </div>
    </div>
  </motion.div>
  <div className="hidden md:block">
    <img className="absolute top-0 right-0 md:max-w-[420px] lg:max-w-[570px] xl:max-w-[650px] 2xl:max-w-[initial]" src="assets/images/hero/hero.png" alt="hero Image" />
  
  </div>
</section>

  )
}

export default HeroSection