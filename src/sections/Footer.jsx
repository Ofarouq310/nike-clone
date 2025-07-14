import nikeLogo from "../assets/images/footer-logo.svg";

export default function Footer() {
  return (
    <section className="bg-black">
      <footer className=" text-white padding-x p-16 w-full flex gap-20 items-start flex-wrap max-lg:flex-col max-container">
        <div className="flex items-start justify-start flex-col gap-5 ">
          <img src={nikeLogo} alt="Nike logo" width={150} height={46} />
          <p className="sm:max-w-sm">Get shoes ready for the new term at your nearest Nike store. Find Your perfect Size In Store. Get Rewards</p>
        </div>

        <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap">
          <div className="flex items-start flex-col min-w-30 ">
            <h3 className="text-2xl font-medium mb-6">Products</h3>
            <ul className="flex flex-col gap-2">
              <li>Air Force 1</li>
              <li>Air Max 1</li>
              <li>Air Jordan 1</li>
              <li>Air Force 2</li>
            </ul>
          </div>
          <div className="flex items-start flex-col min-w-30 ">
            <h3 className="text-2xl font-medium mb-6">Help</h3>
            <ul className="flex flex-col gap-2">
              <li>About us</li>
              <li>FAQs</li>
              <li>How it works</li>
              <li>Privacy police</li>
              <li>Payment policy</li>
            </ul>
          </div>
          <div className="flex items-start flex-col min-w-30 ">
            <h3 className="text-2xl font-medium mb-6">Get in touch</h3>
            <ul className="flex flex-col gap-2">
              <li>customer@nike.com</li>
              <li>+92554862345</li>
            </ul>
          </div>
        </div>
      </footer>
    </section>
  )
}
