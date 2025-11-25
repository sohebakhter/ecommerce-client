"use client";

import React, { useContext } from "react";
import { AuthContext } from "../app/context/AuthContext";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import NavLink from "./NavLink";
import Link from "next/link";

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);
  const router = useRouter();

  const handleSignOut = () => {
    signOutUser()
      .then(() => {
        toast.success("Log Out Successfully");
        router.push("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="bg-base-200 shadow-sm">
      <div className="navbar max-w-7xl mx-auto">
        <div className="flex-1">
          <Link href="/" className="text-2xl flex flex-col md:flex-row items-start md:items-center">
            <img
              src="https://i.ibb.co.com/PzV8YcKh/image.png"
              alt=""
              className="w-13 rounded-full"
            />
            <h1 className="font-bold">CustomStore</h1>
          </Link>
        </div>
        <div className="flex items-end md:items-center flex-col-reverse md:flex-row ">
          <ul className="flex md:gap-5 md:mr-5">
            <li className="hover:text-yellow-400">
              <NavLink href="/">Home</NavLink>
            </li>
            <li className="hover:text-yellow-400">
              <NavLink href="/products">Products</NavLink>
            </li>
            <li className="hover:text-yellow-400">
              <NavLink href="/about">About</NavLink>
            </li>
            <li className="hover:text-yellow-400">
              <NavLink href="/contact">Contact</NavLink>
            </li>
          </ul>

          {user ? (
            <div className="flex gap-2">
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                >
                  <div className="w-10 rounded-full">
                    <img src={user?.photoURL} alt="" />
                  </div>
                </div>
                <ul
                  tabIndex="-1"
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
                >
                  <li>
                    <div className="flex flex-col bg-yellow-300">
                      <p className="justify-between">{user?.displayName}</p>
                      <p className="justify-between">{user?.email}</p>
                    </div>
                  </li>

                  <li className="hover:text-yellow-400">
                    <NavLink href="/add-product">Add Product</NavLink>
                  </li>
                  <li className="hover:text-yellow-400">
                    <NavLink href="/manage-product">Manage Product</NavLink>
                  </li>

                  <li>
                    <button onClick={handleSignOut}>Logout</button>
                  </li>
                </ul>
              </div>
            </div>
          ) : (
            <p className="btn bg-yellow-300 text-black">
              <NavLink href="/login">Login</NavLink>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
