import React from 'react'
import heroImg from "../../assets/images/hero.svg";
import CountUp from 'react-countup';


const Hero = () => {
  return (
   <section className='pt-0' id='about'>
     <div className='container pt-14'>
        <div className='md:flex items-center justify-between sm:flex-col md:flex-row'>
      {/*=========== hero left contnt =====*/}
      <div className='w-full md:basis-1/2'>
        <h5 
        data-aos='fade-right'
        data-aos-duration='1500'
        className='text-headingColor font-[600] text-[16px]'
        >
            Hello Welcome
        </h5>
        <h1   data-aos='fade-up'
        data-aos-duration='1500'
        className='text-headingColor font-[800] text-[1.8rem] sm:text-[40px] leading-[35px] sm:leading-[46px] mt-5 '
        >I'm Tabrez Khan <br />Software Developer</h1>

        <div 
        data-aos='fade-up'
        data-aos-duration='1800'
        data-aos-delay="200"
        className='flex items-center gap-6 mt-7'
        >
            <a href="#contact">
                <button className='bg-primaryColor text-white font-[500] flex items-center gap-2 hover:bg-smallTextColor ease-in duration-300 py-2 px-4 rounded-[8px] '><i class="ri-mail-line">Hire me</i></button>
            </a>
            <a href="portfolio" className='text-smallTextColor font-[600] text-[16px] border-b border-solid border-smallTextColor ' >See Portfolio</a>
            
        </div>
        <p
             data-aos='fade-left'
             data-aos-duration='1500'
             className='flex gap-2 text-headingColor mt-14 font-[500] text-[15px] leading-7 sm:pr-10  '
            >
                <span>
                    <i class="ri-apps-2-line"></i>
                </span>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat ullam illum minima adipisci consequatur, maxime, corporis corrupti laborum obcaecati quod, quos quia officia magnam pariatur.
            </p>

          <div className='flex items-center  gap-9 mt-14 '>
             <span className='text-smallTextColor text-[15px] font-[600] '> Follow me</span>
             <span>
                <a href="#youtube" className='text-smallTextColor text-[15px] font-[600]'><i class="ri-youtube-line"></i></a>
             </span>
             <span>
                <a href="#github" className='text-smallTextColor text-[15px] font-[600]'><i class="ri-github-fill"></i></a>
             </span>
             <span>
                <a href="#facebook" className='text-smallTextColor text-[15px] font-[600]'><i class="ri-facebook-line"></i></a>
             </span>
             <span>
                <a href="#instagram" className='text-smallTextColor text-[15px] font-[600]'><i class="ri-instagram-line"></i></a>
             </span>
          </div>

      </div>
       {/*=========== hero left end =====*/}

        {/*=========== hero Img =====*/}

        <div className="basis-1/3 mt-10 sm:mt-0 ">
            <figure className='flex items-center justify-center ' >
               <img src={heroImg} alt="" />
            </figure>
        </div>

         {/*=========== hero Img end =====*/}
         {/*=========== hero content right=====*/}
        
        <div className='md:basis-1/5 flex justify-between text-center mt-10 flex-wrap gap-3 md:mt-0 md:flex-col md:justify-end md:text-end '>
         <div className="mb-10 ">
            <h2 className='text-headingColor font-[700] text-[32px]  '>

                <CountUp start={0} end={6} duration={2} suffix='+' />

            </h2>
            <h4  className='text-headingColor font-[700] text-[18px]'> Years of experience</h4>
         </div>

         <div className="mb-10 ">
            <h2 className='text-headingColor font-[700] text-[32px]  '>

                <CountUp start={0} end={100} duration={2} suffix='+' />

            </h2>
            <h4  className='text-headingColor font-[700] text-[18px]'> Success Rate </h4>
         </div>

         <div className="mb-10 ">
            <h2 className='text-headingColor font-[700] text-[32px]  '>

                <CountUp start={0} end={150} duration={2} suffix='+' />

            </h2>
            <h4  className='text-headingColor font-[700] text-[18px]'> Happy Client</h4>
         </div>
         <div className="mb-10 ">
            <h2 className='text-headingColor font-[700] text-[32px]  '>

                <CountUp start={0} end={50} duration={2} suffix='+' />

            </h2>
            <h4  className='text-headingColor font-[700] text-[18px]'> Project Completed</h4>
         </div>
        </div>

         {/*=========== hero content right end =====*/}

        </div>
     </div>
   </section>
  )
}

export default Hero