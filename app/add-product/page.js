"use client";
import { toast } from "react-toastify";

export default function AddProduct() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const shortDesc = e.target.shortDesc.value;
    const fullDesc = e.target.fullDesc.value;
    const price = Number(e.target.price.value);
    const date = e.target.date.value;
    const priority = e.target.priority.value;
    const image = e.target.image.value;
    const product = {
      title,
      shortDesc,
      fullDesc,
      price,
      date,
      priority,
      image,
    };

    const res = await fetch(`${NEXT_PUBLIC_API_URL}/products`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(product),
    });

    const data = await res.json();
    if (data.insertedId) {
      toast.success("Product Added Successfully");
      e.target.reset();
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Add Product</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="title"
          placeholder="Title"
          className="border p-2 w-full rounded"
          required
        />

        <input
          type="text"
          name="shortDesc"
          placeholder="Short description"
          className="border p-2 w-full rounded"
          required
        />

        <textarea
          name="fullDesc"
          placeholder="Full description"
          className="border p-2 w-full rounded h-28"
          required
        />

        <input
          name="price"
          placeholder="Price"
          className="border p-2 w-full rounded"
          type="number"
          required
        />

        <input
          name="date"
          placeholder="Date"
          className="border p-2 w-full rounded"
          type="date"
          required
        />

        <input
          type="text"
          name="priority"
          placeholder="Priority"
          className="border p-2 w-full rounded"
          required
        />

        <input
          type="url"
          name="image"
          placeholder="Optional Image URL"
          className="border p-2 w-full rounded"
        />

        <button className="bg-yellow-600 text-white px-4 py-2 rounded w-full">
          Submit
        </button>
      </form>
    </div>
  );
}
