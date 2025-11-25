import React from "react";

export default async function popular() {
  const res = await fetch("https://next-server-nu.vercel.app/popular-products");
  const popular = await res.json();
  console.log(popular);
  return popular;
}
