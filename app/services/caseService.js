import Case from '../models/Case.js';

export const getAllCases = async () => {
  return await Case.find({}).populate('customer_id').populate('assigned_to', 'username');
};

export const createNewCase = async (caseData) => {
  const newCase = new Case(caseData);
  return await newCase.save();
};
