"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";

export default function ManageProducts() {
  const [products, setProducts] = useState([]);

  // Load products
  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch(`https://next-server-nu.vercel.app/products`);
      const data = await res.json();
      setProducts(data);
    };
    fetchProducts();
  }, []);

  // Delete Function
  const handleDelete = async (id) => {
    // Confirm delete
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "This product will be deleted!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    });

    if (!result.isConfirmed) return;

    try {
      const res = await fetch(
        `https://next-server-nu.vercel.app/products/${id}`,
        {
          method: "DELETE",
        }
      );
      const data = await res.json();

      if (data.deletedCount > 0) {
        // Remove product from UI
        setProducts(products.filter((p) => p._id !== id));

        Swal.fire("Deleted!", "Product deleted successfully.", "success");
      } else {
        Swal.fire("Failed!", "Could not delete the product.", "error");
      }
    } catch (err) {
      console.log(err);
      Swal.fire("Error!", "Server error occurred.", "error");
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-5">Manage Products</h1>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Serial No.</th>
              <th>Title</th>
              <th>Price</th>
              <th>Date</th>
              <th>Details</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {products.map((p, i) => (
              <tr key={p._id}>
                <th>{i + 1}</th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img src={p.image} alt="" />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{p.title}</div>
                      <div className="">{p.description}</div>
                    </div>
                  </div>
                </td>
                <td>
                  <span className="badge badge-ghost badge-sm text-primary">
                    ${p.price}
                  </span>
                </td>
                <td>{p.date}</td>
                <th>
                  <Link
                    href={`/products/${p._id}`}
                    className="bg-yellow-500 btn text-white"
                  >
                    View
                  </Link>
                </th>
                <th>
                  <button
                    className="btn bg-red-500 text-white"
                    onClick={() => handleDelete(p._id)}
                  >
                    Delete
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
