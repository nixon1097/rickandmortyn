import { useEffect, useState } from "react";
import ResidentCard from "./ResidentCard";
import { paginationLogic } from "../utils/pagination";
import PaginationList from "./PaginationList";

const ResidentList = ({ residents }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const { pages, residentsInPage } = paginationLogic(currentPage, residents);

  useEffect(() => {
    setCurrentPage(1);
  }, [residents]);

  return (
    <section className=" mx-auto py-10">
      <PaginationList
        pages={pages}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />

      <section className="grid grid-cols-[repeat(auto-fit,_280px)] gap-6 justify-center  max-w-[1000px] mx-auto py-10">
        {residentsInPage.map((resident) => (
          <ResidentCard key={resident} residentEndpoint={resident} />
        ))}
      </section>

      <PaginationList
        pages={pages}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </section>
  );
};
export default ResidentList;
