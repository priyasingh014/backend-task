import * as Joi from 'joi'; // Update import statement

const companyDataSchema = Joi.object({
  name: Joi.string().required().min(2).max(60),
  phone: Joi.number().integer().min(10).max(99999999999999999999).required()
//  phone: Joi.number().required().min(2).max(20)
});

export default companyDataSchema;

