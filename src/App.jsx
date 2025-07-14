import Nav from "./components/Nav";
import {Hero, Popular, SuperQuality,
  Services, SpecialOffer, CustomerReview,
  Subscribe, Footer} from "./sections/index";

export default function App (){
  return (
    <main className="w-full h-full relative">
      <Nav />
      <section className="">
        <Hero />  
      </section>
      <section className="section-padding">
        <Popular />
      </section>
      <section className="section-padding">
        <SuperQuality />  
      </section>
      <section className="section-padding">
        <Services />
      </section>
      <section className="section-padding">
        <SpecialOffer />
      </section>
      <section className="bg-pale-blue section-padding">
        <CustomerReview />
      </section>
      <section className="padding-x sm:py-32 p-16 w-full">
        <Subscribe />
      </section>
      <Footer />
    </main>
  )
}