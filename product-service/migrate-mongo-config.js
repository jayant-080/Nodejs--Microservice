const config = {
  mongodb: {
    // MongoDB connection URL inside Docker
    url: "mongodb://localhost:27017",

    // Name of your MongoDB database
    databaseName: "microtwo-product-db",

    options: {
      useNewUrlParser: true, // removes a deprecation warning when connecting
      useUnifiedTopology: true, // removes a deprecation warning when connecting
    }
  },

  // Path to your migration scripts directory
  migrationsDir: "src/infrastructure/databse/migration",

  // MongoDB collection to track applied migrations
  changelogCollectionName: "changelog",

  // Use .ts for TypeScript migration files
  migrationFileExtension: ".js",

  // Don't change this unless needed
  useFileHash: false,

  moduleSystem: 'commonjs',
};

module.exports = config;
