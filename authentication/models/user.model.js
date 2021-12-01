const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

const Schema = mongoose.Schema



const UserSchema = new Schema({
    userName: { type: String, required: true, unique: true},
    password: { type: String, required: true},
    tokens: [{ token: { type: String } }]
});

// UserSchema.pre('save', async function (next) {
//     const user = this

//     if (user.isModified('password')) {
//         user.password = await bcrypt.hash(user.password, 128)
//     }
//     next()
// });


UserSchema.statics.findByCredentials = async (userName, password) => {
    const user = await User.findOne({ 'userName': userName })

    if (!mart_person) {
        throw new Error('Unable to login!')
    }

    const isMatch = await bcrypt.compare(password, user.password)

    if (!isMatch) {
        throw new Error('Unable to login!')
    }

    return user
}

UserSchema.methods.generateAuthToken = async function() {
    
    try{
        console.log("generateAuthToken");
        const user = this;
        const token = jwt.sign({ _id: user._id.toString() }, 'maketoken');

        user.tokens = user.tokens.concat({ token });
        await user.save();

        return token;

    } catch (e) {
        console.log("error", e)
    }
    
}

const User = mongoose.model('User', UserSchema)

module.exports = User