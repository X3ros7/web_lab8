import React from "react";
import styles from "./Expenses.module.css";
import ExpenseItem from "../ExpenseItem";

export interface Expense {
  id: string;
  title: string;
  amount: number;
  date: Date;
}

const Expenses = () => {
  const expenses: Expense[] = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    {
      id: "e2",
      title: "New TV",
      amount: 799.49,
      date: new Date(2021, 2, 12),
    },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  return (
    <div className="">
      {expenses.map((expense) => (
        <div className="expense_item" key={expense.id}>
          <ExpenseItem expense={expense} />
        </div>
      ))}
    </div>
  );
};

export default Expenses;
