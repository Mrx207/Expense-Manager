import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem.js";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter.js";
import Card from "../UI/Card.js";

const Expenses = (props) => {
  const [filteredYear, setFilterYear] = useState("2020");
  const getFilterYear = (filterYear) => {
    console.log("expenses");
    console.log(filterYear);
    setFilterYear(filterYear);
    props.getFilterYear(new Date(filteredYear));
  };
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilterYear={getFilterYear}
        />
        {props.items.map((expense) => (
          <ExpenseItem
            title={expense.enteredTitle}
            date={expense.enteredDate}
            amount={expense.enteredAmount}
          ></ExpenseItem>
        ))}
      </Card>
    </div>
  );
};

export default Expenses;
