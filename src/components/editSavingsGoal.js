import React, {useState, useEffect} from 'react'; 

const EditSavingsGoal = props => {
  const [saving, setSavings] = useState(props.currentSavings)

  useEffect(() => {
    setSavings(props.currentSavings)
  }, [props])

  const handleInputChange = event => {
    const { name, value } = event.target

    setSavings({...saving, [name]: value})
  }

  return (
    <form className="edit-savings" onSubmit={event => {
      event.preventDefault()

      props.updateSavingsGoal(saving.id, saving)
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
      <button>Update Savings Goal</button>
      <button onClick={() => props.setEdit(false)}>Cancel</button>
    </form>
  )
}

export default EditSavingsGoal;