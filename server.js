const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors')
const app = express()
const port = 3000
app.use(cors());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json());

app.post('/login', function (req, res) {
    const { username, password } = req.body;
    if(username === 'admin' && password === 'admin') {
        return res.status(200).json({
                    status: 'success',
                    type: 'admin'
                });
    }
    else if(username === 'driver1' && password === 'driver1') {
        return res.status(200).json({
            status: 'success',
            type: 'user'
        });
    }
    return res.status(401).json({
        status: 'failure',
        message: 'Not a valid user'
    });
});

const cars = [{
    model: 'Ambassador',
    number: 'KA53051',
    driver: null    
}];
const drivers = [
    {
        name: 'Ajay'        
    }
]

app.route('/cars')
    .get((req, res) => {
        res.send(cars);
    })
    .post((req, res) => {

    })
    .put((req, res) => {

    });

app.get('/', (req, res) => res.send('Hello World!'));



app.listen(port, () => console.log(`Example app listening on port ${port}!`))