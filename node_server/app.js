const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');
const jwt = require("jsonwebtoken");
var expressJWT = require('express-jwt');

const app = express();
const port = 3000;

app.use(cors());
app.options('*', cors());
app.use(bodyParser.json({ limit: '10mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));

let secret = 'some_secret';

/* CODE IN BETWEEN */
//SECRET FOR JSON WEB TOKEN

/* ALLOW PATHS WITHOUT TOKEN AUTHENTICATION */
app.use(expressJWT({ secret: secret, algorithms: ['HS256'] })
    .unless(
        {
            path: [
                '/token/sign',
                '/encryptedData'
            ]
        }
    ));

//Root Open API
app.get('/', (req, res) => {
    res.json("Hello World");
});

/* CREATE TOKEN FOR USE */
app.get('/token/sign', (req, res) => {
    var userData = {
        "name": "Muhammad Bilal",
        "id": "4321"
    }
    let token = jwt.sign(userData, secret, { expiresIn: '150s' })
    res.status(200).json({ "token": token });
})

app.get('/path1', (req, res) => {
    res.status(200)
        .json({
            "success": true,
            "msg": "Secrect Access Granted"
        });
});

app.post('/encryptedData', (req, res) => {

    console.log(req.body);
    res.status(200).send({ Reply: ({ "Key 1 hun": "Baaa", "Key 2 hun": "Booo" }) })

})





/* LISTEN */
app.listen(port, function () {
    console.log("Listening to " + port);
});