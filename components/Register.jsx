"use client";
import { useContext } from "react";
import Link from "next/link";
import { AuthContext } from "@/app/context/AuthContext";
import { toast } from "react-toastify";
import { updateProfile } from "firebase/auth";
import { auth } from "../firebase/firebase.config";
import { useRouter } from "next/navigation";

export default function Register() {
  const { user, createUser, googleSignIn } = useContext(AuthContext);
  const router = useRouter();
  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    createUser(email, password)
      .then((res) => {
        console.log(res);
        toast("Registration Successfull");
        router.push("/");
        const profile = {
          displayName: name,
          photoURL: photo,
        };
        updateProfile(auth.currentUser, profile)
          .then(() => {
            toast.success("profile updated");
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  };

  const handleGoogle = () => {
    googleSignIn()
      .then(() => {
        router.push("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-sm">
        <h1 className="text-2xl font-bold mb-6 text-center">Register</h1>

        <form onSubmit={handleRegister} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="border p-2 w-full rounded"
            required
          />
          <input
            type="url"
            name="photo"
            placeholder="photoURL"
            className="border p-2 w-full rounded"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            className="border p-2 w-full rounded"
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            className="border p-2 w-full rounded"
            required
          />

          <button
            type="submit"
            className="bg-yellow-600 text-white px-4 py-2 rounded w-full"
          >
            Register
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
            Already have an Account{" "}
            <Link href="/login" className="text-blue-500">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
