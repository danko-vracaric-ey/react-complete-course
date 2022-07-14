import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [shouldShow, setShouldShow] = useState(true);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    console.log(expenseData);
    props.onAddExpense(expenseData);
  };

  const onAddNewExpense = (val) => {
    setShouldShow(val);
  };

  return (
    <div className="new-expense">
      {shouldShow ? (
        <button
          onClick={() => {
            onAddNewExpense(false);
          }}
        >
          Add new Expense
        </button>
      ) : (
        <ExpenseForm
          onAddNewExpense={onAddNewExpense}
          onSaveExpenseData={saveExpenseDataHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
