const db = require('../config/connection');
const {profile} = require('../models');
const profileSeeds = require('./profileSeeds.json');
const cleanDB = require('./cleanDB');

db.once('open', async () => {
  try {
    await cleanDB('profile', 'profiles');
    await profile.create(profileSeeds);
    console.log('all done!');
    process.exit(0);
  } catch (err) {
    throw err;
  }
});