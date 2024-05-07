import SocialIcons from "./SocialIcons"

const Footer = () => {
  return (
   <footer className="footer bg-black-800 pt-[80px] lg:pt-[100px] xl:pt-[120px] pb-[60px]">
  <div className="container">
    <div className="overflow-x-hidden" data-aos="flip-down">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
        <div className="pt-12">
          <h3 className="text-white font-Syne font-bold text-4xl lg:text-5xl xl:text-[64px] tracking-[-1.5px]"><span className="relative z-[1] before:rounded-full before:bg-primary before:block before:absolute before:top-[8px] before:left-[0] before:-z-[1] before:w-[36px] lg:before:w-[48px] xl:before:w-[60px] before:h-[36px] lg:before:h-[48px] xl:before:h-[60px]">Le</span>                                t’s work together</h3>
          <div className="flex flex-wrap items-center mt-10">
            <span className="text-xl font-bold font-Syne text-white">Based in Germany |</span>
            <div className="ml-5 md:ml-[5px] lg:ml-0 xl:ml-[16px] 2xl:ml-5">
             
              <SocialIcons/>
            </div>
          </div>
        </div>
        <div className="py-9 px-7 border-border-white border rounded-2xl flex flex-col justify-between group">
          <h3 className="text-xl font-bold font-Syne text-white">Looking for a hectic designer?</h3>
          <div className="flex justify-between items-center">
            <p className="text-2xl font-bold font-Syne leading-none text-orange ">hello@henry.com</p>
            <a href="#" className="text-white group-hover:animate-arrow-move-up group-hover:text-orange">
              <svg width={40} height={40} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.6667 28.3334L28.3334 11.6667" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M11.6667 11.6667H28.3334V28.3334" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>
        <div className="py-9 px-7 border-border-white border rounded-2xl flex flex-col justify-between group">
          <h3 className="text-xl font-bold font-Syne text-white">Want a more in-depth look at my history?</h3>
          <div className="flex justify-between items-center">
            <p className="text-2xl font-bold font-Syne leading-none text-orange">+598 6879 9874</p>
            <a href="#" className="text-white group-hover:animate-arrow-move-up group-hover:text-orange">
              <svg width={40} height={40} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.6667 28.3334L28.3334 11.6667" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M11.6667 11.6667H28.3334V28.3334" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-6">
        <div className="py-[72px]">
          <svg className="w-full" width={1281} height={77} viewBox="0 0 1281 77" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M95.28 67.88H77.28L142.8 0.199951H172.8V77H142.8V24.68L151.8 28.4L104.4 77H68.4L20.88 28.52L30 24.8V77H0V0.199951H30L95.28 67.88Z" fill="#FFE9D9" />
            <path d="M199.289 65.36V47.36H281.369V65.36H199.289ZM172.409 77L223.889 0.199951H257.249L309.209 77H276.209L231.689 8.23995H249.569L205.409 77H172.409Z" fill="#FFE9D9" />
            <path d="M308.828 77V0.199951H401.588C408.868 0.199951 415.388 1.03995 421.148 2.71995C426.988 4.31995 431.588 7.03995 434.948 10.88C438.388 14.72 440.108 19.96 440.108 26.6C440.108 31 439.308 34.64 437.708 37.52C436.108 40.4 433.908 42.64 431.108 44.24C428.308 45.84 425.108 47 421.508 47.72C417.908 48.44 414.148 48.88 410.228 49.04L401.468 47.36C410.988 47.44 418.308 47.84 423.428 48.56C428.628 49.28 432.228 50.6 434.228 52.52C436.308 54.36 437.348 57.04 437.348 60.56V77H407.348V64.16C407.348 61.76 406.868 59.96 405.908 58.76C405.028 57.48 403.028 56.6 399.908 56.12C396.868 55.64 392.148 55.4 385.748 55.4H338.828V77H308.828ZM338.828 35.36H401.588C403.988 35.36 405.988 34.96 407.588 34.16C409.268 33.36 410.108 31.84 410.108 29.6C410.108 27.52 409.268 26.12 407.588 25.4C405.988 24.6 403.988 24.2 401.588 24.2H338.828V35.36Z" fill="#FFE9D9" />
            <path d="M510.679 39.2V32.48L579.919 77H535.279L476.479 36.2L530.719 0.199951H573.439L510.679 39.2ZM446.719 0.199951H476.719V77H446.719V0.199951Z" fill="#FFE9D9" />
            <path d="M635.328 26.72H719.808V49.52H635.328V26.72ZM716.448 0.199951H746.448V77H716.448V0.199951ZM609.648 0.199951H639.648V77H609.648V0.199951Z" fill="#FFE9D9" />
            <path d="M783.281 44.6V54.2H874.481V77H753.281V0.199951H874.241V23H783.281V32.6H857.681V44.6H783.281Z" fill="#FFE9D9" />
            <path d="M1000.4 53.48L989.239 59.84V0.199951H1019.24V77H989.239L898.879 24.68L910.039 18.2V77H880.039V0.199951H910.039L1000.4 53.48Z" fill="#FFE9D9" />
            <path d="M1026.02 77V0.199951H1118.78C1126.06 0.199951 1132.58 1.03995 1138.34 2.71995C1144.18 4.31995 1148.78 7.03995 1152.14 10.88C1155.58 14.72 1157.3 19.96 1157.3 26.6C1157.3 31 1156.5 34.64 1154.9 37.52C1153.3 40.4 1151.1 42.64 1148.3 44.24C1145.5 45.84 1142.3 47 1138.7 47.72C1135.1 48.44 1131.34 48.88 1127.42 49.04L1118.66 47.36C1128.18 47.44 1135.5 47.84 1140.62 48.56C1145.82 49.28 1149.42 50.6 1151.42 52.52C1153.5 54.36 1154.54 57.04 1154.54 60.56V77H1124.54V64.16C1124.54 61.76 1124.06 59.96 1123.1 58.76C1122.22 57.48 1120.22 56.6 1117.1 56.12C1114.06 55.64 1109.34 55.4 1102.94 55.4H1056.02V77H1026.02ZM1056.02 35.36H1118.78C1121.18 35.36 1123.18 34.96 1124.78 34.16C1126.46 33.36 1127.3 31.84 1127.3 29.6C1127.3 27.52 1126.46 26.12 1124.78 25.4C1123.18 24.6 1121.18 24.2 1118.78 24.2H1056.02V35.36Z" fill="#FFE9D9" />
            <path d="M1280.96 0.199951L1232.36 57.44V77H1202.36V57.44L1153.76 0.199951H1189.16L1228.64 50H1206.44L1245.56 0.199951H1280.96Z" fill="#FFE9D9" />
          </svg>
        </div>
      </div>
      <div className="border-t border-border-white pt-6 ">
        <div className="grid grid-cols-12">
          <div className="col-span-12 sm:col-span-8 order-last sm:order-first">
            <p className="text-white text-lg font-normal font-sans leading-7">©2023 Mark Henry, All Rights Reserved
            </p>
          </div>
          <div className="col-span-12 sm:col-span-4 order-first sm:order-last">
            <div className="flex justify-end mb-2 sm:mb-0">
              <a id="scrollUp" className="flex flex-wrap items-center gap-2 group" href="#" aria-label="scroll up">
                <span className="text-white text-lg font-normal font-sans leading-7 transition-all group-hover:text-orange">Back
                  to
                  Top</span>
                <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 19V5" stroke="#FFB646" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M19 12L12 5L5 12" stroke="#FFB646" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</footer>

  )
}

export default Footer
