"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function ProductsPage() {
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://next-server-nu.vercel.app/products")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProducts(data);
      });
  }, []);

  const text = search.toLowerCase();

  const filterSearche = products.filter((p) =>
    p.title.toLowerCase().includes(text)
  );
  console.log(filterSearche);

  return (
    <div className="max-w-7xl mx-auto p-5">
      <div className="text-center mt-10 mb-14">
        <h1 className="text-4xl font-bold">Our Products</h1>
        <p className="text-gray-500 mt-2 text-lg">
          Browse through our latest collection of quality items at the best
          prices.
        </p>
      </div>

      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-10">
        {/* Search Bar */}

        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search products..."
          className="input input-bordered w-full md:w-1/2"
        />

        {/* Category Filter  */}
        <select className="select select-bordered w-full md:w-48">
          <option disabled={true}>Sort Here</option>
          <option>Low--High</option>
          <option>High--Low</option>
        </select>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
        {filterSearche?.map((n) => (
          <div
            key={n._id}
            className="card bg-base-100 shadow-md hover:shadow-xl hover:-translate-y-1 transition"
          >
            {/* Image */}
            <figure>
              <img
                src={n.image}
                alt="Product"
                className="h-48 w-full object-cover"
              />
            </figure>

            <div className="card-body">
              <h2 className="card-title text-secondary">{n.title}</h2>

              <p className="text-sm text-gray-500 line-clamp-2">
                {n.shortDesc}
              </p>

              <p className="font-semibold text-yellow-500">Price: ${n.price}</p>

              <div className="card-actions justify-end">
                <Link
                  href={`/products/${n._id}`}
                  className="btn btn-outline btn-warning"
                >
                  Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
