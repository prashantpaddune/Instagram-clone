module.exports = {
  // Get DB_URI on mongo atlas, this one is just for example
  DB_URI: 'mongodb://localhost:27017/instagram' || process.env.DB_URI,
  // Provide unique value
  PORT: 3001 || process.env.PORT,
  SECRET: 'prashant',
  CLOUDINARY_NAME: 'dyd0ckv4b',
  CLOUDINARY_KEY: '748592412323862',
  CLOUDINARY_SECRET: 'UhMVnfpYNyRpNg7CtVH3j-zIHOw'
}