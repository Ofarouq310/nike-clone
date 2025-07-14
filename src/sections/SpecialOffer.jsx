import { offer } from "../assets/images/index.js"
import { arrowRight } from "../assets/icons/index.js";

export default function SpecialOffer() {
  return (
    <section className="flex justify-between items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1">
        <img src={offer} alt="Special Offer" className="w-full h-auto object-cover" />
      </div>

      <div className="flex-1 flex flex-col gap-6">
        <h2 className="text-5xl font-palanquin font-bold"><span className="text-coral-red">Special</span> Offer</h2>
        <p className="text-lg text-slate-600">Embark on a shopping journey that redefines your experience with unbeatable deals.
           From premier selections to incredible savings, we offer unparalleled value that sets us apart.
        </p>
        <p className="text-lg text-slate-600">
          Navigate a realm of possibilities designed to fulfill your unique desires,
          surpassing the loftiest expectations. Your journey with us is nothing short of exceptional.
        </p>
        <div className="flex items-center gap-4 mb-6">
          <button className="btn">Shop now <img src={arrowRight} alt="right arrow icon"></img></button>
          <button className="btn bg-white text-slate-700 border-slate-700 border">Learn more</button>
        </div>
      </div>
    </section>
  )
}
