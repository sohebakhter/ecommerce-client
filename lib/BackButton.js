"use client";
import { useRouter } from "next/navigation";

const BackButton = () => {
  const router = useRouter();

  const handleBack = () => {
    router.back(); // browser history অনুসারে previous page এ যাবে
  };

  return (
    <button
      onClick={handleBack}
      className="btn text-sm bg-yellow-100 px-4 py-2 rounded-md hover:bg-yellow-200 transition"
    >
      ← Back
    </button>
  );
};

export default BackButton;
