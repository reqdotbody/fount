// Update with your config settings.

module.exports = {

  development: {
      client: 'postgresql',
      connection: {
          host: process.env.DATABASE_URL || '127.0.0.1',
          database: "fount"
      },
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

