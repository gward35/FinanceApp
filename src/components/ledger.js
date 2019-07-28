import React from 'react';

const Ledger = props => (
  <table>
    <thead>
      <tr>
        <th>Item</th>
        <th>Date</th>
        <th>Cost</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {props.items.length > 0 ? (
        props.items.map(money => (
        <tr key={money.id}>
          <td><span className={money.type}>{money.type}</span>{money.item}</td>
          <td>{money.date.toLocaleString().split(",")[0]}</td>
          <td>${parseFloat(money.cost).toLocaleString('en')}</td>
          <td><button onClick={() => props.deleteItem(money.id)}>Delete</button></td>
        </tr>
      ))
    ) : (
      <tr>
        <td colSpan={3}>No Income or Expense</td>
      </tr>
    )}
    </tbody>
  </table>
)

export default Ledger;