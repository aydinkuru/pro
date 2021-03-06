const createError = require('http-errors')
const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const session = require('express-session')
const MongoStore = require('connect-mongo')(session)
const passport = require('passport')
const cors = require('cors')
const helmet = require('helmet')
const mongoSanitize = require('express-mongo-sanitize')
const { errors } = require('celebrate')

const User = require('./models/user')

const mongooseConnection = require('./database-connection')
const socketService = require('./socket-service')

const indexRouter = require('./routes/index')
const usersRouter = require('./routes/users')
const photosRouter = require('./routes/photos')
const accountRouter = require('./routes/account')
