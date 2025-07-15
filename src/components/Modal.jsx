import starIcon from '../assets/icons/star.svg';

export default function Modal({ image, alt, rating, price, onClose }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center bg-[#000000c9] justify-center px-8 py-6">
      <div className="relative bg-pale-blue shadow-2xl rounded-xl flex flex-col md:flex-row sm:max-w-2xl mx-auto overflow-hidden">

        <button
          onClick={onClose}
          className="absolute top-2 right-4 text-4xl text-slate-500 hover:text-black cursor-pointer"
          aria-label="Close modal"
        >
          &times;
        </button>

        <div className="p-8 w-full flex flex-col items-center justify-center gap-5 sm:gap-10">
          <h3 className="sm:text-4xl text-xl text-slate-700 font-semibold font-palanquin text-center">
            {<span className='text-coral-red'>{alt.slice(0,4)}</span>}
            {alt.slice(4)}
          </h3>
          <p className="text-coral-red sm:text-2xl font-semibold">{price}</p>
          <div className="flex items-center gap-2 text-md font-md text-slate-600">
            <img src={starIcon} alt="star icon" className="w-4 h-4" />
            {rating}
          </div>
        </div>

        <div className="bg-collection bg-cover bg-right p-8 w-full flex justify-center items-center">
          <img src={image} alt={alt} className="max-w-xs" />
        </div>
      </div>
    </div>
  );
}
