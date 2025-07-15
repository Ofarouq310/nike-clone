import arrowRight from '../assets/icons/arrow-right.svg';
import {bigShoe1} from '../assets/images/index.js';
import ThumbnailShoe from '../components/ThumbnailShoe.jsx';
import {thumbnailCollection} from "../constants/index.js";
import { useState } from 'react';


export default function Hero() {

  const [heroImage, setHeroImage] = useState(bigShoe1);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleClick = (thumbnail, index) => {
    setHeroImage(thumbnail.fullImg);
    setSelectedIndex(index);
  }

  return (
    <section className="flex flex-col xl:flex-row justify-center pb-24 gap-10 max-container" id="home">
      <div className="flex flex-col gap-6 justify-center items-start pt-25 xl:w-2/5 max-sm:pl-8 sm:pl-16 min-[1450px]:pl-8 min-[1570px]:pl-0">
          <p className="text-coral-red text-lg">Our Summer collections</p>

          <h1 className='font-palanquin font-bold text-8xl/snug max-sm:text-7xl max-sm:leading-[100px] relative z-10'>
            <span className=' xl:whitespace-nowrap bg-white pr-5'>The New Arrival</span>
            <br />
            <span className="text-coral-red">Nike</span> Shoes 
          </h1>

          <p className="sm:mb-12 text-slate-600 text-lg max-w-lg">Discover the latest trends in Nike shoes. Shop now and elevate your style with our new arrivals.</p>

        <button className="btn">Shop now <img src={arrowRight} alt="right arrow icon"></img></button>

        <div className="flex items-center w-full space-x-8 mt-10">
          <p className="text-slate-600 text-sm inline-block text-center"><span className='text-5xl font-bold'>$50</span><br />Free shipping on orders over</p>
          <p className="text-slate-600 text-sm inline-block text-center"><span className='text-5xl font-bold'>30</span><br />-day return policy</p>
        </div>
      </div>

      <div className='relative flex-1 justify-center items-center xl:min-h-screen max-xl:py-40 bg-collection bg-cover bg-center'>
        <img src={heroImage} alt="Big Shoe" className="w-full h-full object-scale-down" width={610} height={502} />
        
        <div className="flex absolute justify-around -bottom-[5%] sm:left-[10%] px-5 gap-4"> 
          {thumbnailCollection.map((thumbnail, index) => {
            return(
              <ThumbnailShoe key={index} image={thumbnail.image} alt={thumbnail.alt} onClick={()=>handleClick(thumbnail, index)}  isSelected={index === selectedIndex} />
            )
          })}
        </div>
      </div>

    </section>
  )
}
