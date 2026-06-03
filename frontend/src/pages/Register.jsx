import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import registerSchema from "../schema/registerSchema";
import { toast } from "react-toastify";
import PageWrapper from "../components/PageWrapper";

const Register = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: zodResolver(registerSchema) });

  const onSubmit = (data) => {
    localStorage.setItem("registeredUser", JSON.stringify(data));
    reset();

    toast.success("Compte is created");

    navigate("/login");
  };

  return (
    <PageWrapper>
      <div className="form-container">
        <h2 className="form-title">Register</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <label htmlFor="">Name</label>
            <input type="text" className="input" {...register("name")} />
            <p className="error">{errors.name?.message}</p>
          </div>
          <div className="form-group">
            <label htmlFor="">Email</label>
            <input type="email" className="input" {...register("email")} />
            <p className="error">{errors.email?.message}</p>
          </div>
          <div className="form-group">
            <label htmlFor="">Password</label>
            <input
              type="password"
              className="input"
              {...register("password")}
            />
            <p className="error">{errors.password?.message}</p>
          </div>
          <button className="btn btn-primary">Register</button>
        </form>
      </div>
    </PageWrapper>
  );
};

export default Register;
