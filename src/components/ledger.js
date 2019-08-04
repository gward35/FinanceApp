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
          <td data-label="Item: "><span className={money.type}>{money.type}</span>{money.item}</td>
          <td data-label="Date: ">{money.date.toLocaleString().split(",")[0]}</td>
          <td data-label="Cost: ">${parseFloat(money.cost).toLocaleString('en')}</td>
          <td data-label="Action: " ><button onClick={() => props.deleteItem(money.id)}>Delete</button></td>
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