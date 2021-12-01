const User = require('../models/user.model');

exports.login = async (req, res) => {
    // try {
    //     const user = await User.findByCredentials(req.body.userName, req.body.password);
    //     const token = await mart.generateAuthToken()
    //     res.send({ mart, token })
    // } catch (e) {
    //     res.status(400).send()
    // }
    console.log("data ", req.body);
    res.status(200).send('response from login Method')
}

exports.signup = async (req, res) => {

    console.log("data ", req.body);
    // res.status(200).send('response from signup Method')
    const userName = req.body.userName;
    const password = req.body.password;
    try {
        
        var user = new User({
            userName: userName,
            password: password
        });
        // await user.save()
        const token = await user.generateAuthToken()
        res.send({user,token})
    } catch (e) {
        console.log("error", e)
        res.status(400).send()
    }
}