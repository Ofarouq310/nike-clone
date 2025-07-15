
export default function Subscribe() {
  return (
    <section className="flex justify-between max-lg:flex-col items-center gap-10 max-container" id="contact">
      <h2 className="text-center text-5xl font-bold font-palanquin leading-16 lg:max-w-md">Sign Up for <span className="text-coral-red">Updates</span> & Newsletter</h2>
      <div className="flex justify-between p-2.5 gap-4 max-w-2xl w-full rounded-full max-sm:flex-col sm:border sm:border-slate-gray ">
        <input type="email" placeholder="subscribe@nike.com" className="max-sm:border max-sm:border-slate-600 rounded-full p-5" />
        <button className="btn">Sign Up</button>
      </div>
    </section>
  )
}
