export default function App() {
  return (
    <div className=" h-screen w-screen md:flex  md:justify-center md:items-center bg-pastel_blue">
      <div className=" w-full md:w-10/12 md:h-2/3 flex flex-col md:flex-row bg-white md:p-4 rounded-2xl">
        <div className="w-full md:w-1/3 h-full">
          <Header />
        </div>
        <div className="md:w-2/3 md:p-8">
          <Page1 />
          <Page2 />
          <Page3 />
          <Page4 />
          <Navbar />
        </div>
      </div>
    </div>
  );
}

function Page1() {
  return (
    <div className="w-full h-full bg-white">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis natus
      quas pariatur velit nam. Vitae saepe blanditiis est. Nam corrupti
      molestiae aut blanditiis obcaecati! Rerum, reprehenderit ipsum. A,
      cupiditate numquam.
    </div>
  );
}

function Header() {
  return (
    <div className=" w-full  h-96 md:h-full bg-mobile-sidebar md:bg-desktop-sidebar bg-no-repeat bg-contain md:bg-cover md:rounded-2xl  md:pl-2 md:pr-10">
      <div className="w-full  flex justify-center items-center">
        <div className="flex mt-10 md:flex-col md:space-x-0 space-x-4 md:space-y-8">
          <div className="flex space-x-4 ">
            <button className="rounded-full text-white text-lg font-bold font-sans border  md:px-4 px-3 py-1 border-white">
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
            <button className="rounded-full border md:px-4 px-3 py-1 border-white  text-white text-lg font-bold font-sans">
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
            <button className="rounded-full border md:px-4 px-3 py-1 border-white  text-white text-lg font-bold font-sans">
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
            <button className="rounded-full border md:px-4 px-3 py-1  border-white  text-white text-lg font-bold font-sans">
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

function Page2() {}
function Page3() {}
function Page4() {}
function Navbar() {}
