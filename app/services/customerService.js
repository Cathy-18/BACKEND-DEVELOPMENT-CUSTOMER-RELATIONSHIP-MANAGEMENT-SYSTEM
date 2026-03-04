import Customer from '../models/Customer.js';

export const getAllCustomers = async () => {
  return await Customer.find({});
};

export const createNewCustomer = async (customerData) => {
  const customer = new Customer(customerData);
  return await customer.save();
};
