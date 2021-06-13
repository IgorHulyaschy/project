import {Knex} from 'knex'

import {AppContext} from '../app'
import knex from '../database/database'
import Service from './service'

export class Controllers { 
  static async signUp(ctx: AppContext): Promise<void> {
    const data = ctx.body as {fname: string, lname: string, email: string, password: string};
    const user = await knex.transaction(async (trx: Knex.Transaction) => await Service.signUp(trx, data))
    ctx.status = 201;
    ctx.body = {
      user,
    }
  }
}

