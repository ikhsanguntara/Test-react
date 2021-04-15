import React from "react";

// import cek from "images/logo.png";

export default function Products({ item }) {
  console.log(item);

  const pathImage = item.imgProduct;

  return (
    <>
      <div className="w-1/3 px-4 mb-6 ">
        <div className="item">
          <figure className="item-image h-64 block">
            <img
              src={`images/${pathImage}`}
              alt={item.imgProduct}
              className="mx-auto opacity-50 bg-cover object-cover"
             
            />

            <h3 className="text-lg ml-4 text-white">{item.namaProduct}</h3>
          </figure>
        </div>
      </div>
    </>
  );
}
