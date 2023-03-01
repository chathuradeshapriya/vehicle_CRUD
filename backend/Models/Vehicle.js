const mongoose = require('mongoose')
const Schema = mongoose.Schema

let VehicleSchema = new Schema({

    name : {
        type: String
    },

    color: {
        type: String
    },

    number: {
        type: number
    },

},
{
    collation: 'vehicles'
}

)

module.exports = mongoose.model('Vehicle', VehicleSchema)