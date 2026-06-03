import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { StudentContext } from "../context/StudentContext";
import Loading from "../components/SkeletonStudentCard";
import PageWrapper from "../components/PageWrapper";

const DetailsStudent = () => {
  const { state } = useContext(StudentContext);

  const { id } = useParams();

  const [student, setStudent] = useState(null);

  useEffect(() => {
    const student = state.students.find((student) => student.id == id);
    setStudent(student);
  }, [id]);

  if (!student) return <Loading />;
  return (
    <PageWrapper>
      <div className="details-container">
        <div className="details-card">
          <div className="student-avatar">
            {student.name.charAt(0).toUpperCase()}
          </div>

          <h2>{student.name}</h2>

          <div className="details-info">
            <p>
              <strong>Age:</strong> {student.age}
            </p>

            <p>
              <strong>Filiere:</strong> {student.filiere}
            </p>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default DetailsStudent;
