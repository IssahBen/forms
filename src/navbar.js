export default function Navbar({
  pageNumber,
  navigate,
  submitted,
  handleSubmit,
}) {
  return (
    <div
      className={`${
        submitted ? "hidden " : "absolute  "
      }bottom-0 flex w-full md:w-10/12 ${
        pageNumber === 1 ? "justify-end " : "justify-between "
      } bg-white px-6 py-4 md:py-0`}
    >
      <button
        className={`${
          pageNumber > 1 ? "" : "hidden "
        } font-sans text-md text-cool_gray font-bold`}
        value="-1"
        onClick={(e) => navigate(e)}
      >
        Go Back
      </button>
      <button
        className={`${
          pageNumber === 4 ? "hidden " : " "
        }text-white font-sans text-md bg-marine_blue px-4 py-2 rounded-lg`}
        value="1"
        onClick={(e) => navigate(e)}
      >
        Next Step
      </button>
      <button
        className={`${
          pageNumber === 4 ? " " : " hidden "
        }text-white font-sans text-md bg-purplish_blue px-4 py-2 rounded-lg`}
        onClick={handleSubmit}
      >
        Confirm
      </button>
    </div>
  );
}
