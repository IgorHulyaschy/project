import knex from '../database/database';
import user from '../models/user'
import {Knex} from 'knex'
import crypto from 'crypto'
interface RequestData {
  email: string,
  password: string,
  fname: string,
  lname: string,
}

class Service {
  static async signUp(trx:Knex.Transaction, data: RequestData) {
    const emailInLower = data.email.toLowerCase();
    const passwordHash = user.passToHash(data.password)
    data.email = emailInLower
    data.password = passwordHash
    const createdUser = user.create(trx, data)
    return createdUser;
  }
  
}

export default Service