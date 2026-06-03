const NextButton = ({ next, currentPage, totalPages }) => {
  return (
    <button
      className="pagination-btn"
      onClick={next}
      disabled={currentPage === totalPages}
    >
      Next →
    </button>
  );
};

export default NextButton;
