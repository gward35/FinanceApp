import React, {useState, useEffect} from 'react';
import './App.scss';
import AddItemForm from './components/addItemForm.js';
import Ledger from './components/ledger.js';
import Balance from './components/balance.js';
import BalancePieChart from './components/balanceChart.js';
import AddSavingsGoal from './components/addSavingsGoal.js';
import SavingsGoalList from './components/savingsGoalList.js';
import EditSavingsGoal from './components/editSavingsGoal.js';

const App = () => {

  const initialFormState = { id: null, item: '', goal: '', savedAmount: ''}

  const [items, setItem] = useState(() => {
    let itemsString = window.localStorage.getItem('items');
    
    if (itemsString) {
      try {
        return JSON.parse(itemsString);
      } catch (e) {
        console.error(e);
        return [];
      }
    } else {
      return [];
    }
  })

  const [savings, setSavings] = useState(() => {
    let savingsString = window.localStorage.getItem('savings');

    if(savingsString) {
      try {
        return JSON.parse(savingsString);
      } catch (e) {
        console.error(e);
        return [];
      }
    } else {
      return [];
    }
  })

  const [editing, setEdit] = useState(false)

  const [currentSavings, setCurrentSavings] = useState(initialFormState)

  useEffect(() => {
    window.localStorage.setItem('items', JSON.stringify(items))
  }, [items])

  useEffect(() => {
    window.localStorage.setItem('savings', JSON.stringify(savings))
  }, [savings])

  const addItem = money => {
    money.id = new Date();
    setItem([...items, money])
  }

  const addSavingsGoal = saving => {
    saving.id = new Date();
    setSavings([...savings, saving])
  }

  const deleteItem = id => {
    setItem(items.filter(money => money.id !== id))
  }

  const deleteSavingsGoal = id => {
    setSavings(savings.filter(saving => saving.id !== id))
  }

  const getTotals = type => {
    const sum = items.reduce((total, item) => {
      if(item.type === type)  {
        return total + parseFloat(item.cost)
      } else {
        return total
      }
   
    }, 0)

    return sum.toFixed(2)
  }

  const editSavingsGoal = saving => {
    setEdit(true)

    setCurrentSavings({ id: saving.id, item: saving.item, goal: saving.goal, savedAmount: saving.savedAmount, savingGoalId: saving.savingGoalId })
  }

  const updateSavingsGoal = (id, updatedSavings) => {
    setEdit(false)

    setSavings(savings.map(saving => (saving.id === id? updatedSavings : saving)))
  }

  return (
    <div className="App">
      <h1>Finance App</h1>
      <AddItemForm addItem={addItem} />
      <Ledger items={items} deleteItem={deleteItem} />
      <div className="balanceContainer">
        <Balance items={items} getTotals={getTotals} />
        <BalancePieChart items={items} getTotals={getTotals} />
      </div>
      {editing ? (
        <EditSavingsGoal editing={editing} setEdit={setEdit} currentSavings={currentSavings} updateSavingsGoal={updateSavingsGoal} />
      ) : (
        <AddSavingsGoal addSavingsGoal={addSavingsGoal} />
      )}
      <SavingsGoalList savings={savings} editSavingsGoal={editSavingsGoal} deleteSavingsGoal={deleteSavingsGoal} />
    </div>
  );
}

export default App;
