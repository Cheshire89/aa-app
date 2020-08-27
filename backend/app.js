const express = require('express');
const app = express();

const education = require('../data/education');
const jobs = require('../data/jobs');
const skills = require('../data/skills');

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Header', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.use('/api/education', (req, res, next) => {
  return res.status(200).json({
    message: 'Education fetched',
    data: education,
  });
});

app.use('/api/jobs', (req, res, next) => {
  return res.status(200).json({
    message: 'Jobs fetched',
    data: jobs,
  });
});

app.use('/api/skills', (req, res, next) => {
  return res.status(200).json({
    message: 'Skills fetched',
    data: skills,
  });
});

module.exports = app;
