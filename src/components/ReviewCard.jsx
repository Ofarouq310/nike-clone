import React from 'react'
import starIcon from '../assets/icons/star.svg'

export default function ReviewCard({customerName, customerPhoto, customerRating, customerReview}) {
  return (
   <div className="flex flex-col items-center justify-center gap-2">
            <img src={customerPhoto} alt={`${customerName}'s photo`} className="w-30 h-30 rounded-full mb-4" />
            <p className="text-gray-600 text-lg max-w-sm text-center">"{customerReview}"</p>
            <div className="flex items-center gap-2 text-xl font-light text-slate-600 mb-2">
              <img src={starIcon} alt="star icon" className="inline-block" />
              ({customerRating})
            </div>
            <h3 className="text-2xl font-semibold">{customerName}</h3>
    </div>
  )
}
