export default function Page1({
  name,
  email,
  number,
  setName,
  setEmail,
  setNumber,
}) {
  return (
    <div className="    md:static absolute   left-[35px] top-[-70px] flex flex-col  w-10/12 bg-white pt-6  pb-10 px-6 rounded-xl">
      <div className="font-sans text-xl font-bold text-marine_blue ">
        <p>Personal info</p>
      </div>
      <div className="font-sans text-md font-thin text-cool_gray tracking-widest py-2 ">
        <p>Please provide your name,email address and phone number</p>
      </div>
      <div className="flex flex-col space-y-6 ">
        <div className="flex flex-col space-y-2">
          <label htmlFor="" className="font-bold text-marine_blue ">
            Name
          </label>
          <input
            type="text"
            className="border border-light_gray  pl-10 py-2 rounded-lg"
            placeholder="e.g. Mr Agyemang"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="flex flex-col space-y-2">
          <label htmlFor="" className="font-bold text-marine_blue ">
            Email Address
          </label>
          <input
            type="text"
            className="border border-light_gray  pl-10 py-2 rounded-lg"
            placeholder="e.g. asad@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="flex flex-col space-y-2 ">
          <label htmlFor="" className="font-bold text-marine_blue ">
            Phone Number
          </label>
          <input
            type="text"
            className="border border-light_gray  pl-10 py-2 rounded-lg "
            placeholder="e.g. +1 432 323 3580 "
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}
