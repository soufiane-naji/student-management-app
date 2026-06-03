import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import loginSchema from "../schema/loginSchema";
import { toast } from "react-toastify";
import PageWrapper from "../components/PageWrapper";

const Login = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: zodResolver(loginSchema) });

  const { login } = useContext(AuthContext);

  const onSubmit = (data) => {
    let authUser = JSON.parse(localStorage.getItem("registeredUser"));

    if (!authUser) {
      toast.error("No registered user found");
      reset(data);
      return;
    }

    if (authUser.email == data.email && authUser.password == data.password) {
      login(authUser);
      reset();
      toast.success("Login is successfuly");
      navigate("/students");
    } else {
      toast.error("Email ou password incorrect");
      reset(data);
    }
  };

  return (
    <PageWrapper>
      <div className="form-container">
        <h2 className="form-title">Login</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
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
          <button className="btn btn-primary">Login</button>
        </form>
      </div>
    </PageWrapper>
  );
};

export default Login;
