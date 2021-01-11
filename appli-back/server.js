let express = require('express')
let app = express()
const mongoose = require('mongoose');
require('dotenv').config()

app.get('/status', (req, res) => {
    res.send('ok')
})
mongoose.connect(`mongodb://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_FULL_HOSTNAME}/e_commerce_mongo_1?authSource=admin&readPreference=primary?authSource=admin&readPreference=primary`, { useNewUrlParser: true, useUnifiedTopology: true },
(e) => {
    if (e == null)
        return console.log('Connected to db')
    console.error(e)
});

app.listen(process.env.PORT)