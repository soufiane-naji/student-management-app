import z from "zod";

const studentSchema = z.object({
  name: z.string().min(3, { message: "Name must be at least 3 characters" }),
  age: z
    .number({
      required_error: "Age is required",
      invalid_type_error: "Age must be a number",
    })
    .min(1, { message: "Age must be greater than 0" }),
  filiere: z
    .string()
    .min(2, { message: "Filiere must be at least 2 characters" }),
});

export default studentSchema;