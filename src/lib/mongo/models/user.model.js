const mongoose = require('mongoose');

// Søger for at vores scheme bliver overholdt ved alle actions.
mongoose.set('runValidators', true);

// Vores user Model
const userSchema = new mongoose.Schema({
    password: {type: String},
    email: {type: String, required: true, unique: true},
    role : {type: String , default: "user"},
})

module.exports = mongoose.model('user', userSchema);