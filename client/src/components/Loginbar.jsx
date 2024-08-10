import React from "react";

const Loginbar = () => {
  return (
    <>
      <div className="px-20">
        <div className="w-96 space-y-5 py-16">
          <CustomInput type={"text"} label={"E-Mail"} />

          <CustomInput type={"password"} label={"Password"} />
          <div className="text-xs px-9 space-x-3 flex">
            Remember Me
            <div className="px-2  flex space-x-16">
              <input type="checkbox"></input>
              <div className="text-red-700 font-semibold">
                <button>Forgot Password?</button>
              </div>
            </div>
          </div>
          <div className="px- py-5 ">
            <button
              class="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 w-96 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
              type="button"
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Loginbar;
