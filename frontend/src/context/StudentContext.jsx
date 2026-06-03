import { createContext } from "react";
import useStudents from "../hooks/useStudents";

export const StudentContext = createContext();

export const StudentProvider = ({ children }) => {
  const studentData = useStudents();

  return (
    <StudentContext.Provider value={studentData}>
      {children}
    </StudentContext.Provider>
  );
};
