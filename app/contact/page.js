export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="max-w-3xl w-full bg-white p-10 rounded-2xl shadow">
        <h1 className="text-3xl font-bold mb-6 text-gray-800 text-center">
          Contact Us
        </h1>
        <p className="text-gray-600 text-center mb-10">
          We would love to hear from you! Whether you have questions, feedback, or
          business inquiries, feel free to reach out.
        </p>

        <form className="grid grid-cols-1 gap-6">
          <div>
            <label className="text-gray-700 font-medium">Your Name</label>
            <input
              type="text"
              className="mt-2 w-full p-3  rounded-xl focus:outline-none focus:ring"
              placeholder="Enter your name"
              required
            />
          </div>

          <div>
            <label className="text-gray-700 font-medium">Email Address</label>
            <input
              type="email"
              className="mt-2 w-full p-3  rounded-xl focus:outline-none focus:ring"
              placeholder="Enter your email"
              required
            />
          </div>

          <div>
            <label className="text-gray-700 font-medium">Message</label>
            <textarea
              rows="5"
              className="mt-2 w-full p-3  rounded-xl focus:outline-none focus:ring"
              placeholder="Write your message here..."
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-yellow-500 text-white py-3 rounded-xl text-lg font-medium hover:bg-yellow-600 transition"
          >
            Send Message
          </button>
        </form>

        <div className="mt-10 border-t pt-6 text-center text-gray-600">
          <h2 className="text-xl font-semibold mb-2">Other Ways to Reach Us</h2>
          <p>Email: support@myecommerce.com</p>
          <p>Phone: +880 1234-567890</p>
          <p>Address: Dhaka, Bangladesh</p>
        </div>
      </div>
    </div>
  );
}
