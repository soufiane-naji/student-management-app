
const PrevButton = ({ prev, currentPage }) => {
  return (
    <button
      className="pagination-btn"
      onClick={prev}
      disabled={currentPage === 1}
    >
      ← Prev
    </button>
  );
};

export default PrevButton;
