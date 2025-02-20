import { Link } from "react-router-dom";
import illustration from "./illustration.png"; // Ensure the correct path

const SignUp = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-6">
      {/* Logo */}
      <div className="mt-6">
        <h1 className="text-xl font-semibold text-gray-700">
          Silent <span className="text-blue-500">Moon</span>
        </h1>
      </div>

      {/* Illustration */}
      <div className="w-80 h-60 mt-6">
        <img src={illustration} alt="Meditation Illustration" className="w-full h-full object-contain" />
      </div>

      {/* Heading */}
      <div className="text-center mt-6">
        <h2 className="text-2xl font-bold text-gray-800">We are what we do</h2>
        <p className="text-gray-500 text-sm mt-2">
          Thousands of people are using Silent Moon for small meditations.
        </p>
      </div>

      {/* Sign Up Button */}
      <div className="flex justify-center mt-6">
        <button className="w-40 bg-indigo-500 text-white py-3 rounded-full text-lg shadow-md hover:bg-indigo-600 transition duration-300">
          SIGN UP
        </button>
      </div>

      {/* Already Have an Account */}
      <div className="mt-4 text-center">
        <p className="text-gray-600 text-sm">
          ALREADY HAVE AN ACCOUNT?{" "}
          <Link to="/login" className="text-indigo-500 font-semibold hover:underline">
            LOG IN
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
