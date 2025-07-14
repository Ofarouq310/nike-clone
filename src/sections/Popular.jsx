import { shoe4, shoe5, shoe6, shoe7 } from "../assets/images/index.js";
import starIcon from '../assets/icons/star.svg';

export default function Popular() {
  return (
    <section className="max-container" id="products">
      <h2 className="text-4xl font-palanquin font-bold mb-6">
        Our  
         <span className="text-coral-red"> Popular </span> Products
      </h2>

      <p className="text-slate-600 text-md max-w-lg">Experience top-notch quality and style with our sought-after selections.
        Discover a world of comfort, design, and value
      </p>

      <div className="flex items-center max-sm:justify-center justify-between mt-12 flex-wrap gap-3">
        <div className="flex flex-col gap-4 justify-center">
          <img src={shoe4} alt="shoe-image" className="thumbnail-hover"></img>
          <p className="flex items-center gap-2 text-xl font-light text-slate-600 ">
            <img src={starIcon} alt="star icon" className="inline-block"/> 
            (4.5)
          </p>
          <p className="text-2xl font-semibold">Nike Air Jordan-01</p>
          <p className="text-coral-red text-2xl font-semibold">$220.20</p>
        </div>
        
        <div className="flex flex-col gap-4 justify-center">
          <img src={shoe5} alt="shoe-image" className="thumbnail-hover"></img>
          <p className="flex items-center gap-2 text-xl font-light text-slate-600 ">
            <img src={starIcon} alt="star icon" className="inline-block"/> 
            (4.5)
          </p>
          <p className="text-2xl font-semibold">Nike Air Jordan-02</p>
          <p className="text-coral-red text-2xl font-semibold">$211.70</p>
        </div>

        <div className="flex flex-col gap-4 justify-center">
          <img src={shoe6} alt="shoe-image" className="thumbnail-hover"></img>
          <p className="flex items-center gap-2 text-xl font-light text-slate-600 ">
            <img src={starIcon} alt="star icon" className="inline-block"/> 
            (4.5)
          </p>
          <p className="text-2xl font-semibold">Nike Air Jordan-03</p>
          <p className="text-coral-red text-2xl font-semibold">$244.00</p>
        </div>

        <div className="flex flex-col gap-4 justify-center">
          <img src={shoe7} alt="shoe-image" className="thumbnail-hover"></img>
          <p className="flex items-center gap-2 text-xl font-light text-slate-600 ">
            <img src={starIcon} alt="star icon" className="inline-block"/> 
            (4.5)
          </p>
          <p className="text-2xl font-semibold">Nike Air Jordan-04</p>
          <p className="text-coral-red text-2xl font-semibold">$290.30</p>
        </div>
      </div>

    </section>
  )
}
