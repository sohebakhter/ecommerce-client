// //middleware -------------------
// import { NextResponse } from "next/server";
// import { useContext } from "react";
// import { AuthContext } from "./app/context/AuthContext";

// // This function can be marked `async` if using `await` inside
// export function proxy(request) {
//   const { user } = useContext(AuthContext);

//   if (!user) {
//     return NextResponse.redirect(new URL("/", request.url));
//   }
// }

// // Alternatively, you can use a default export:
// // export default function proxy(request) { ... }

// // See "Matching Paths" below to learn more
// export const config = {
//   matcher: ["/add-product/:path*", "/manage-product/:path*"],
// };

import { NextResponse } from "next/server";

export function proxy(request) {
  const token = request.cookies.get("firebaseToken")?.value;

  if (!token) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/add-product/:path*", "/manage-product/:path*"],
};
