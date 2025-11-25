import { allProducts } from "@/lib/getAllProducts";
import Link from "next/link";

export default async function ProductsPage() {
  // Fetch products from DB or API with search filter
  const products = await allProducts();

  return (
    <div className="max-w-7xl mx-auto p-5">
      {/* ========== PAGE TITLE ========== */}
      <div className="text-center mt-10 mb-14">
        <h1 className="text-4xl font-bold">Our Products</h1>
        <p className="text-gray-500 mt-2 text-lg">
          Browse through our latest collection of quality items at the best
          prices.
        </p>
      </div>

      {/* ========== SEARCH + FILTER ========== */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-10">
        {/* Search Bar */}

        <input
          type="text"
          placeholder="Search products..."
          className="input input-bordered w-full md:w-1/2"
        />

        {/* Category Filter (UI only) */}
        {/* <select className="select select-bordered w-full md:w-48">
          {categories.map((cat) => (
            <option key={cat}>{cat}</option>
          ))}
        </select> */}
      </div>

      {/* ========== PRODUCTS GRID ========== */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
        {products.map((n) => (
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
              {/* Title */}
              <h2 className="card-title text-secondary">{n.title}</h2>

              {/* Description (ellipsis) */}
              <p className="text-sm text-gray-500 line-clamp-2">
                {n.description}
              </p>

              {/* Price / Meta */}
              <p className="font-semibold text-yellow-500">Price: ${n.price}</p>

              {/* Details Button */}
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
