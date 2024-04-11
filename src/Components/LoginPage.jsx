import { CiMail } from "react-icons/ci";
import indiaFlag from "../assets/images/indiaFlag.webp"
function LoginPage() {
  
  return (
    
    <>
      <div className="flex justify-center flex-col items-center mt-48">
        <h1 className="text-3xl font-semibold">LOGIN WITH OTP</h1>
        <p className="py-3">Please enter your 10 digit mobile number</p>
        <div className="flex gap-5">
            
          <button
            className="border px-4 border-gray-300 shadow-sm focus:outline-none"
            style={{borderTopLeftRadius:"8px",borderBottomLeftRadius:"8px"}}
          >
            <img src={indiaFlag} alt="" className="w-10"/>

          </button>
          <input
            type="text"
            placeholder="Search for products in this collection "
            className="w-[400px] sm:w-70 md:w-70 px-4 py-2 border -ml-5 border-gray-300 shadow-sm focus:outline-none "
            style={{borderTopRightRadius:"8px",borderBottomRightRadius:"8px",borderLeft: "none"}}

          />
        </div>

        <button
          className="border px-12 my-4 py-3 rounded-xl bg-black text-white text-sm"
          style={{ borderLeft: "none" }}
        >
          Request OTP
        </button>
        <p className="text-sm mb-5">A 6 digit OTP will be sent to your phone number</p>

        <p className="text-sm mb-4">---------- or Sign in with ----------</p>


        <div className="flex justify-center items-center text-xl gap-2 border py-2 px-5 border-gray-300 rounded-lg">
            <CiMail className="text-2xl"/>
            <h1>Email</h1>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
