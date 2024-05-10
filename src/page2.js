export default function Page2({ setPlan, plan }) {
  return (
    <div className="  md:static absolute   left-[35px] top-[-70px]  flex flex-col  w-10/12 bg-white pt-6 md:pt-0  pb-10 px-6 rounded-xl">
      <div className="font-sans text-xl font-bold text-marine_blue ">
        <p>Select your plan</p>
      </div>
      <div className="font-sans text-md font-lg text-cool_gray tracking-widest py-2 ">
        <p>You have the option of monthly or yearly billing</p>
      </div>
      <div className="flex flex-col space-y-4 mt-5">
        <button
          className={`flex space-x-6 border  ${
            plan === "Arcade,9"
              ? "bg-magnolia border-purplish_blue "
              : "border-light_gray "
          } rounded-xl px-3 md:py-2 py-4`}
          value="Arcade,9"
          onClick={(e) => setPlan(e)}
        >
          <img src="/assets/images/icon-arcade.svg" alt="" />
          <div className="flex flex-col items-start">
            <p className="text-marine_blue font-bold text-lg">Arcade</p>
            <p className="text-cool_gray font-thin font-sans">$9/mo</p>
          </div>
        </button>
        <button
          className={`flex space-x-6 border  ${
            plan === "Advanced,12"
              ? "bg-magnolia border-purplish_blue "
              : "border-light_gray "
          } rounded-xl px-3 md:py-2 py-4`}
          value="Advanced,12"
          onClick={(e) => setPlan(e)}
        >
          <img src="/assets/images/icon-advanced.svg" alt="" />
          <div className="flex flex-col items-start">
            <p className="text-marine_blue font-bold text-lg">Advanced</p>
            <p className="text-cool_gray font-thin font-sans">$12/mo</p>
          </div>
        </button>
        <button
          className={`flex space-x-6 border  ${
            plan === "Pro,15"
              ? "bg-magnolia border-purplish_blue "
              : "border-light_gray "
          } rounded-xl px-3 md:py-2 py-4`}
          value="Pro,15"
          onClick={(e) => setPlan(e)}
        >
          <img src="/assets/images/icon-pro.svg" alt="" />
          <div className="flex flex-col items-start">
            <p className="text-marine_blue font-bold text-lg">Pro</p>
            <p className="text-cool_gray font-thin font-sans">$15/mo</p>
          </div>
        </button>
      </div>
    </div>
  );
}
