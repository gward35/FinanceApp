import React from 'react';

const Balance = props => {
  const getBalance = () => {
    const balanceAmount = props.getTotals('income') - props.getTotals('savings') - props.getTotals('expense');

    return balanceAmount.toFixed(2).toLocaleString();
  }

  return (
    <div className="totalsContainer">
      <h2>Expenses:</h2>${parseFloat(props.getTotals('expense')).toLocaleString('en')}
      <h2>Income:</h2>${parseFloat(props.getTotals('income')).toLocaleString('en')}
      <h2>Savings:</h2>${parseFloat(props.getTotals('savings')).toLocaleString('en')}
      <h2>Balance:</h2>${parseFloat(getBalance()).toLocaleString('en')}
    </div>
  )
  
}

export default Balance;