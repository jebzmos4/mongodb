const mongoose = require('mongoose');

var User = mongoose.model('User', {
    email: {
        required: true,
        trim: true,
        type: String,
        minLength: 1
    }
});


const newUser = new User({
    email: '  jebzmos4@gmail.com  '
});

// newUser.save().then((doc) => {
//     console.log('Saved  new user', doc);
// }, (e) => {
//     console.log('Unable to save User', e);

// })

module.exports = { User }