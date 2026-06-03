import { Link } from "react-router-dom";
import ConfirmModal from "./ConfirmModal";
import { useState } from "react";
import { motion } from "framer-motion";

const StudentCard = ({ student, deleteStudent }) => {
  const { id, name, age, filiere } = student;
  const [isOpen, setIsOpen] = useState(false);

  const handleDelete = () => {
    deleteStudent(id);
    setIsOpen(false);
  };

  return (
    <>
      <motion.div
        className="student-card"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        <h2>{name}</h2>

        <p>
          <strong>Age:</strong> {age}
        </p>

        <p>
          <strong>Filiere:</strong> {filiere}
        </p>

        <div className="actions">
          <Link className="btn btn-warning" to={`/editstudent/${id}`}>
            Edit
          </Link>

          <button className="btn btn-danger" onClick={() => setIsOpen(true)}>
            Delete
          </button>

          <Link className="btn btn-view" to={`/students/${id}`}>
            View
          </Link>
        </div>
      </motion.div>
      <ConfirmModal
        isOpen={isOpen}
        onConfirm={handleDelete}
        onCancel={() => setIsOpen(false)}
      />
    </>
  );
};

export default StudentCard;
