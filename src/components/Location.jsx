import { IconSearch } from "@tabler/icons-react";
import axios from "axios";
const Location = ({ location, setLocation }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const idLocation = e.target.idLocation.value;
    const URL_API = `https://rickandmortyapi.com/api/location/${idLocation}`;
    axios
      .get(URL_API)
      .then(({ data }) => setLocation(data))
      .catch((err) => console.log(err));
  };
  return (
    <section className=" grid  justify-center items-center  max-w-[1000px] mx-auto  ">
      <form
        onSubmit={handleSubmit}
        className=" text-sm flex px-2 sm:mx[15%] max-w-[600px] justify-center   "
      >
        <input
          min={1}
          max={126}
          required
          id="newLocation"
          placeholder=" type a new location... "
          name="idLocation"
          type="number"
          className="bg-neutral-950   outline-none  flex-1 border-2 border-green-800 text-center"
        />
        <button className=" bg-green-700 border-2 border-green-500 py-2 px-4 flex items-center gap-2">
          Search <IconSearch size={19} />
        </button>
      </form>

      {/* info location */}
      <section className="grid gap-4   mt-8">
        <h2 className="font-medium text-[#8EFF8B] text-center ">
          ¡Wellcome to the{" "}
          <span className="font-bold text-xl">{location?.name}</span> Universe!
        </h2>

        <ul className="flex  justify-around flex-wrap gap-4 text-[#938686] font-medium border-green-500 border-2   p-4 ">
          <li className="gap-2 flex ">
            Type:{" "}
            <span className="font-semibold text-white">{location?.type}</span>
          </li>
          <li className="gap-2 flex ">
            Dimension:{" "}
            <span className="font-semibold truncate  text-white">
              {location?.dimension}
            </span>
          </li>
          <li className="gap-2 flex ">
            Population:
            <span className="font-semibold text-white">
              {location?.residents.length}
            </span>
          </li>
        </ul>
      </section>
    </section>
  );
};

export default Location;
