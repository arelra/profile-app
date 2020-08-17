import { isValidUser } from '../user/user';
import { getProfile } from '../profile/profile';

/**
 * Mock authentication
 * - if a valid user return a basic profile
 * - otherwise return undefined
 * @param credentials 
 */
const authenticateUser = (credentials: Credentials): Profile | undefined => {
  if (isValidUser(credentials)) {
    return getProfile(credentials.email);
  }
  return undefined;
}

export {
  authenticateUser
};
