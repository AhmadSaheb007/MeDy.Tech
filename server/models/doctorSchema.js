const mongoose = require('mongoose');
const bcrypt = require("bcrypt");
const doctorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    cfpassword: {
        type: String,
        required: true
    },

});



doctorSchema.pre('save', async function (next) {
    if (this.isModified('password')) {
        
        this.password =await bcrypt.hash(this.password, 12);
        this.cfpassword =await bcrypt.hash(this.cfpassword, 12);
    }
    next();
});
const Doctor = mongoose.model('Doctor', doctorSchema);
module.exports = Doctor;

// method to compare a entered password with the database hashed password
// doctorSchema.methods.isCorrectPassword = async function (password) {
//     return await bcrypt.compare(password, this.password);
// };