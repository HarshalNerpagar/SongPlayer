import React, { useEffect, useState } from 'react';
import MyCarousel from '../components/Carousel';
import Toast from './toast';

const HomePage = () => {


  return (
    <div className=' mt-20 bg-[#E9E7E7]'>
      <MyCarousel title={"Tending Songs"} 
      api={'https://academics.newtonschool.co/api/v1/musicx/song?featured=Trending%20songs'}/>

      <MyCarousel title={"Romantic"} 
      api={'https://academics.newtonschool.co/api/v1/musicx/song?mood=romantic'}/>

      <MyCarousel title={"Happy"} 
      api={'https://academics.newtonschool.co/api/v1/musicx/song?mood=happy'}/>

      <MyCarousel title={"Excited"} 
      api={'https://academics.newtonschool.co/api/v1/musicx/song?mood=excited'}/>

      <MyCarousel title={"Sad"} 
      api={'https://academics.newtonschool.co/api/v1/musicx/song?mood=sad'}/>
    </div>  
      

  );
};

export default HomePage;
