import React, { useEffect, useState } from "react";
import { useAppContext } from "../context/AppContext";
import ProductCard from "../components/ProductCard";

const AllProducts = () => {
  const { products, searchQuery } = useAppContext();
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    if (searchQuery.length > 0) {
      setFilteredProducts(
        products.filter((product) =>
          product.name.toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
    } else {
      setFilteredProducts(products);
    }
  }, [products, searchQuery]);

  return (
    <div className="mt-8 flex flex-col">
      <div className="flex justify-center">
        <div className="flex flex-col items-center w-max">
          <p className="text-2xl font-medium uppercase">All Products</p>
          <div className="w-18 h-0.5 bg-orange-500 rounded-full"></div>
          <div className="w-14 h-0.5 bg-orange-500 rounded-full mt-0.5"></div>
          <div className="w-10 h-0.5 bg-orange-500 rounded-full mt-0.5"></div>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:gird-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-6 mt-6">
        {filteredProducts
          .filter((product) => product.inStock)
          .map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
      </div>
    </div>
  );
};

export default AllProducts;
