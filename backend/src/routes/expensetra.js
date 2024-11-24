const express = require('express');
const router = express.Router();
const expenseController = require('../controllers/expenseController');
const authMiddleware = require('../middleware/authmiddleware');

// Protect routes with authentication middleware
router.post('/', authMiddleware, expenseController.addExpense);
router.get('/', authMiddleware, expenseController.getExpenses);
router.delete('/:id', authMiddleware, expenseController.deleteExpense);

module.exports = router;
