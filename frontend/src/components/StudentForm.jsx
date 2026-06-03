const StudentForm = ({
  handleSubmit,
  onSubmit,
  title,
  buttonText,
  errors,
  register,
}) => {
  return (
    <div className="form-container">
      <h2 className="form-title">{title}</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label htmlFor="">Name</label>
          <input type="text" className="input" {...register("name")} />
          <p className="error">{errors.name?.message}</p>
        </div>
        <div className="form-group">
          <label htmlFor="">Age</label>
          <input
            type="number"
            className="input"
            {...register("age", { valueAsNumber: true })}
          />
          <p className="error">{errors.age?.message}</p>
        </div>
        <div className="form-group">
          <label htmlFor="">Filiere</label>
          <input type="text" className="input" {...register("filiere")} />
          <p className="error">{errors.filiere?.message}</p>
        </div>
        <button className="btn btn-primary">{buttonText}</button>
      </form>
    </div>
  );
};

export default StudentForm;
