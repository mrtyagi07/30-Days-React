import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = () => {
  // const [enteredTitle, setEnteredTitle] = useState('');
  // const [amount, setAmount] = useState('');
  // const [date, setDate] = useState(' ');

  const [userInput, setUserInput] = useState({
    enteredTitle: '',
    enteredAmount: '',
    enteredDate: '',
  });

  const titleChangeHandler = event => {
    // setEnteredTitle(event.target.value);

    setUserInput({ ...userInput, enteredTitle: event.target.value });
  };

  const amountChangeHandler = event => {
    //setAmount(event.target.value);
    setUserInput({ ...userInput, enteredAmount: event.target.value });
  };

  const dateChangeHandler = event => {
    //setDate(event.target.value)
    setUserInput({ ...userInput, enteredDate: event.target.value });
  };

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            onChange={amountChangeHandler}
            min="0.01"
            step="0.01"
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense_actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
