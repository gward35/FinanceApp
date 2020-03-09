import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import SavingsGoalList from './savingsGoalList'

describe('Savings Goal List', () => {
  test('it renders savings goals including item, savingsGoal, savedAmount', () => {
    const props = {
      savings: [
        {
          id: 'Sun Mar 08 2020 21:33:53 GMT-0400 (Eastern Daylight Time)',
          item: 'Couch',
          goal: 2000,
          savedAmount: 1000
        }
      ]
    }

    const { getByText } = render(<SavingsGoalList {...props} />)

    const savingsItemNode = getByText(
      props.savings.map(saving => saving.item).toString()
    )
    const savingsGoalNode = getByText(
      props.savings
        .map(saving => `${'$' + parseFloat(saving.goal).toLocaleString('en')}`)
        .toString()
    )
    const savingsSavedAmountNode = getByText(
      props.savings
        .map(
          saving =>
            `${'$' + parseFloat(saving.savedAmount).toLocaleString('en')}`
        )
        .toString()
    )

    expect(savingsItemNode).toBeDefined()
    expect(savingsGoalNode).toBeDefined()
    expect(savingsSavedAmountNode).toBeDefined()
  })

  test('it calls editSavingsGoal function when edit button is clicked', done => {
    const props = {
      savings: [{ id: 1, item: 'Couch', goal: 2000, savedAmount: 1000 }],
      editSavingsGoal: () => editSavingsGoal()
    }

    function editSavingsGoal() {
      done()
    }

    const { getByText } = render(
      <SavingsGoalList {...props} onClick={() => props.editSavingsGoal()} />
    )

    fireEvent.click(getByText('Edit'))
  })

  test('it calls deleteSavingsGoal function when edit button is clicked', done => {
    const props = {
      savings: [{ id: 1, item: 'Couch', goal: 2000, savedAmount: 1000 }],
      deleteSavingsGoal: () => deleteSavingsGoal()
    }

    function deleteSavingsGoal() {
      done()
    }

    const { getByText } = render(
      <SavingsGoalList {...props} onClick={() => props.deleteSavingsGoal()} />
    )

    fireEvent.click(getByText('Delete'))
  })
})
