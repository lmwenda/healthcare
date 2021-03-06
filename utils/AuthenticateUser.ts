import Joi, { Schema } from "@hapi/joi";

export default function ValidateUser(body: any): any{
    const schema: Schema = Joi.object({
        email: Joi.string().min(3).required().email(),
        username: Joi.string().min(4).required(),
        password: Joi.string().min(6).required(),
  });
  return schema.validate(body);
}
  
