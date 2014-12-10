'use strict';

module.exports = {
  db:  process.env.QATAPPULT_MONGODB_URL || 'mongodb://localhost/qattapult-prod',
  debug: 'false',
  mongoose: {
    debug: false
  },
  /**
   * Database options that will be passed directly to mongoose.connect
   * Below are some examples.    mongodb://agni_user:agni_password@localhost/agni_db
   * See http://mongodb.github.io/node-mongodb-native/driver-articles/mongoclient.html#mongoclient-connect-options
   * and http://mongoosejs.com/docs/connections.html for more information
   */
  dbOptions: {
    /*
    server: {
        socketOptions: {
            keepAlive: 1
        },
        poolSize: 5
    },
    replset: {
      rs_name: 'myReplicaSet',
      poolSize: 5
    },
    db: {
      w: 1,
      numberOfRetries: 2
    }
    */
  },
  app: {
    name: 'QATAPPULT, Fitness Application - Production'
  },
  facebook: {
    clientID: process.env.FACEBOOK_ID || '1387820881512411',
    clientSecret:  process.env.FACEBOOK_SECRET || '8d3d52d608e6bc8a3932705f8f1499c4',
    callbackURL: process.env.FACEBOOK_CALLBACK_URL || 'http://qatappult.c4asolution.com:8080/auth/facebook/callback'
  },
  twitter: {
    clientID: process.env.TWITTER_CONSUMER_KEY || 'ubCwA1YVOXOR8NfUOv01U4WGk',
    clientSecret: process.env.TWITTER_CONSUMER_SECRET || 'mOWV8d9ivNWnvi7prshyXGLKWbJy1ys3NKC1IAN63Up0G1Pb7s',
    callbackURL: 'http://qatappult.c4asolution.com:8080/auth/twitter/callback'
  },
  github: {
    clientID: 'DEFAULT_APP_ID',
    clientSecret: 'APP_SECRET',
    callbackURL: 'http://localhost:3000/auth/github/callback'
  },
  google: {
    clientID: process.env.GOOGLE_CONSUMER_KEY || 'GOOGLE_CONSUMER_KEY',
    clientSecret: process.env.GOOGLE_CONSUMER_SECRET || 'CONSUMER_SECRET',
    callbackURL: 'http://localhost:3000/auth/google/callback'
  },
  linkedin: {
    clientID: process.env.LINKEDIN_CONSUMER_KEY || 'LINKEDIN_API_KEY',
    clientSecret: 'SECRET_KEY',
    callbackURL: 'http://localhost:3000/auth/linkedin/callback'
  },
  emailFrom: 'SENDER EMAIL ADDRESS', // sender address like ABC <abc@example.com>
  mailer: {
    service: 'SERVICE_PROVIDER',
    auth: {
      user: 'EMAIL_ID',
      pass: 'PASSWORD'
    }
  }
};
