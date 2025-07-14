import ReviewCard from '../components/ReviewCard';
import { customerReviews } from '../constants/index.js';

export default function CustomerReview() {
  return (
    <section className="max-container flex flex-col items-center justify-center gap-10">
      <h2 className="text-5xl font-bold font-palanquin text-center">What our <span className="text-coral-red">Customers</span> say?</h2>
      <p className="text-slate-600 text-lg max-w-lg text-center">Hear genuine stories from our satisfied customers about their exceptional experiences with us.</p>
      <div className="flex flex-1 justify-evenly items-center gap-20 max-lg:flex-col mt-18">
        {customerReviews.map((review, index) => (
          <ReviewCard key={index}
            customerName={review.name}
            customerPhoto={review.photo}
            customerRating={review.rating}
            customerReview={review.review}
          />
        ))}
      </div>
    </section>
  )
}
