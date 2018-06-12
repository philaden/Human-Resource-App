const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//creating the employee schemna 
const Employeeschema = new Schema ({
        id: {
            type: 'string',
            required: true,
            unique: true
        },
        name: {
            first: {
                type: 'string',
                required: true
            },
            last: {
                type: 'string',
                required: true 
            },
            team: {
                type: Schema.ObjectId,
                ref: 'team'
            },
            image : {
                type: 'string',
                default: 'images/user/png'
            },
            address: {
                line: {
                    type: ['string']
            },
            city: {
                type: 'string'
            },
            state: {
                type: 'string'
            },
            zip: {
                type: Number
            }
        }
    }
});
//creating the employee model
 module.exports = mongoose.model('Employee', Employeeschema);
