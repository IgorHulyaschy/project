import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('users_data', function(table) {
    table.increments('id');
    table.string('fname').notNullable();
    table.string('lname').notNullable();
    table.string('email').notNullable().unique();
    table.string('password').notNullable();

  })
}


export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('users_data');
}

