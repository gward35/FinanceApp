import React from 'react';

const SavingsGoalList = props => (
  <table>
    <thead>
      <tr>
        <th>Item</th>
        <th>Goal</th>
        <th>Saved Amount</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {props.savings.length > 0 ? (
        props.savings.map(saving => (
        <React.Fragment key={saving.id}>
        <tr>
          <td>{saving.item}</td>
          <td>${parseFloat(saving.goal).toLocaleString('en')}</td>
          <td>${parseFloat(saving.savedAmount).toLocaleString('en')}</td>
          <td>
            <button onClick={() => props.editSavingsGoal(saving)}>Edit</button>
            <button onClick={() => props.deleteSavingsGoal(saving.id)}>Delete</button>
          </td>
        </tr>
        <tr>
          <td colSpan={4}><progress max={saving.goal} value={saving.savedAmount}/></td>
        </tr>
        </React.Fragment>
      ))
    ) : (
      <tr>
        <td colSpan={3}>No Savings Goals</td>
      </tr>
    )}
    </tbody>
  </table>
)

export default SavingsGoalList;