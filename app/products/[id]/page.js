import BackButton from "@/lib/BackButton";
import getProduct from "@/lib/getProduct";

export default async function ItemDetails({ params }) {
  const { id } = await params;
  const product = await getProduct(id);
  console.log("wow ", product);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Back Button */}
      <BackButton></BackButton>

      {/* Image Banner */}
      <div className="mt-4">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-[400px] object-cover rounded-xl shadow"
        />
      </div>

      {/* Title */}
      <h1 className="text-3xl font-semibold mt-6">{product.title}</h1>

      {/* Meta Info */}
      <div className="flex flex-wrap gap-4 mt-3 text-sm text-gray-600">
        <span className="bg-gray-100 px-3 py-1 rounded-lg font-bold">
          Price: <span className="font-medium">{product.price}</span>
        </span>

        <span className="bg-gray-100 px-3 py-1 rounded-lg font-bold">
          Date: <span className="font-medium">{product.date}</span>
        </span>

        <span className="bg-gray-100 px-3 py-1 rounded-lg font-bold">
          Priority: <span className="font-medium">{product.priority}</span>
        </span>
      </div>

      {/* Full Description */}
      <p className="mt-5 text-gray-700 leading-relaxed">
        <span className="font-bold">Full Description:</span>{product.fullDesc}
      </p>
    </div>
  );
}
