const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({extend: true}));
app.use(express.json());

const reservations = [
{
    routeName: 'Name',
    contact: 'Phone Number',
    email: 'Email',
    uniqueId: 'Nickname',
},
];

app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'index')));
app.get('/reservation', (req, res) => res.sendFile(path.join(__dirname, 'reservation')));
app.get('/thirdPage', (req, res) => res.sendFile(path.join(__dirname, 'thirdPage')));

app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));