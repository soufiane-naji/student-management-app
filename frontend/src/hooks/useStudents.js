import { useEffect, useReducer } from "react";
import {
  addStudentApi,
  deleteStudentApi,
  getStudents,
  updateStudentApi,
} from "../services/studentService";
import { reducer } from "../reducers/studentReducer";

const initState = {
  students: [],
  loading: false,
  error: "",
};

const useStudents = () => {
  const [state, dispatch] = useReducer(reducer, initState);

  const fetchData = async () => {
    try {
      dispatch({ type: "FETCH_START" });
      const res = await getStudents();
      dispatch({ type: "FETCH_SUCCESS", payload: res.data });
    } catch (err) {
      dispatch({ type: "FETCH_ERROR", payload: "Failed to fetch students" });
    }
  };

  const addStudent = async (newStudent) => {
    try {
      await addStudentApi(newStudent);
      await fetchData();
    } catch (err) {
      dispatch({ type: "FETCH_ERROR", payload: "Failed to add student" });
    }
  };

  const updateStudent = async (id, newStudent) => {
    try {
      await updateStudentApi(id, newStudent);
      await fetchData();
    } catch (err) {
      dispatch({ type: "FETCH_ERROR", payload: "Failed to update student" });
    }
  };

  const deleteStudent = async (studentId) => {
    try {
      await deleteStudentApi(studentId);

      await fetchData();
    } catch (err) {
      dispatch({ type: "FETCH_ERROR", payload: "Failed to delete student" });
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return {
    state,
    addStudent,
    deleteStudent,
    updateStudent,
  };
};

export default useStudents;
