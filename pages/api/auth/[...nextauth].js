/** @format */

import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

const options = {
  providers: [
    // OAuth authentication providers...

    Providers.Google({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
      authorizationUrl:
        'https://accounts.google.com/o/oauth2/v2/auth?prompt=consent&access_type=offline&response_type=code',
    }),
  ],
  // Optional SQL or MongoDB database to persist users
  //   database: process.env.DATABASE_URL,
};

export default (req, res) => NextAuth(req, res, options);
