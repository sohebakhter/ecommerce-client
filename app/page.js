import popular from "@/lib/popular";
import Link from "next/link";

export default async function Home() {
  const products = await popular();

  return (
    // hero section
    <div>
      <section className="hero bg-base-200 py-16">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="https://i.ibb.co.com/0y1p7f98/Screenshot-2025-11-24-142657.png"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">Shop Your Favorite Products</h1>
            <p className="py-6 text-lg">
              Discover top-quality items at the best prices. Fast delivery,
              secure payment, and a smooth shopping experience.
            </p>
            <Link
              href="http://localhost:3000/products"
              className="btn bg-yellow-600 text-white"
            >
              Explore Products
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 px-5 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="card bg-base-200 shadow-md hover:shadow-xl transition">
            <div className="card-body text-center">
              <h3 className="text-xl font-semibold">Fast Delivery</h3>
              <p>Get your products delivered to your doorstep quickly.</p>
            </div>
          </div>

          <div className="card bg-base-200 shadow-md hover:shadow-xl transition">
            <div className="card-body text-center">
              <h3 className="text-xl font-semibold">Quality Products</h3>
              <p>We offer premium items with verified authenticity.</p>
            </div>
          </div>

          <div className="card bg-base-200 shadow-md hover:shadow-xl transition">
            <div className="card-body text-center">
              <h3 className="text-xl font-semibold">Secure Payment</h3>
              <p>Your transactions are safe with our encrypted system.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-5 bg-base-200">
        <h2 className="text-3xl font-bold text-center mb-12">
          Popular Products
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {products?.map((product) => (
            <div
              key={product._id}
              className="card bg-base-100 shadow-md hover:shadow-xl hover:-translate-y-1 transition"
            >
              <figure>
                <img
                  src={product.image}
                  alt="Product"
                  className="h-48 w-full object-cover"
                />
              </figure>

              <div className="card-body">
                <h2 className="card-title text-secondary">{product.title}</h2>
                <p className="text-sm text-gray-500">{product.description}.</p>
                <p className="font-semibold text-yellow-500">
                  Price: ${product.price}
                </p>

                <div className="card-actions justify-end">
                  <Link
                    href={`https://next-server-nu.vercel.app/products/${product._id}`}
                    className="btn btn-outline btn-warning"
                  >
                    Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="px-5 py-20 max-w-6xl mx-auto">
        <div className="hero rounded-xl bg-gradient-to-r from-yellow-300 to-secondary text-white py-16">
          <div className="hero-content text-center">
            <div>
              <h2 className="text-4xl font-bold mb-4">
                Get 20% Off On Your First Order!
              </h2>
              <p className="mb-6">Limited time offer — grab it now.</p>
              <Link
                href="http://localhost:3000/products"
                className="btn btn-outline text-white border-white hover:bg-white hover:text-primary"
              >
                Shop Now
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
