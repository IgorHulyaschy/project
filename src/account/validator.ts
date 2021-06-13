import *  as Router from 'koa-joi-router'
const joi = Router.Joi;

const auth = {
  email: joi.string().min(3).max(20).required().email(),
  password: joi.string().min(6).max(20).required(),
};
const usersData = {
  fname: joi.string().min(3).max(20).required(),
  lname: joi.string().min(3).max(20).required(),
};
export class Validator {
  static signUp: Router.Config = {
    validate: {
      type: "json",
      body: {
        ...auth,
        ...usersData,
        
      },
    },
  };
}
