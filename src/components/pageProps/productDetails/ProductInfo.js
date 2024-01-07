import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../redux/orebiSlice";

const ProductInfo = ({ productInfo }) => {
  const dispatch = useDispatch();

  const formatPrice = Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  }).format(productInfo.price);

  return (
    <div className="flex flex-col gap-5">
      <h2 className="text-4xl font-semibold">{productInfo.name}</h2>
      <p className="text-xl font-semibold">{formatPrice}</p>
      <p className="text-base text-gray-600">{productInfo.desc}</p>
      {/* <p className="text-sm">Be the first to leave a review.</p> */}
      <p className="font-medium text-lg">
        <span className="font-normal">Type:</span> {productInfo.type}
      </p>
      <button
        onClick={() =>
          dispatch(
            addToCart({
              _id: productInfo.id,
              name: productInfo.name,
              quantity: 1,
              image: productInfo.img,
              image2: productInfo.img2,
              image3: productInfo.img3,
              badge: productInfo.badge,
              price: productInfo.price,
              colors: productInfo.color,
            })
          )
        }
        className="w-full py-4 bg-primeColor hover:bg-black duration-300 text-white text-lg font-titleFont"
      >
        Add to Cart
      </button>
      <p className="font-normal text-sm">
        <span className="text-base font-medium"> Type :</span>{" "}
        Common/Rare/Legendary
      </p>
    </div>
  );
};

export default ProductInfo;
