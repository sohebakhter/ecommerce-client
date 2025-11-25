export default async function getProduct(_id) {
  const res = await fetch(`https://next-server-nu.vercel.app/products/${_id}`);
  const data = await res.json();
  return data;
}
