"use client";
import { useContext } from "react";
import { AuthContext } from "../app/context/AuthContext";
import { toast } from "react-toastify";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Login() {
  const { googleSignIn, signInUser } = useContext(AuthContext);
  const router = useRouter();

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    signInUser(email, password)
      .then(() => {
        toast.success("Login Successful");
        router.push("/");
      })
      .catch((err) => {
        console.log(err);
        toast.error("Invalid Credintial or you may not Register");
      });
  };

  const handleGoogle = () => {
    googleSignIn()
      .then(() => {
        toast.success("Login Successful");
        router.push("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-sm">
        <h1 className="text-2xl font-bold mb-6 text-center">Login</h1>

        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            name="email"
            className="border p-2 w-full rounded"
            required
          />

          <input
            type="password"
            placeholder="Password"
            name="password"
            className="border p-2 w-full rounded"
            required
          />

          <button
            type="submit"
            className="bg-yellow-600 text-white px-4 py-2 rounded w-full"
          >
            Login{" "}
          </button>
          {/* Google */}
          <button
            onClick={handleGoogle}
            className="btn bg-white text-black border-[#e5e5e5] w-full"
          >
            <svg
              aria-label="Google logo"
              width="16"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <g>
                <path d="m0 0H512V512H0" fill="#fff"></path>
                <path
                  fill="#34a853"
                  d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                ></path>
                <path
                  fill="#4285f4"
                  d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                ></path>
                <path
                  fill="#fbbc02"
                  d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                ></path>
                <path
                  fill="#ea4335"
                  d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                ></path>
              </g>
            </svg>
            Login with Google
          </button>
          <p>
            New Here?
            <Link href="/register" className="text-blue-500">
              Register
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
