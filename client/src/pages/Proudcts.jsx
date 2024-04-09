import React, { useState, useEffect } from "react";

const Proudcts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [filterOption, setFilterOption] = useState("all");

  const api_P = "https://fakestoreapi.com/products";

  const handelGetProducts = async () => {
    try {
      setLoading(true);
      const response = await fetch(api_P);
      const data = await response.json();
      setProducts(data);
      setFilteredProducts(data); // Set filtered products initially to all products
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  const handleFilterChange = (e) => {
    setFilterOption(e.target.value);
    if (e.target.value === "all") {
      setFilteredProducts(products); // Set filtered products back to all products
    } else {
      const filtered = products.filter((product) => product.category === e.target.value);
      setFilteredProducts(filtered);
    }
  };

  useEffect(() => {
    handelGetProducts();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center p-2">
      <h1 className="p-2 text-violet-950 font-bold text-3xl mb-5 mt-5">
        Product list item
      </h1>

      <select value={filterOption} onChange={handleFilterChange} style={{position:"relative" , left:"20%" ,border:"1px solid black"}} className="p-1 mb-4 w-20 ">
        <option value="all">All</option>
        <option value="electronics">Electronics</option>
        <option value="jewelery">Jewelery</option>
        <option value="men's clothing">Men's Clothing</option>
        <option value="women's clothing">Women's Clothing</option>
      </select>

      {loading ? (
        <p className="text-3xl text-teal-800 text-center flex items-center justify-center">
          Loading...
        </p>
      ) : (
        <ul className="lg:w-1/2 flex flex-col">
          {filteredProducts.map((product, index) => (
            <div className="flex flex-col gap-4" key={product.id} style={{ border: "1px solid #4A5568", borderRadius: "10px",backgroundColor:"#EEEEE", padding: "0px", margin: "20px" }}>
              <div className="flex flex-col p-2 items-center justify-center gap-2">
                <img
                  src={product.image}
                  style={{ borderRadius: "5px" }}
                  width={200}
                  alt="product"
                />
                <h1 className="text-center text-teal-800 text-xl">
                  {product.title}
                </h1>
                <p className="flex text-teal-950 text-sm lg:w-1/2">
                  {product.description}
                </p>
                <span className="text-violet-800" style={{ borderRadius: "5px", backgroundColor: "orange" }}>
                  <span className="text-violet-900 font-bold">Price : </span>
                  {product.price}$
                </span>
                <div>
                  <p className="text-sm text-teal-950">
                    rate :{" "}
                    <span className="text-sky-900" style={{ borderRadius: "5px", backgroundColor: "orange" }}>
                      {product.rating.rate}
                    </span>
                  </p>
                  <p className="text-sm text-teal-950">
                    count :{" "}
                    <span className="text-sky-900" style={{ borderRadius: "5px", backgroundColor: "orange" }}>
                      {product.rating.count}
                    </span>
                  </p>
                </div>
              </div>
              {index !== filteredProducts.length - 1 && <hr />}
            </div>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Proudcts;