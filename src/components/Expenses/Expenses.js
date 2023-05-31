import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";

function Expenses(props) {
  const expenseItems = props.expenses.map((expense) => (
    <ExpenseItem
      date={expense.date}
      title={expense.title}
      amount={expense.amount}
    />
  ));
  return <Card className="expenses">{expenseItems}</Card>;
}

export default Expenses;
