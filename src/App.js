import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses.js";
import NewExpense from "./components/NewExpense/NewExpense.js";

const DUMMY_EXPENSES = [];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const getFormData = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
    console.log("in apps");
    console.log(expenses);
  };
  // eslint-disable-next-line
  let expensesNew = [];
  const onFilterYearSelection = (filteredYear) => {
    expensesNew = expenses.filter((expense) => {
      return expense.enteredDate.getFullYear() === filteredYear;
    });
  };

  return (
    <div>
      <h2>Lets get started</h2>
      <NewExpense getExpenseData={getFormData}></NewExpense>
      <Expenses
        items={expenses}
        getFilterYear={onFilterYearSelection}
      ></Expenses>
    </div>
  );
};

export default App;
