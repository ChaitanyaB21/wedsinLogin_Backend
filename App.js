const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

mongoose.connect('mongodb://127.0.0.1:27017/wedsinLogin', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const userSchema = new mongoose.Schema({
    Name: String,
    Gender: String,
    LookingFor: String,
    date: Date,
    Religion: String,
    Cast: String,
    MotherTongue: String,
    MaritalStatus: String
})

const User = mongoose.model('User', userSchema);

app.post("/form", (req, res) => {
    // console.log(req.body.Name);
    const user = new User({
        Name: req.body.Name,
        Gender: req.body.Gender,
        LookingFor: req.body.LookingFor,
        date: req.body.date,
        Religion: req.body.Religion,
        Cast: req.body.Cast,
        MotherTongue: req.body.MotherTongue,
        MaritalStatus: req.body.MaritalStatus,
    })

    user.save();
    console.log('Data sent');
});




app.listen(4000, () => {
    console.log('Backend running smoothly at PORT 4000');
});
