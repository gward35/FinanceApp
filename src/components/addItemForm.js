import React, {useState} from 'react';
import DatePicker from 'react-datepicker';

import "react-datepicker/dist/react-datepicker.css";

const AddItemForm = props => {

  const initialFormState = {id: null, item: '', date: new Date(), cost: '', type: ''}

  const [money, setItem] = useState(initialFormState)

  const handleInputChange = event => {
    const {name, value} = event.target

    setItem({...money, [name]: value })
  }

  const handleChange = date => {
    setItem( {...money, date: date} )
  }

  return (
    <form className="add-item" onSubmit={event => {
      event.preventDefault()
      if(!money.item || !money.date || !money.cost || !money.type) return

      props.addItem(money)
      setItem(initialFormState)
    }}>
      <div className="input">
        <label>Item</label>
        <input type="text" name="item" value={money.item} onChange={handleInputChange} />
      </div>
      <div className="input">
        <label>Date</label>
        <DatePicker selected={money.date} onChange={handleChange} />
      </div>
      <div className="input">
        <label>Cost</label>
        <input type="number" name="cost" value={money.cost} onChange={handleInputChange} />
      </div> 
      <div className="input">
        <label>Type</label>
        <select onChange={handleInputChange} name="type" value={money.type}>
          <option value="">Please choose an option</option>
          <option value="expense">Expense</option>
          <option value="income">Income</option>
          <option value="savings">Savings</option>
        </select>
      </div>
      <button className="add">Add Item</button>
    </form>
  )
}

export default AddItemForm;