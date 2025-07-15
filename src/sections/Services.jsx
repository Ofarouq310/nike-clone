import { services } from "../constants/index.js";

export default function Services() {
  return (
    <section className="flex max-container justify-center flex-wrap gap-9">
        {services.map((service, index)=>{
          return (
            <div key={index} className="flex flex-1 flex-col items-start gap-4 shadow-2xl px-10 py-16 rounded-2xl sm:w-[350px] sm:min-w-[350px] w-full">
              <div className="w-11 h-11 flex justify-center items-center bg-coral-red rounded-full">
                <img src={service.icon} alt={`${service.title} icon`} />
              </div>
              <h3 className="text-3xl font-bold font-palanquin">{service.title}</h3>
              <p className="text-gray-600 text-lg">{service.description}</p>
            </div>
          )
        })}
    </section>
  )
}
