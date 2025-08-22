import pkg from 'yup';
const { object, string, required, min, max } = pkg;

export const userSchema = object({
  name: string().min(2).max(100).required(),
  password: string().min(6).required()
});
