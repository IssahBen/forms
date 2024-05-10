export default function Page3({ add, addons }) {
  return (
    <div className="   md:static absolute   left-[18px] top-[-70px]  flex flex-col  w-11/12 bg-white pt-6  pb-10 px-6 rounded-xl">
      <div className="font-sans text-xl font-bold text-marine_blue ">
        <p>Pick add-ons</p>
      </div>
      <div className="font-sans text-md font-lg text-cool_gray tracking-widest py-2 ">
        <p>Add ons help enhance your gaming experience.</p>
      </div>
      <div className="flex flex-col space-y-4 ">
        <div
          className={`flex justify-between items-center rounded-xl border ${
            addons.includes("Online service,1")
              ? "border-purplish_blue  bg-magnolia "
              : "border-light_gray "
          }px-4 py-2`}
        >
          <input
            type="checkbox"
            className="scale-[2]"
            checked={addons.includes("Online service,1") ? true : false}
            value="Online service,1"
            onClick={(e) => add(e)}
          />
          <div className="flex  md:ml-2 flex-col">
            <p className="text-marine_blue font-bold text-lg">Online service</p>
            <p className="text-cool_gray font-thin font-sans">
              Acess to multiple games.
            </p>
          </div>
          <p className="text-purplish_blue font-bold font-sans">+$1/mo</p>
        </div>
        <div
          className={`flex justify-between items-center rounded-xl border ${
            addons.includes("Larger storage,2")
              ? "border-purplish_blue  bg-magnolia "
              : "border-light_gray "
          }px-4 py-2`}
        >
          <input
            type="checkbox"
            className="scale-[2]"
            checked={addons.includes("Larger storage,2") ? true : false}
            value="Larger storage,2"
            onClick={(e) => add(e)}
          />
          <div className="flex md:ml-2 flex-col">
            <p className="text-marine_blue font-bold text-lg">Larger storage</p>
            <p className="text-cool_gray font-thin font-sans">
              Extra 1TB of cloud save.
            </p>
          </div>
          <p className="text-purplish_blue font-bold font-sans">+$2/mo</p>
        </div>
        <div
          className={`flex justify-between items-center rounded-xl border ${
            addons.includes("Customizable profile,2")
              ? "border-purplish_blue  bg-magnolia "
              : "border-light_gray "
          }px-4 py-2`}
        >
          <input
            type="checkbox"
            className="scale-[2]"
            checked={addons.includes("Customizable profile,2") ? true : false}
            value="Customizable profile,2"
            onClick={(e) => add(e)}
          />
          <div className="flex  md:ml-2 flex-col">
            <p className="text-marine_blue font-bold text-lg">
              Customizable profile
            </p>
            <p className="text-cool_gray font-thin font-sans">
              Custom theme on your profile.
            </p>
          </div>
          <p className="text-purplish_blue font-bold font-sans">$2/mo</p>
        </div>
      </div>
    </div>
  );
}
