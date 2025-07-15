import { shieldTick, truckFast, support } from "../assets/icons/index.js";
import { customer1, customer2, thumbnailShoe1, thumbnailShoe2, thumbnailShoe3 } from "../assets/images/index.js";
import { bigShoe1, bigShoe2, bigShoe3 } from "../assets/images/index.js";
import { shoe4, shoe5, shoe6, shoe7, shoe8 } from "../assets/images/index.js";

// Thumbnail collection's data
export const thumbnailCollection = [{
    image: thumbnailShoe1,
    alt: "Shoe1",
    fullImg: bigShoe1
}, {
    image: thumbnailShoe2,
    alt: "Shoe2",
    fullImg: bigShoe2
}, {    
    image: thumbnailShoe3,
    alt: "Shoe3",
    fullImg: bigShoe3
}];


//Products list section's data
export const productsList = [{
    image: shoe4,
    alt: "Nike Air Jordan-01",
    rating: 4.5,
    price: "$290.30"
}, {
    image: shoe5,
    alt: "Nike Air Jordan-02",
    rating: 4.7,
    price: "$320.50"
}, {
    image: shoe6,
    alt: "Nike Air Jordan-03",
    rating: 4.8,
    price: "$350.00"
}, {
    image: shoe7,
    alt: "Nike Air Jordan-04",
    rating: 4.6,
    price: "$280.00"
}];  
 

// Our Service section's data
export const services = [{
    icon: truckFast,
    title: "Fast Delivery",
    description: "Get your orders delivered within 24 hours with our express shipping."
}, {
    icon: shieldTick,
    title: "Secure Payments",
    description: "We ensure secure transactions with our advanced encryption technology."
},  {
    icon: support,
    title: "24/7 Customer Support",
    description: "Our customer support team is available 24/7 to assist you."
}];


// Customer reviews section's data
export const customerReviews = [{
    photo: customer1,
    name: "Morich Brown",
    rating: 4.5,
    review: "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!"
}, {
    photo: customer2,
    name: "Lota Mongeskar",
    rating: 4.5,
    review: "The product not only met but exceeded my expectations. I'll definitely be a returning customer!"
}];

