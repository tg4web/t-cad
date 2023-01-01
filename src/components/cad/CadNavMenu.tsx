import { useUserSession } from "../../utils/useHooks";

const CadNavMenu = () => {
  const user = useUserSession();

  const options = ["Civilian", "Police", "Fire/EMS", "Communications"];

  if (user?.isAdmin) {
  }

  return (
    <div className="h-full w-full max-w-fit bg-white">
      <div className="flex h-full w-full flex-col">
        <div className="my-4 flex h-8 w-full justify-center bg-white">
          <form className="flex w-full flex-col justify-center text-center">
            <h1 className="pb-1">Select a role</h1>
            <select
              className="mx-2 text-center"
              title="Department Selector"
              id="departmentSelector"
            >
              <option id="option0" className="hidden" value="1">
                {options[0]}
              </option>
              <option id="option1" className="hidden" value="2">
                {options[1]}
              </option>
              <option id="option2" className="hidden" value="3">
                {options[2]}
              </option>
              <option id="option3" className="hidden" value="4">
                {options[3]}
              </option>
            </select>
          </form>
        </div>
        <ul id="civMenu" className="hidden h-full w-full p-6 text-center">
          <li className="my-1 w-full cursor-pointer border px-6">
            Character&apos;s
          </li>
          <li className="my-1 w-full cursor-pointer border px-6">
            Vehicle&apos;s
          </li>
          <li className="my-1 w-full cursor-pointer border px-6">
            Firearm&apos;s
          </li>
          <li className="my-1 w-full cursor-pointer border px-6">
            Go to Court
          </li>
        </ul>
        <ul id="leoMenu" className="hidden h-full w-full p-6 text-center">
          <li className="my-1 w-full cursor-pointer border px-6">Overview</li>
          <li className="my-1 w-full cursor-pointer border px-6">
            Status Menu
          </li>
          <li className="my-1 w-full cursor-pointer border px-6">
            Active Calls
          </li>
          <li className="my-1 w-full cursor-pointer border px-6">
            Record Search
          </li>
          <li className="my-1 w-full cursor-pointer border px-6">
            BOLO&apos;s
          </li>
        </ul>
        <ul id="fireEmsMenu" className="hidden h-full w-full p-6 text-center">
          <li className="my-1 w-full cursor-pointer border px-6">Overview</li>
          <li className="my-1 w-full cursor-pointer border px-6">
            Status Menu
          </li>
          <li className="my-1 w-full cursor-pointer border px-6">
            Active Calls
          </li>
          <li className="my-1 w-full cursor-pointer border px-6">
            Record Search
          </li>
        </ul>
        <ul id="commsMenu1" className="hidden h-full w-full p-6 text-center">
          <li className="my-1 w-full cursor-pointer border px-6">Overview</li>
          <li className="my-1 w-full cursor-pointer border px-6">
            Status Menu
          </li>
          <li className="my-1 w-full cursor-pointer border px-6">
            Active Calls
          </li>
          <li className="my-1 w-full cursor-pointer border px-6">
            Record Search
          </li>
          <li className="my-1 w-full cursor-pointer border px-6">Live Map</li>
        </ul>
        <div id="adminBtn" className="mb-10 hidden w-full text-center">
          <button
            onClick={() => {
              window.location.href = "/cad/admin";
            }}
            type="button"
          >
            Admin Panel
          </button>
        </div>
      </div>
    </div>
  );
};

export default CadNavMenu;
