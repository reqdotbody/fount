// Update with your config settings.

module.exports = {

  production: {
      client: 'postgresql',
      connection: process.env.DATABASE_URL,
      pool: {
          min: 2,
          max: 10
      },
      migrations: {
          tableName: 'knex_migrations',
          directory: './db/migrations'
      }
  },

  development: {
      client: 'postgresql',
      connection: 'pg://localhost/fount',
      pool: {
          min: 2,
          max: 10
      },
      migrations: {
          tableName: 'knex_migrations',
          directory: './db/migrations'
      }
  }

};

