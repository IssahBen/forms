export default function Header({ Number }) {
  return (
    <div className=" w-full  h-full md:h-full md:pl-2 md:pr-10">
      <div className="w-full  flex justify-center items-center">
        <div className="flex mt-10 md:flex-col md:space-x-0 space-x-4 md:space-y-8">
          <div className="flex space-x-4 ">
            <button
              className={`rounded-full ${
                Number === 1
                  ? "text-marine_blue  bg-light_blue  "
                  : "text-white "
              }text-lg font-bold font-sans border  md:px-4 px-3 py-1 border-white`}
            >
              1
            </button>
            <div className="hidden md:flex flex-col">
              <label htmlFor="" className="font-thin text-cool_gray font-sans">
                Step 1
              </label>
              <p className="font-bold font-sans text-sm text-white">
                YOUR INFO
              </p>
            </div>
          </div>
          <div className="flex space-x-4">
            <button
              className={`rounded-full ${
                Number === 2
                  ? "text-marine_blue  bg-light_blue  "
                  : "text-white "
              }text-lg font-bold font-sans border  md:px-4 px-3 py-1 border-white`}
            >
              2
            </button>
            <div className="hidden md:flex flex-col">
              <label htmlFor="" className="font-thin text-cool_gray font-sans">
                Step 2
              </label>
              <p className="font-bold font-sans text-sm text-white">
                SELECT PLAN
              </p>
            </div>
          </div>
          <div className="flex space-x-4">
            <button
              className={`rounded-full ${
                Number === 3
                  ? "text-marine_blue  bg-light_blue  "
                  : "text-white "
              }text-lg font-bold font-sans border  md:px-4 px-3 py-1 border-white`}
            >
              3
            </button>
            <div className="hidden md:flex flex-col">
              <label htmlFor="" className="font-thin text-cool_gray font-sans">
                Step 3
              </label>
              <p className="font-bold font-sans text-sm text-white">ADD-ONS</p>
            </div>
          </div>
          <div className="flex space-x-4">
            <button
              className={`rounded-full ${
                Number === 4
                  ? "text-marine_blue  bg-light_blue  "
                  : "text-white "
              }text-lg font-bold font-sans border  md:px-4 px-3 py-1 border-white`}
            >
              4
            </button>
            <div className="hidden md:flex flex-col">
              <label htmlFor="" className="font-thin text-cool_gray font-sans">
                Step 4
              </label>
              <p className="font-semibold font-sans text-sm text-white">
                SUMMARY
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
