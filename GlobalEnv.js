module.exports = {
    app_name: 'Meetdex',
    uri_database: process.env.MONGODB_URI || 'mongodb://localhost/meetdex',
    host: 'http://localhost',
    port: process.env.PORT || 3000
}