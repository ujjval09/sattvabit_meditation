import { useNavigate } from "react-router-dom"; 

const WelcomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-6 text-center">
      {/* Logo at the Top */}
      <div className="absolute top-9 flex items-center gap-2">
        <h1 className="text-xl font-semibold text-gray-700 flex items-center gap-2">
          Silent  
          <img src="/logo.png" alt="Silent Moon Logo" className="h-6" />
          <span className="text-indigo-500">Moon</span>
        </h1>
      </div>

      {/* Content Section */}
      <div className="mt-[60px] flex flex-col items-center">
        {/* Illustration */}
        {/* Illustration */}
{/* Illustration */}
<img
  src="/meditation-illustration.png"
  alt="Meditation"
  className="w-[280px] md:w-[200px] max-w-none mb-6 ml-[30px] mr-[10px]"
/>


        {/* Title */}
        <h2 className="text-2xl font-bold text-gray-800 md:text-3xl opacity-80">
  We are what we do
</h2>

        {/* Subtitle */}
        <p className="text-gray-500 text-sm md:text-base mt-2 px-2 ml-5 opacity-50">
          Thousands of people are using Silent Moon for smalls meditation
        </p>

        {/* Buttons */}
       <button
  onClick={() => navigate("/signup")}
  className="bg-[#8E97FD] text-white font-semibold w-full max-w-xs py-3 rounded-full -mt-[-50px] shadow-md hover:bg-indigo-600 transition opacity-98"
>
  SIGN UP
</button>



        {/* Login Option */}
        <p className="text-gray-500 text-sm mt-4 opacity-70"> 
  ALREADY HAVE AN ACCOUNT?{' '}
  <span
    onClick={() => navigate("/signin")}
    className="text-indigo-500 font-semibold cursor-pointer opacity-70"
  >
    LOG IN
  </span>
</p>

      </div>
    </div>
  );
};

export default WelcomePage;
