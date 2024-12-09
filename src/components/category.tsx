import React from "react";
import Image from "next/image";

const category = () => {
  const categories = [
    { id: 1, name: "Dining Chair", image: "/image (1).png" },
    { id: 2, name: "Wooden Stool", image: "/image (2).png" },
    { id: 3, name: "Office Chair", image: "/image.png" },
  ];

  return (
    <section className="py-8 px-6 md:px-12">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
        Top Categories
      </h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((category) => (
          <div
            key={category.id}
            className="bg-white border border-gray-200 rounded-lg shadow-md p-4 hover:shadow-lg transition-all"
          >
            <Image
              src={category.image}
              alt={category.name}
              width={300}
              height={200}
              className="rounded-lg object-cover w-full h-40"
            />
            <h3 className="text-lg font-semibold text-center mt-4">
              {category.name}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default category;
