const Expense = require('../models/Expense');

// Add an expense
exports.addExpense = async (req, res) => {
  const { category, amount, date } = req.body;
  try {
    const expense = new Expense({
      userId: req.user,
      category,
      amount,
      date
    });
    await expense.save();
    res.json(expense);
  } catch (err) {
    res.status(500).json({ message: 'Error adding expense' });
  }
};

// Get all expenses of a user
exports.getExpenses = async (req, res) => {
  try {
    const expenses = await Expense.find({ userId: req.user });
    res.json(expenses);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching expenses' });
  }
};

// Delete an expense by ID
exports.deleteExpense = async (req, res) => {
  try {
    const expense = await Expense.findById(req.params.id);
    if (!expense) return res.status(404).json({ message: 'Expense not found' });
    if (expense.userId.toString() !== req.user) return res.status(403).json({ message: 'Access Denied' });

    await expense.remove();
    res.json({ message: 'Expense deleted' });
  } catch (err) {
    res.status(500).json({ message: 'Error deleting expense' });
  }
};
