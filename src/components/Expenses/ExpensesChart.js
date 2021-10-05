import React from 'react';
import Chart from '../Chart/Chart';

function ExpensesChart(props) {

  const chartDataPoints = [
    {label: 'Jan', value: 0},
    {label: 'Feb', value: 0},
    {label: 'Mar', value: 0},
    {label: 'Apr', value: 0},
    {label: 'May', value: 0},
    {label: 'Jun', value: 0},
    {label: 'Jul', value: 0},
    {label: 'Aug', value: 0},
    {label: 'Sept', value: 0},
    {label: 'Oct', value: 0},
    {label: 'Nov', value: 0},
    {label: 'Dec', value: 0}
  ];

  for (const expense of props.expenses) {
    const expenseMonth = expense.date.getMonth(); // getMonth() return the month of a date by a number => january = 0 / Feb=1 ...
    chartDataPoints[expenseMonth].value += expense.amount;
  };
  // SAME AS:
  // props.expenses.forEach( expense => {
  //   const expenseMonth = expense.date.getMonth(); // getMonth() return the month of a date by a number => january = 0 / Feb=1 ...
  //   chartDataPoints[expenseMonth].value += expense.amount;
  // });

  return <Chart dataPoints={chartDataPoints}/>
};

export default ExpensesChart;