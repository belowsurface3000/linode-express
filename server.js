const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const path = require('path');
const dotenv = require('dotenv');

dotenv.config();
const port = process.env.PORT;
const app = express();
app.use(express.json());
app.use(cors({ origin : "http://localhost:3000", credentials: true }));
app.use(morgan('dev'));

app.use(express.static(path.join(__dirname, "client/out")));
app.get('*',(req, res)=>{
    res.sendFile(path.join(__dirname + "/client/out/index.html"))
});

app.listen(port, () => {
    console.log(`Listening to port ${port}!`)
});