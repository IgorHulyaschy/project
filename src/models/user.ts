const joi = require('@hapi/joi')
import {Knex} from 'knex'
import crypto from 'crypto'
import config from 'config'
import { IResult } from 'pg-promise/typescript/pg-subset';

interface Request {
  (trx: Knex.Transaction, data: object): object
}

const table = 'users'

const emailSchema = {
  email: joi.string().min(3).max(40).email({ minDomainSegments: 2 }).required(),
}
const passwordSchema = {
  password: joi.string().min(6).max(30).required(),
}
const createSchema = Object.assign({}, emailSchema, passwordSchema, {
  userId: joi.string().required(),
  fname: joi.string().max(30).min(3).required(),
  lname: joi.string().max(30).min(3).required(),
});




const create : Request = async (trx, data) => {
  const v = joi.validate(data, createSchema);
  if (v.error) {
    const errors = v.error.details.map((err: string) => console.log(err))
    return errors;
  }
  const results = await trx
    .insert(data)
    .into(table)
    .returning('*')
  return  { ...results.rows[0] }
}
const passToHash = (password: string) => {
  const passwordHash = crypto
    .pbkdf2Sync(password, config.get('crypto.salt'), config.get('crypto.iterations'), config.get('crypto.chars'), "sha256")
    .toString("hex");
    return passwordHash;
}
const getUserByEmail = (email: string) => {

}

export default {
  create,
  passToHash,
}