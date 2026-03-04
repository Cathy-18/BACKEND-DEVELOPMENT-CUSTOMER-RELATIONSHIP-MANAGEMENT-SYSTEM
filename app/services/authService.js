import User from '../models/User.js';

export const findUserByUsername = async (username) => {
  return await User.findOne({ username });
};

export const createUser = async (userData) => {
  return await User.create(userData);
};
