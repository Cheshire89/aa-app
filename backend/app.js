const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();

const env = {
  user: 'Sasha',
  pass: 'hugeM%40tch89',
  db: 'aaPersonal',
};
mongoose
  .connect(
    `mongodb+srv://${env.user}:${env.pass}@aapersonalcluster.k0bio.mongodb.net/${env.db}?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then((res) => console.log('Connected to db'))
  .catch(() => console.log('Db connection failed!'));

const education = require('../data/education');
const jobs = require('../data/jobs');
const skills = require('../data/skills');

const School = require('./models/school');
const Job = require('./models/job');
const Skill = require('./models/skill');

app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE, OPTIONS');
  next();
});

app.get('/api/schools', (req, res, next) => {
  School.find().then((docs) => {
    res.status(200).json({
      message: 'Schools fetched',
      data: docs,
      status: res.status,
      success: true,
    });
  });
});

app.post('/api/schools', (req, res, next) => {
  const school = new School({
    ...req.body,
  });
  school.save().then((saveRes) => {
    res.status(200).json({
      message: 'School added',
      data: saveRes,
      status: res.status,
      success: true,
    });
  });
});

app.delete('/api/schools/:id', (req, res, next) => {
  School.deleteOne({ _id: req.params.id }).then(() => {
    res.status(200).json({
      message: 'School deleted',
      data: {
        _id: req.params.id,
      },
      status: res.status,
      success: true,
    });
  });
});

app.get('/api/jobs', (req, res, next) => {
  return res.status(200).json({
    message: 'Jobs fetched',
    data: jobs,
    status: res.status,
    success: true,
  });
});

app.get('/api/skills', (req, res, next) => {
  return res.status(200).json({
    message: 'Skills fetched',
    data: skills,
    status: res.status,
    success: true,
  });
});

module.exports = app;
