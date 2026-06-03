import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import StudentForm from "../components/StudentForm";
import { StudentContext } from "../context/StudentContext";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import studentSchema from "../schema/studentSchema";
import PageWrapper from "../components/PageWrapper";

const AddStudent = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(studentSchema),
  });

  const { addStudent } = useContext(StudentContext);

  const onSubmit = (data) => {
    addStudent({
      ...data,
      id: Date.now(),
      age: Number(data.age),
    });

    reset();

    navigate("/students");
  };
  return (
    <PageWrapper>
      <StudentForm
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
        title="Add Student"
        buttonText="Add Student"
        errors={errors}
        register={register}
      />
    </PageWrapper>
  );
};

export default AddStudent;
