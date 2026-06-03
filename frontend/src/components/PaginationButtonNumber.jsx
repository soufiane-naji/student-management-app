const PaginationButtonNumber = ({ el, currentPage, setCurrentPage }) => {
  return (
    <button
      disabled={currentPage == el}
      onClick={() => setCurrentPage(el)}
      className={
        currentPage == el ? "pagination-number active" : "pagination-number"
      }
    >
      {el}
    </button>
  );
};

export default PaginationButtonNumber;
