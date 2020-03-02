import React from 'react'
import { render } from '@testing-library/react'
import SavingsGoalList from './savingsGoalList'

describe('Savings Goal List', () => {
  test('it renders savings goals including item, savedAmount', () => {
    const props = {
      savings: [{ id: 1, item: 'Couch', goal: 2000, savedAmount: 1000 }]
    }

    const { getByText } = render(<SavingsGoalList {...props} />)

    console.log(
      props.savings
        .map(saving => parseFloat(saving.goal).toLocaleString('en'))
        .toString()
    )

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
})
