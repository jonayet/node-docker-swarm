exports.port = process.env.OPENSHIFT_NODEJS_PORT || 8080;
exports.hosthost = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';
exports.mongoDbConnection = process.env.OPENSHIFT_MONGODB_DB_URL || 'mongodb://127.0.0.1:27017/';
