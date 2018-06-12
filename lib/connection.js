const mongoose = require('mongoose');
const dbUrl = 'mongodb://localhost/myapp';
mongoose.connect(dbUrl);
//close the mongoose connection on Control + c
process.on('SIGINT', function(){
    mongoose.connection.close(function(){
        console.log('mongoose default connection disconnected');
        process.exit(0);
    });
});

require('../models/employee');
require('../models/team');

