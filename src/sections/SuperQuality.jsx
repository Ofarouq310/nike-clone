import {shoe8} from '../assets/images/index.js';
export default function SuperQuality() {
  return (
    <section className="lg:flex-row flex-col flex justify-center items-center max-container gap-10" id='about'>
      <div className="flex-1 flex flex-col items-start gap-4">
        <h2 className="text-5xl font-palanquin lg:max-w-lg font-bold mb-4">We Provide You <span className="text-coral-red">Super Quality</span> Shoes</h2>
        <p className="text-slate-600 text-lg lg:max-w-lg">Ensuring premium comfort and style, our meticulously crafted footwear is designed to elevate your experience,
          providing you with unmatched quality, innovation, and a touch of elegance.
        </p>
        <p className="text-slate-600 lg:max-w-lg">Our dedication to detail and excellence ensures your satisfaction</p>
        <button className="btn mt-11">View details</button>
      </div>
      <div className="flex-1 flex justify-center items-center">
        <img src={shoe8} alt="Super Quality Shoe" className="object-contain" width={570} height={522} />
      </div>
    </section>
  )
}
