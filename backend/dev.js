module.exports = {
  // Get DB_URI on mongo atlas, this one is just for example
  DB_URI: 'mongodb://localhost:27017/instagram' || process.env.DB_URI,
  // Provide unique value
  PORT: 3001 || process.env.PORT,
  SECRET: 'prashant'
}