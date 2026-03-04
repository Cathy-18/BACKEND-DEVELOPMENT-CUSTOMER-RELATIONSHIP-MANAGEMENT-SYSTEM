import Customer from '../models/Customer.js';

export const getCustomers = async (req, res) => {
  const customers = await Customer.find({});
  res.json(customers);
};

export const createCustomer = async (req, res) => {
  const { name, contact_info, status } = req.body;
  const customer = new Customer({ name, contact_info, status });
  const createdCustomer = await customer.save();
  res.status(201).json(createdCustomer);
};

export const getCustomerById = async (req, res) => {
  const customer = await Customer.findById(req.params.id);
  if (customer) {
    res.json(customer);
  } else {
    res.status(404).json({ message: 'Customer not found' });
  }
};

export const updateCustomer = async (req, res) => {
  const { name, contact_info, status } = req.body;
  const customer = await Customer.findById(req.params.id);

  if (customer) {
    customer.name = name || customer.name;
    customer.contact_info = contact_info || customer.contact_info;
    customer.status = status || customer.status;

    const updatedCustomer = await customer.save();
    res.json(updatedCustomer);
  } else {
    res.status(404).json({ message: 'Customer not found' });
  }
};

export const deleteCustomer = async (req, res) => {
  const customer = await Customer.findById(req.params.id);
  if (customer) {
    await customer.deleteOne();
    res.json({ message: 'Customer removed' });
  } else {
    res.status(404).json({ message: 'Customer not found' });
  }
};
