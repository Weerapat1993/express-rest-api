
// FACEBOOK CONFIG
export const FACEBOOK_CONFIG = {
  clientID      : process.env.FACEBOOK_CLIENT_ID,
  clientSecret  : process.env.FACEBOOK_CLIENT_SECRET,
  callbackURL   : process.env.FACEBOOK_CALLBACK_URL,
  profileFields : ['id', 'displayName', 'name', 'emails', 'gender', 'photos'],
};

