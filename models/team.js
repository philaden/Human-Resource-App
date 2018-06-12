const mongoose = require('mongoose');
const async = require('async');
const postFind = require('mongoose-post-find');
const Schema = mongoose.Schema;
const Teamschema = new Schema({
    name: {
        type: 'string',
        required: true
    },
    members: {
        type: [Schema.Mixed]
    }
});
//assign employee based on teamID
const _attachMembers = (Employee, result, callback) => {
    Employee.find({team: result._id}, function(error, employees){
        if(error) {
            return callback(error);
        }
        //put query result from employee team id into result
        result.members = employees;
        callback (null, result);
    });
};
//listen for find() and fineOne()
//result carries employees team ID called asynchronously from attachMembers()
Teamschema.plugin(postFind, {
    //use in-built plug to call find() and find one()
    find: function(result, callback){
        const Employee = mongoose.model('Employee');
        //async for each in result apply attachMembers i.e. find each ID
        async.each(result, function(item, callback){
            _attachMembers(Employee, item, callback);
        }, function(error){
            if(error) {
                return callback(error);
            }
            callback(null, result)
        });
    },
    findOne: function (result, callback){
        const Employee = mongoose.model('Employee');
        _attachMembers(Employee, result, callback);
    }
});
module.exports = mongoose.model('Team', 'Teamschema');

