import React from "react";
import Image from "next/image";

const featured = () => {
  const products = [
    {
      id: 1,
      name: "Library Stool Chair",
      price: "$20",
      tag: "New",
      image: "/chair1.png",
    },
    {
      id: 2,
      name: "Library Stool Chair",
      price: "$20.50",
      tag: "Sale",
      image: "/chair2.png",
    },
    {
      id: 3,
      name: "Library Stool Chair",
      price: "$20",
      tag: null,
      image: "/chair3.png",
    },
    {
      id: 4,
      name: "Library Stool Chair",
      price: "$20",
      tag: null,
      image: "/chair4.png",
    },
  ];

  return (
    <section className="featured-products py-16 px-6 md:px-12 bg-gray-50">
      {/* Section Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl space-x-2 md:text-4xl font-extrabold text-gray-800 ">
          Featured Products
        </h2>
      </div>

      {/* Products Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white border border-gray-200 rounded-lg shadow-md p-4 hover:shadow-lg transition-all"
          >
            {/* Product Tag */}
            {product.tag && (
              <span
                className={`tag px-3 py-1 text-sm font-medium rounded-full ${
                  product.tag === "New"
                    ? "bg-green-100 text-green-800"
                    : "bg-orange-100 text-orange-800"
                }`}
              >
                {product.tag}
              </span>
            )}

            {/* Product Image */}
            <div className="flex justify-center items-center h-48 mb-4">
              <Image
                src={product.image}
                alt={product.name}
                width={200}
                height={200}
                className="object-contain"
              />
            </div>

            {/* Product Name */}
            <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>

            {/* Product Price */}
            <p className="text-teal-600 font-medium mt-2">{product.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default featured;
