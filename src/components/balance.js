import React from 'react';

const Balance = props => {
  const getBalance = () => {
    const balanceAmount = props.getTotals('income') - props.getTotals('savings') - props.getTotals('expense');

    return balanceAmount.toFixed(2).toLocaleString();
  }

  return (
    <div className="totalsContainer">
      <h2>Expenses:</h2>${props.getTotals('expense')}
      <h2>Income:</h2>${props.getTotals('income')}
      <h2>Savings:</h2>${props.getTotals('savings')}
      <h2>Balance:</h2>${getBalance()}
    </div>
  )
  
}

export default Balance;