import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Home() {
  const [data, setData] = useState([] );
  console.log(data, "data");

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((response) => {
        console.log(response.data.products);

        setData(response.data.products);
      })
      .catch((error) => {
        console.error("Error fetching cards:", error);
      });
  }, []);
  return (
    <>
      <div className="bg-gray-100 ">
        <h2 className="uppercase text-4xl p-10 justify-center flex mx-auto font-bold text-gray-900">
          API Cards
        </h2>

        <div className="flex flex-wrap gap-20 p-10">
          {data.map((item) => (
            <div
              key={item.id}
              className="border-2 rounded-2xl p-4 w-[250px] justify-center mx-auto 
             shadow hover:shadow-2xl cursor-pointer transition duration-300  hover:scale-105"
            >
              <h3 className="text-lg font-bold text-center">{item.title}</h3>
              <img
                src={item.thumbnail}
                alt={item.title}
                style={{ width: "180px", height: "150px" }}
                className="p-4 justify-center m-4 mx-auto hover:scale-120 transition delay-150 duration-300 ease-in-out hover:-translate-y-1  "
              />
              <p className="text-center">Price: ${item.price}</p>
              <p>Category: {item.category}</p>

              <Link
                to={`/products/${item.id}`}
                className="text-blue-700 text-center"
              >
                View Details
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;
