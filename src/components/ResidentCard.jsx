import axios from "axios";
import { useEffect, useState } from "react";
import { characterStatus } from "../constants/residents";
const ResidentCard = ({ residentEndpoint }) => {
  const [resident, setResident] = useState(null);

  useEffect(() => {
    axios
      .get(residentEndpoint)
      .then(({ data }) => setResident(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <article className=" border-green-500  border-4 ">
      <header className="relative">
        <img src={resident?.image} alt="" />

        <div className="absolute  bottom-4 left-1/2 -translate-x-1/2 bg-black/80 text-white px-4 py-1 rounded-md flex justify-center items-center gap-2 ">
          <div
            className={`h-3 w-3 ${
              characterStatus[resident?.status]
            } rounded-full`}
          ></div>
          <span>{resident?.status}</span>
        </div>
      </header>
      <div className=" grid   justify-center ">
        <h4> {resident?.name}</h4>
        <ul>
          <li>Species: {resident?.species}</li>
          <li>Origen: {resident?.origin.name}</li>
          <li>Times apper: {resident?.episode.length} </li>
        </ul>
      </div>
    </article>
  );
};
export default ResidentCard;
