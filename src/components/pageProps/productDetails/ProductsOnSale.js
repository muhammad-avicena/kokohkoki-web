import React from "react";

const ProductsOnSale = ({ productInfo }) => {
  return (
    <div>
      <h3 className="font-titleFont text-xl font-semibold mb-6 underline underline-offset-4 decoration-[1px]">
        Detail Products
      </h3>

      <div className="flex flex-col gap-2">
        {productInfo.img2 && (
          <div
            key={productInfo._id}
            className="flex items-center gap-4 border-b-[1px] border-b-gray-300 py-2"
          >
            <div>
              <img
                className="w-24"
                src={productInfo.img2}
                alt={productInfo.img2}
              />
            </div>
          </div>
        )}
        {productInfo.img3 && (
          <div
            key={productInfo._id}
            className="flex items-center gap-4 border-b-[1px] border-b-gray-300 py-2"
          >
            <div>
              <img
                className="w-24"
                src={productInfo.img3}
                alt={productInfo.img3}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductsOnSale;
