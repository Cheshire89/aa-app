const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const education = require('../data/education');
const jobs = require('../data/jobs');
const skills = require('../data/skills');

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE, OPTIONS');
  next();
});

app.post('/api/education', (req, res, next) => {
  const post = req.body;
  console.log('post', post);
  res.status(201).json(post);
});

app.get('/api/education', (req, res, next) => {
  return res.status(200).json({
    message: 'Education fetched',
    data: education,
    status: res.status,
    success: true,
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
