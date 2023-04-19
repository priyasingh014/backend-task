//import Joi from 'joi';
import * as Joi from 'joi'; // Update import statement

const customerDataSchema = Joi.object({
  firstName: Joi.string().min(2).max(60).required(),
  lastName: Joi.string().min(2).max(60).required(),
  zipCode: Joi.number().integer().min(10000).max(99999).required(),
  mail: Joi.string().email().required(),
});

export default customerDataSchema;

