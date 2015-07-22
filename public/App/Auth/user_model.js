var DB = require('./db/**/*.js').DB;

var User = DB.Model.extend({
   tableName: 'tblUsers',
   idAttribute: 'userId',
});

module.exports = {
   User: User
};