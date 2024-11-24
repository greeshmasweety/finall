import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function Expense() {
  const { id } = useParams(); // Get expense ID from URL
  const [expense, setExpense] = useState(null);

  useEffect(() => {
    const fetchExpense = async () => {
      try {
        const token = localStorage.getItem("token"); // Get token from localStorage
        const response = await axios.get(`http://localhost:5000/api/expenses/${id}`, {
          headers: { Authorization: `Bearer ${token}` }, // Include token
        });
        setExpense(response.data);
      } catch (error) {
        alert("Error fetching expense: " + error.response.data.message);
      }
    };

    fetchExpense();
  }, [id]);

  if (!expense) return <p>Loading...</p>;

  return (
    <div>
      <h2>Expense Details</h2>
      <p><strong>ID:</strong> {expense.id}</p>
      <p><strong>Category:</strong> {expense.category}</p>
      <p><strong>Amount:</strong> ${expense.amount}</p>
      <p><strong>Date:</strong> {new Date(expense.date).toLocaleDateString()}</p>
    </div>
  );
}

export default Expense;
