import Case from '../models/Case.js';

export const getCases = async (req, res) => {
  const cases = await Case.find({}).populate('customer_id').populate('assigned_to', 'username');
  res.json(cases);
};

export const createCase = async (req, res) => {
  const { customer_id, assigned_to, priority, status } = req.body;
  const newCase = new Case({ customer_id, assigned_to, priority, status });
  const createdCase = await newCase.save();
  res.status(201).json(createdCase);
};

export const updateCase = async (req, res) => {
  const { priority, status, assigned_to } = req.body;
  const caseItem = await Case.findById(req.params.id);

  if (caseItem) {
    caseItem.priority = priority || caseItem.priority;
    caseItem.status = status || caseItem.status;
    caseItem.assigned_to = assigned_to || caseItem.assigned_to;

    const updatedCase = await caseItem.save();
    res.json(updatedCase);
  } else {
    res.status(404).json({ message: 'Case not found' });
  }
};

export const getCaseById = async (req, res) => {
  const caseItem = await Case.findById(req.params.id).populate('customer_id').populate('assigned_to', 'username');
  if (caseItem) {
    res.json(caseItem);
  } else {
    res.status(404).json({ message: 'Case not found' });
  }
};
