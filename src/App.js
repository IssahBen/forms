import { useState } from "react";
import Page1 from "./page1";
import Page2 from "./page2";
import Page3 from "./page3";
import Header from "./header";
import Navbar from "./navbar";
import Page4 from "./page4";
export default function App() {
  const [pageNumber, setPageNumber] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [plan, setPlan] = useState("");
  const [addons, setAddons] = useState([]);

  let planArr = plan.split(",");

  let addArr = addons.map((add) => {
    const [x, y] = add.split(",");
    return { name: x, price: y };
  });

  let total = 0;
  addArr.forEach((obj) => (total += Number(obj.price)));
  total += Number(planArr[1]);
  function handleChange() {
    setPageNumber(1);
  }
  function handlePageSelect(e) {
    const btn = e.target;
    if (Number(btn.value) === -1 && pageNumber > 1) {
      setPageNumber((num) => (num += -1));
    }
    if (Number(btn.value) === 1 && pageNumber < 4) {
      setPageNumber((num) => (num += 1));
    }
  }

  function handleSubmit() {
    if (
      name.trim() !== "" &&
      email.trim() !== "" &&
      number.trim() !== "" &&
      plan.trim() !== "" &&
      addons.size !== 0
    ) {
      setSubmitted(true);
    }
  }

  function planSelect(e) {
    if (e.target.nodeName === "BUTTON") {
      setPlan(e.target.value);
    }
  }

  function handleAddons(e) {
    if (addons.includes(e.target.value)) {
      const element = e.target;
      element.checked = false;
    } else {
      const element = e.target;
      element.checked = true;
    }
    setAddons((adds) =>
      adds.includes(e.target.value)
        ? (adds = adds.filter((adds) => adds !== e.target.value))
        : (adds = [...addons, e.target.value])
    );
  }

  return (
    <div className=" h-screen w-screen md:flex  md:justify-center md:items-center bg-pastel_blue">
      <div className=" w-full md:w-10/12 md:h-2/3 flex flex-col md:flex-row h-full bg-white md:p-4 rounded-2xl space-y-0">
        <div className="w-full md:w-1/3  md:h-full h-1/3  bg-mobile-sidebar md:bg-desktop-sidebar bg-no-repeat bg-cover md:bg-cover  md:rounded-2xl ">
          <Header Number={pageNumber} />
        </div>
        <div className=" flex flex-col   relative md:w-2/3  w-full  h-full md:p-8  bg-pastel_blue md:bg-white">
          {pageNumber === 1 ? (
            <Page1
              name={name}
              setName={setName}
              email={email}
              setEmail={setEmail}
              number={number}
              setNumber={setNumber}
            />
          ) : (
            ""
          )}
          {pageNumber === 2 ? <Page2 setPlan={planSelect} plan={plan} /> : ""}
          {pageNumber === 3 ? <Page3 add={handleAddons} addons={addons} /> : ""}
          {pageNumber === 4 ? (
            <Page4
              submitted={submitted}
              planArr={planArr}
              addArr={addArr}
              total={total}
              onChange={handleChange}
            />
          ) : (
            ""
          )}
          <Navbar
            pageNumber={pageNumber}
            navigate={handlePageSelect}
            submitted={submitted}
            handleSubmit={handleSubmit}
          />
        </div>
      </div>
    </div>
  );
}
