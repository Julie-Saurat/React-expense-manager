import React, {useState} from "react";
import './ExpenseForm.css';

function ExpenseForm(props) {
  // multiple states option:
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

  function titleChangeHandler(event) {
    setEnteredTitle(event.target.value);
  }; 

  function amontChangeHandler(event) {
    setEnteredAmount(event.target.value);
  };

  function dateChangeHandler(event) {
    setEnteredDate(event.target.value);
  };

    // single state option:
    // const [userInput, setUserInput] = useState({
    //   enteredTitle: '',
    //   enteredAmount: '',
    //   enteredDate: ''
    // });

    // function titleChangeHandler(event) {
    //   setUserInput((prevState) => {
    //     return { ...prevState, enteredTitle: event.tagret.value };
    //   })
    // }; 

    // function amontChangeHandler(event) {
    //   setUserInput((prevState) => {
    //     return { ...prevState, enteredAmount: event.tagret.value };
    //   })
    // };

    // function dateChangeHandler(event) {
    //   setUserInput((prevState) => {
    //     return { ...prevState, enteredDate: event.tagret.value };
    //   })
    // };

    function submitHandler(event) {
      event.preventDefault();

      const expenseData = {
        title: enteredTitle,
        amount: +enteredAmount,
        date: new Date(enteredDate)
      };

      props.onSaveExpenseData(expenseData);
      setEnteredTitle('');
      setEnteredAmount('');
      setEnteredDate('');
    };

  return (
    <form onSubmit={submitHandler} >
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          {/* as there is no content to add here, input element should be here self closing tag */}
          <input type="text"
            value={enteredTitle}
            onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          {/* min & step are defautl html attributes that we can add to control how the input element can be used */}
          <input type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amontChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChangeHandler} />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>Cancel</button>
        <button type="submit">Add expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
