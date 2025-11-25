import React from "react";

export default async function popular() {
  const res = await fetch(`${NEXT_PUBLIC_API_URL}/popular-products`);
  const popular = await res.json();
  console.log(popular);
  return popular;
}
