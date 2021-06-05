const joi = require('@hapi/joi')

const createSchema = {
  userId: joi.string().required(),
  fname: joi.string().max(30).min(3).required(),
  lname: joi.string().max(30).min(3).required(),
  email: joi.string().min(3).max(40).email({ minDomainSegments: 2 }).required(),
  password: joi.string().min(6).max(30).required(),
}

interface Request {

}
const table = 'users'
/**
 * Create a shipment
 *
 * @async
 * @function create
 * @param {Object} data - Data to use for creating
 * @param {Object} trx - Knex transaction object
 * @return {Promise<object>} - The created shipment
 */

const create = async (trx, data) => {
  const v = joi.validate(data, createSchema);
  if (v.error) {
    const errors = v.error.details.map(err => err.message)
    return errors;
  }
  const results = await trx
    .insert(data)
    .into(table)
    .returning('*')
  return  { ...results.rows[0] }
}