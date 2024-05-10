export default function Page4({ submitted, planArr, addArr, total, onChange }) {
  return (
    <div className="md:static absolute   left-[25px] top-[-96px] flex flex-col  w-11/12 bg-white pt-6  pb-10 px-6 rounded-xl">
      <div className={`${submitted ? "hidden " : ""}`}>
        <div className="font-sans text-2xl font-bold text-marine_blue ">
          <p>Finishing up</p>
        </div>
        <div className="font-sans text-md font-lg text-cool_gray tracking-widest py-2 ">
          <p>Double-check everything looks OK before confirming</p>
        </div>
        <div className="flex flex-col bg-magnolia p-5">
          <div className="flex justify-between">
            <div className="flex  md:ml-2 flex-col">
              <p className="text-marine_blue font-bold text-lg">
                {planArr[0]}(Monthly)
              </p>
              <p
                className="text-cool_gray font-thin font-sans  underline"
                onClick={onChange}
              >
                change
              </p>
            </div>
            <p className="text-marine_blue font-bold font-sans">
              ${planArr[1]}/mo
            </p>
          </div>
          <div className="border border-t-1 border-light_gray"></div>
          {addArr.map((add) => (
            <Addon name={add.name} price={add.price} key={add.name} />
          ))}
        </div>
        <div className="flex justify-between mt-5 p-5">
          <div className="flex  md:ml-2 flex-col">
            <p className="text-cool_gray font-md text-md">Total(per month)</p>
          </div>
          <p className="text-purplish_blue font-bold font-sans">
            +${isNaN(total) ? " " : `${total}`}/mo
          </p>
        </div>
      </div>
      <Thanks submitted={submitted} />
    </div>
  );
}
function Addon({ name, price }) {
  return (
    <div className="flex justify-between mt-5">
      <div className="flex  md:ml-2 flex-col">
        <p className="text-cool_gray font-md text-md">{name}</p>
      </div>
      <p className="text-marine_blue font-bold font-sans">+${price}/mo</p>
    </div>
  );
}

function Thanks({ submitted }) {
  return (
    <div className={`${submitted ? " " : "hidden"} flex flex-col mt-16 mb-16`}>
      <div className="flex justify-center mb-4">
        <img src="/assets/images/icon-thank-you.svg" alt="" />
      </div>
      <div className="flex justify-center mb-5">
        <h1 className="font-bold text-3xl text-marine_blue font-mono">
          Thank you!
        </h1>
      </div>
      <div className="text-cool_gray font-md text-center font-mono">
        <p>
          Thanks for confirming your subscription.We hope you have using our
          platform.if you need support feel free to emails us at
          support@loremgaming.com
        </p>
      </div>
    </div>
  );
}
