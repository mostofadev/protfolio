import {image} from "../public/notFound/notfound.jpg"
export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#f4f4f4] flex flex-col items-center justify-center px-4 text-center">
      <div className="max-w-md">
        <img
          src="/notFound/notfound.jpg" // optional illustration
          alt="Not Found"
          className="mx-auto w-full h-full"
        />
        <h1 className="text-4xl font-bold text-gray-800 mt-6">Oops! Page not found</h1>
        <p className="text-gray-500 mt-3">
          The page you’re looking for doesn’t exist or has been moved.
        </p>
        <a
          href="/"
          className="mt-6 inline-block bg-gray-800 text-white px-6 py-2 rounded hover:bg-gray-900 transition"
        >
          Back to Home
        </a>
      </div>
    </div>
  );
}
