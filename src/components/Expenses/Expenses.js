import { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const expenseItems = props.expenses.map((expense) => (
    <ExpenseItem
      date={expense.date}
      title={expense.title}
      amount={expense.amount}
    />
  ));
  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      {expenseItems}
    </Card>
  );
};

export default Expenses;
