const admin = require('firebase-admin');

module.exports = function(req, res) {

    //Verify the user provided a phone
    if (!req.body.phone){
        return res.status(422).send({ error : 'Bad input!' });
    }

    //Format the phone number to remove dashes and parentesis
    const phone = String(req.body.phone).replace(/[^\d]/g, "");

    //Create a new user account using the phone number
    admin.auth().createUser({ uid: phone })
        .then(user => res.send(user))
        .catch(err => res.status(422).send({ error: err }))

    //Respond o the user request, said the account was made


}