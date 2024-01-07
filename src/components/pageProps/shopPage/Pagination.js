import React, { useState, useEffect } from "react";
import axios from "axios";
import ReactPaginate from "react-paginate";
import Product from "../../home/Products/Product";
import BASE_URL from "../../../config/config";

function Items({ currentItems }) {
  return (
    <>
      {currentItems &&
        currentItems.map((item) => (
          <div key={item._id} className="w-full">
            <Product
              _id={item._id}
              img={item.images.image1}
              img2={item.images.image2}
              img3={item.images.image3}
              name={item.name}
              price={item.price}
              gender={item.gender}
              type={item.type}
              // badge={item.badge}
              desc={item.desc}
            />
          </div>
        ))}
    </>
  );
}

const Pagination = ({ itemsPerPage }) => {
  const [itemOffset, setItemOffset] = useState(0);
  const [items, setItems] = useState([]);
  const [itemStart, setItemStart] = useState(1);

  async function fetchDataFish() {
    return axios
      .get(`${BASE_URL}/fish`)
      .then((response) => {
        setItems(response.data.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  useEffect(() => {
    fetchDataFish();
  }, []);

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    setItemOffset(newOffset);
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset},`
    );
    setItemStart(newOffset);
  };
  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 mdl:gap-4 lg:gap-10">
        <Items currentItems={currentItems} />
      </div>
      <div className="flex flex-col mdl:flex-row justify-center mdl:justify-between items-center">
        <ReactPaginate
          nextLabel=""
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          marginPagesDisplayed={2}
          pageCount={pageCount}
          previousLabel=""
          pageLinkClassName="w-9 h-9 border-[1px] border-lightColor hover:border-gray-500 duration-300 flex justify-center items-center"
          pageClassName="mr-6"
          containerClassName="flex text-base font-semibold font-titleFont py-10"
          activeClassName="bg-black text-white"
        />

        <p className="text-base font-normal text-white">
          Products from {itemStart === 0 ? 1 : itemStart} to {endOffset} of{" "}
          {items.length}
        </p>
      </div>
    </div>
  );
};

export default Pagination;
