import axios from "axios";

const API_URL = "http://localhost:3001/students";

export const getStudents = async () => {
  return await axios.get(API_URL);
};
export const addStudentApi = async (newStudent) => {
  return await axios.post(API_URL, newStudent);
};
export const updateStudentApi = async (id, newStudent) => {
  return await axios.put(`${API_URL}/${id}`, newStudent);
};
export const deleteStudentApi = async (id) => {
  return await axios.delete(`${API_URL}/${id}`);
};
