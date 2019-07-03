import React, {useState} from 'react';

const AddSavingsGoal = props => {
  const initialFormState = {id: null, item: '', goal: '', savedAmount: ''}
  const [saving, setSavings] = useState(initialFormState)

  const handleInputChange = event => {
    const {name, value} = event.target

    setSavings({...saving, [name]: value})
  }

  return (
    <form className="add-savings" onSubmit={event => {
      event.preventDefault()
      if(!saving.item || !saving.goal || !saving.savedAmount) return

      props.addSavingsGoal(saving)
      setSavings(initialFormState)
    }}>
      <div className="input">
        <label>Item</label>
        <input type="text" name="item" value={saving.item} onChange={handleInputChange} />
      </div>
      <div className="input">
        <label>Amount</label>
        <input type="number" name="goal" value={saving.goal} onChange={handleInputChange} />
      </div>
      <div className="input">
        <label>Saved Amount</label>
        <input type="number" name="savedAmount" value={saving.savedAmount} onChange={handleInputChange} />
      </div>
      <button className="add">Add Savings Goal</button>
    </form>
  )
}

export default AddSavingsGoal;