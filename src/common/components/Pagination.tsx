import React from "react";

interface Obj {
  page: number;
  setPage: any;
  totalPages: number;
}

const Pagination = (obj: Obj) => {
  const { page, setPage, totalPages } = obj;
  return (
    <div className="flex justify-between mt-4">
      <button
        className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l"
        disabled={page === 1}
        onClick={() => setPage(page - 1)}
      >
        Prev
      </button>
      <span className="text-gray-700">
        Page {page} of {totalPages}
      </span>
      <button
        className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r"
        disabled={page === totalPages}
        onClick={() => setPage(page + 1)}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
