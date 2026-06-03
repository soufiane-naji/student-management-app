export const validateStudent = (data) => {
  let errors = {};

  if (!data.name.trim()) {
    errors.name = "Name is required";
  }

  if (!data.age || Number(data.age) <= 0) {
    errors.age = "Age must be greater than 0";
  }

  if (!data.filiere.trim()) {
    errors.filiere = "Filiere is required";
  }

  if (Object.keys(errors).length > 0) return errors;

  return null;
};
