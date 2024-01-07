import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { GoTriangleDown } from "react-icons/go";
import Flex from "../../designLayouts/Flex";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import BASE_URL from "../../../config/config";
import axios from "axios";

const HeaderBottom = () => {
  const products = useSelector((state) => state.orebiReducer.products);
  // const [showUser, setShowUser] = useState(false);
  const [items, setItems] = useState([]);
  const navigate = useNavigate();
  // const ref = useRef();

  async function fetchDataFish() {
    try {
      const response = await axios.get(`${BASE_URL}/fish`);
      setItems(response.data.data);
    } catch (error) {
      console.error(error);
    }
  }

  // useEffect(() => {
  //   document.body.addEventListener("click", (e) => {
  //     if (ref.current.contains(e.target)) {
  //       setShow(true);
  //     } else {
  //       setShow(false);
  //     }
  //   });
  // }, [show, ref]);

  useEffect(() => {
    fetchDataFish();
  }, []);

  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleCurrency = (e) => {
    console.log(e.target.value);
  };

  useEffect(() => {
    const filtered = items.filter((item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredProducts(filtered);
  }, [items, searchQuery]);

  return (
    <div className="w-full bg-primeColor relative border-b-[1px] border-b-gray-200 py-5">
      <div className="max-w-container mx-auto">
        <Flex className="flex flex-col lg:flex-row items-start lg:items-center justify-between w-full px-4 pb-4 lg:pb-0 h-full lg:h-24">
          <div className="relative w-full lg:w-[600px] h-[50px] text-base text-primeColor bg-white flex items-center gap-2 justify-between px-6 rounded-xl">
            <input
              className="flex-1 h-full outline-none placeholder:text-[#C4C4C4] placeholder:text-[16px]"
              type="text"
              onChange={handleSearch}
              value={searchQuery}
              placeholder="Search your fish here"
            />
            <FaSearch className="w-5 h-5" />
            {searchQuery && (
              <div
                className={`w-full mx-auto h-96 bg-white top-16 absolute left-0 z-50 overflow-y-scroll shadow-2xl scrollbar-hide cursor-pointer`}
              >
                {searchQuery &&
                  filteredProducts.map((item) => {
                    const modifiedItem = {
                      ...item,
                      img: item.images.image1,
                    };

                    return (
                      <div
                        onClick={() => {
                          navigate(
                            `/product/${item.name
                              .toLowerCase()
                              .split(" ")
                              .join("")}`,
                            {
                              state: {
                                item: modifiedItem,
                              },
                            }
                          );
                          setSearchQuery("");
                        }}
                        key={item._id}
                        className="max-w-[600px] h-28 bg-gray-100 mb-3 flex items-center gap-3"
                      >
                        {console.log(item)}
                        <img
                          className="w-24"
                          src={item.images.image1}
                          alt="productImg"
                        />
                        <div className="flex flex-col gap-1">
                          <p className="font-semibold text-lg">{item.name}</p>
                          <p className="text-xs">{item.desc}</p>
                        </div>
                      </div>
                    );
                  })}
              </div>
            )}
          </div>
          <div className="flex gap-4 mt-2 lg:mt-0 items-center pr-6 cursor-pointer relative">
            {/* <div onClick={() => setShowUser(!showUser)} className="flex">
              <FaUser />
              <FaCaretDown />
            </div>
            {showUser && (
              <motion.ul
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="absolute top-6 left-0 z-50 bg-primeColor w-44 text-[#767676] h-auto p-4 pb-6"
              >
                <Link to="/signin">
                  <li className="text-gray-400 px-4 py-1 border-b-[1px] border-b-gray-400 hover:border-b-white hover:text-white duration-300 cursor-pointer">
                    Login
                  </li>
                </Link>
              </motion.ul>
            )} */}

            <div className="flex items-center gap-2 text-white relative">
              <label className="block">Currency :</label>
              <select
                onChange={(e) => handleCurrency(e.target.value)}
                id="countries"
                className="w-25 md:w-32 border-[1px] border-gray-200 py-1 px-4 cursor-pointer text-primeColor text-base block dark:placeholder-gray-400 appearance-none focus-within:outline-none focus-visible:border-primeColor"
              >
                <option value="IDR">IDR (Rp)</option>
                <option value="USD">USD ($)</option>
              </select>
              <span className="absolute text-black text-sm right-3 top-2.5">
                <GoTriangleDown />
              </span>
            </div>

            <Link to="/cart">
              <div className="relative">
                <FaShoppingCart className="text-white w-5 h-5" />
                <span className="absolute font-titleFont top-3 -right-2 text-xs w-4 h-4 flex items-center justify-center rounded-full bg-primeColor text-white">
                  {products.length > 0 ? products.length : 0}
                </span>
              </div>
            </Link>
          </div>
        </Flex>
      </div>
    </div>
  );
};

export default HeaderBottom;
