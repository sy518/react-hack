import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(id);
  console.log(product);

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/${id}`)
      .then((res) => setProduct(res.data))
      .catch((err) => console.error(err));
  }, [id]);
  console.log(product, id);

  return (
    <div className="px-4 justify-center mx-auto py-10 sm:px-6 lg:px-20 bg-gray-100 min-h-screen">
      <Link
        to="/"
        className="text-green-900 underline mb-4 inline-block text-sm sm:text-base"
      >
        &larr; Back
      </Link>

      <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-10 items-center bg-white p-6 sm:p-8 rounded-lg shadow-2xl">
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="w-[250px] h-[180px] sm:w-[300px] sm:h-[200px] object-cover rounded-md hover:scale-105 transition-transform duration-300 ease-in-out"
          />
        </div>

        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3">
            {product.title}
          </h1>
          <p className="text-gray-700 mb-4 text-sm sm:text-base leading-relaxed">
            <strong>Price:</strong> ${product.price}
          </p>
          <p className="text-base sm:text-lg text-gray-900">
            {product.description}
          </p>
        </div>
      </div>
    </div>
  );
    
}

export default ProductDetails;
