export default async function getProduct(id) {
  const res = await fetch(`https://next-server-nu.vercel.app/products/${id}`);
  const data = await res.json();
  return data;
}
