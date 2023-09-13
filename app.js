const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const passport = require('passport');
const cookieSession = require('cookie-session');
const path = require('path');
const { createServer } = require('http');
const { Server } = require('socket.io');
require('dotenv').config();
const corsOption =require('./config/corsoption')

const postsRoutes = require('./routes/posts');
const usersRoutes = require('./routes/users');
const commentsRoutes = require('./routes/comments');
const tagsRoutes = require('./routes/tags');
const aiRoutes=require('./routes/aicontent')
const HttpError = require('./models/http-error');
const { socketHandlers } = require('./utils/socket');

const {
  COOKIE_KEY,
  PORT,
  NODE_ENV,
  CLIENT_URL,
} = process.env;

const httpServer = createServer(app);

app.set('trust proxy', 1);

app.use(
  cookieSession({
    name: 'session',
    keys: [COOKIE_KEY],
    maxAge: 24 * 60 * 60 * 1000, // session will expire after 24 hours
    secure: NODE_ENV === 'development' ? false : true,
    sameSite: NODE_ENV === 'development' ? false : 'none',
  })
);

app.use(bodyParser.json());

const io = new Server(httpServer, {
  cors: corsOption,
});
socketHandlers(io);

app.use(
  cors(corsOption)
);

app.use('/api/posts', postsRoutes);

app.use('/api/users', usersRoutes);

app.use('/api/comments', commentsRoutes);

app.use('/api/tags', tagsRoutes);

app.use('/api/ai',aiRoutes)

app.get('/', (req, res) => {
  res.send('DEV.to is running');
});

// app.use((req, res, next) => {
//   throw new HttpError('Could not find the route', 404);
// });

app.use((error, req, res, next) => {
  if (res.headerSent) {
    //res already sent ? => don't send res, just forward the error
    return next(error);
  }
  //else, send a res
  res.status(error.code || 500);
  res.json({
    message: error.message || 'An unknown error occurred',
  });
});

mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@blogdb.6k4lvnv.mongodb.net&authSource=admin/test`,
    {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
    }
  )
  .then(() => {
    httpServer.listen(PORT || 5000, () => {
      console.log('Starting server');
    });
  })
  .catch((err) => {
    console.log(err);
  });
