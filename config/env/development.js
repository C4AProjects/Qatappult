'use strict';

module.exports = {
  db:  process.env.QATAPPULT_MONGODB_URL || 'mongodb://localhost/qatappult-dev',
  debug: 'true',
  mongoose: {
    debug: false
  },
  app: {
    name: 'QATAPPULT Fitness'
  },
  facebook: {
    clientID: '742345012506480',
    clientSecret:  'c4de262a1761aebc4c6c44dfdd9e359f',
    callbackURL: 'http://localhost:3000/auth/facebook/callback'
  },
  twitter: {
    clientID: process.env.TWITTER_CONSUMER_KEY || 'ubCwA1YVOXOR8NfUOv01U4WGk',
    clientSecret: process.env.TWITTER_CONSUMER_SECRET || 'mOWV8d9ivNWnvi7prshyXGLKWbJy1ys3NKC1IAN63Up0G1Pb7s',
    callbackURL: 'http://127.0.0.1:3000/auth/twitter/callback'
  },
  github: {
    clientID: 'DEFAULT_APP_ID',
    clientSecret: 'APP_SECRET',
    callbackURL: 'http://localhost:3000/auth/github/callback'
  },
  google: {
    clientID: 'GOOGLE_APP_ID',
    clientSecret: 'APP_SECRET',
    callbackURL: 'http://localhost:3000/auth/google/callback'
  },
  linkedin: {
    clientID: 'LINKEDIN_API_KEY',
    clientSecret: 'SECRET_KEY',
    callbackURL: 'http://localhost:3000/auth/linkedin/callback'
  },
  emailFrom: 'SENDER EMAIL ADDRESS', // sender address like ABC <abc@example.com>
  mailer: {
    service: 'SERVICE_PROVIDER', // Gmail, SMTP
    auth: {
      user: 'EMAIL_ID',
      pass: 'PASSWORD'
    }
  }
};
