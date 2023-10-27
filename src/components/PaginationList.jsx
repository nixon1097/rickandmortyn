const PaginationList = ({ pages, currentPage, setCurrentPage }) => {
  return (
    <ul className="text-lg flex gap-5 justify-center flex-wrap  ">
      {pages.map((page) => (
        <li key={page}>
          <button
            className={`  bg-slate-600   h-8 w-8 rounded-full ${
              page === currentPage && "rounded-none bg-green-600"
            }  `}
            onClick={() => setCurrentPage(page)}
          >
            {page}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default PaginationList;
