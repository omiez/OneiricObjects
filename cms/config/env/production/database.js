module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'postgres',
        host: env('DATABASE_HOST', 'localhost'),
        port: env.int('DATABASE_PORT', 5432),
        database: env('DATABASE_NAME', 'strapi'),
        username: env('DATABASE_USERNAME', 'strapi'),
        password: env('DATABASE_PASSWORD', 'strapi'),
        schema: env('DATABASE_SCHEMA', 'public'), // Not Required
        ssl: {
          rejectUnauthorized: env.bool('DATABASE_SSL_SELF', false), // For self-signed certificates
        },
      },
      options: {
        debug: false,
        pool: {
          min: 0,
          max: 100,
          acquireTimeoutMillis: 300000,
          createTimeoutMillis: 300000,
          destroyTimeoutMillis: 50000,
          idleTimeoutMillis: 300000,
          reapIntervalMillis: 10000,
          createRetryIntervalMillis: 2000,
          propagateCreateError: false
        }
      },
    },
  },
});