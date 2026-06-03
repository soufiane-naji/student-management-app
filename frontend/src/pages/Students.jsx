import { useContext, useEffect, useState } from "react";
import StudentCard from "../components/StudentCard";
import { StudentContext } from "../context/StudentContext";
import { toast } from "react-toastify";
import { AnimatePresence } from "framer-motion";
import Loading from "../components/SkeletonStudentCard";
import EmptyState from "../components/EmptyState";
import PrevButton from "../components/PrevButton";
import NextButton from "../components/NextButton";
import SearchInput from "../components/SearchInput";
import PaginationButtonNumber from "../components/PaginationButtonNumber";
import SelectFilter from "../components/SelectFilter";
import SelectSorting from "../components/SelectSorting";
import PageWrapper from "../components/PageWrapper";
import SkeletonStudentCard from "../components/SkeletonStudentCard";

const Students = () => {
  const { state, deleteStudent } = useContext(StudentContext);

  const [search, setSearch] = useState("");
  const [selectedFiliere, setSelectedFiliere] = useState("");
  const [sortBy, setSortBy] = useState("");

  const [currentPage, setCurrentPage] = useState(1);

  const studentsPerPage = 6;

  const filteredStudents = state.students.filter(
    (student) =>
      student.name.toLowerCase().includes(search.toLowerCase()) &&
      (selectedFiliere === "" || student.filiere === selectedFiliere)
  );

  const filieres = [
    ...new Set(state.students.map((student) => student.filiere)),
  ];

  const sortdArr = filteredStudents.sort((a, b) => {
    switch (sortBy) {
      case "name-asc":
        return a.name.localeCompare(b.name);
      case "name-desc":
        return b.name.localeCompare(a.name);
      case "age-asc":
        return a.age - b.age;
      case "age-desc":
        return b.age - a.age;
      default:
        return 0;
    }
  });

  const lastIndex = currentPage * studentsPerPage;
  const firstIndex = lastIndex - studentsPerPage;
  const currentStudents = sortdArr.slice(firstIndex, lastIndex);

  const totalPages = Math.ceil(filteredStudents.length / studentsPerPage);

  useEffect(() => {
    setCurrentPage(1);
  }, [search]);

  const prev = () => {
    setCurrentPage((p) => Math.max(p - 1, 1));
  };
  const next = () => {
    setCurrentPage((p) => Math.min(p + 1, totalPages));
  };

  useEffect(() => {
    if (state.error) {
      toast.error("Failed to fetch students");
    }
  }, [state.error]);

  return (
    <PageWrapper>
      <div>
        {state.loading ? (
          <div className="students-grid">
            {[...Array(6)].map((_, index) => (
              <SkeletonStudentCard key={index} />
            ))}
          </div>
        ) : (
          <>
            <div className="students-header">
              <h1 className="students-title">Students List</h1>
              <div className="students-actions">
                <SearchInput search={search} setSearch={setSearch} />
                <SelectFilter
                  selectedFiliere={selectedFiliere}
                  setSelectedFiliere={setSelectedFiliere}
                  filieres={filieres}
                />
                <SelectSorting sortBy={sortBy} setSortBy={setSortBy} />
              </div>
            </div>
            <div className="students-grid">
              <AnimatePresence>
                {currentStudents.length > 0 ? (
                  currentStudents.map((student) => (
                    <StudentCard
                      key={student.id}
                      student={student}
                      deleteStudent={deleteStudent}
                    />
                  ))
                ) : (
                  <EmptyState />
                )}
              </AnimatePresence>
            </div>
            {totalPages > 1 && (
              <div className="pagination">
                <PrevButton prev={prev} currentPage={currentPage} />
                <div className="pagination-pages">
                  {[...Array(totalPages + 1).keys()].slice(1).map((el) => (
                    <PaginationButtonNumber
                      key={el}
                      el={el}
                      currentPage={currentPage}
                      setCurrentPage={setCurrentPage}
                    />
                  ))}
                </div>
                <NextButton
                  next={next}
                  currentPage={currentPage}
                  totalPages={totalPages}
                />
              </div>
            )}
          </>
        )}
      </div>
    </PageWrapper>
  );
};

export default Students;
