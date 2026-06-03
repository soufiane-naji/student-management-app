import { useNavigate, useParams } from "react-router-dom";
import { useContext, useEffect } from "react";
import StudentForm from "../components/StudentForm";
import { StudentContext } from "../context/StudentContext";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import studentSchema from "../schema/studentSchema";
import PageWrapper from "../components/PageWrapper";

const EditStudent = () => {
  const { state, updateStudent } = useContext(StudentContext);
  const { id } = useParams();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(studentSchema),
  });

  useEffect(() => {
    const student = state.students.find((student) => student.id == id);

    if (student) {
      reset(student);
    }
  }, [id]);

  const onSubmit = (data) => {
    console.log(data);

    updateStudent(id, data);

    reset();

    navigate("/students");
  };
  return (

    <PageWrapper>
      <StudentForm
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
        register={register}
        title="Edit Student"
        buttonText="Update Student"
        errors={errors}
      />
    </PageWrapper>
  );
};

export default EditStudent;
