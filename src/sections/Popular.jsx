import Modal from "../components/Modal.jsx";
import { productsList } from "../constants/index.js";
import ProductCard from "../components/ProductCard.jsx";
import { useState } from 'react'

export default function Popular() {

   const [selectedProduct, setSelectedProduct] = useState(null);
   const closeModal = () => setSelectedProduct(null);

  return (
    <section className="max-container" id="products">
      <h2 className="text-4xl font-palanquin font-bold mb-6">
        Our  
         <span className="text-coral-red"> Popular </span> Products
      </h2>

      <p className="text-slate-600 text-md max-w-lg">Experience top-notch quality and style with our sought-after selections.
        Discover a world of comfort, design, and value
      </p>

      <div className="flex items-center max-sm:justify-center justify-between mt-12 flex-wrap gap-3">
        {productsList.map((product, index) => {
          return (
            <ProductCard 
              key={index}
              image={product.image}
              onClick={() => setSelectedProduct(product)}
            />
          )
        })}
      </div>
       {selectedProduct && (
        <Modal
          image={selectedProduct.image}
          alt={selectedProduct.alt}
          rating={selectedProduct.rating}
          price={selectedProduct.price}
          onClose={closeModal}
        />
      )}
    </section>
  )
}
