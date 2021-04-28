const express = require('express');
const home = express.Router()

const Reminder = require('../models/reminder-model').reminder;
const reminder = new Reminder();
home.get('/', async function (req, res) {
    console.log("From DB");
    const results = await reminder.getAllReminder(); res.render('homepage', { 'reminder': results[0] });
})
module.exports = home;