const validUsers = ["jon@jon.com"];

/**
 * Mock isValidUser call
 * @param credentials
 */
const isValidUser = (credentials: Credentials): Boolean =>
  validUsers.includes(credentials.email);

export {
  isValidUser
};
