import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./Signup";
import Login from "./Login";
import Expense from "./Expense";

function App() {
  return (
    <Router>
      <div>
        <h1>Expense Tracker</h1>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/expense/:id" element={<Expense />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
