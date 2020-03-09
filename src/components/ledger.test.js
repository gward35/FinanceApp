import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import Ledger from './ledger'

describe('Ledger', () => {
  test('it renders expenses and income', () => {
    const props = {
      items: [
        {
          id: 'Sun Mar 08 2020 21:30:20 GMT-0400',
          item: 'Couch',
          type: 'expense',
          date: 'Sun Mar 08 2020 21:30:20 GMT-0400',
          cost: '600'
        }
      ]
    }

    const { getByText } = render(<Ledger {...props} />)

    const ledgerItemNode = getByText(
      props.items.map(money => money.item).toString()
    )

    const ledgerTypeNode = getByText(
      props.items.map(money => money.type).toString()
    )

    const ledgerDateNode = getByText(
      props.items
        .map(money => money.date)
        .toLocaleString()
        .split(',')[0]
    )

    const ledgerCostNode = getByText(
      props.items
        .map(money => `${'$' + parseFloat(money.cost).toLocaleString('en')}`)
        .toString()
    )

    expect(ledgerItemNode).toBeDefined()
    expect(ledgerTypeNode).toBeDefined()
    expect(ledgerDateNode).toBeDefined()
    expect(ledgerCostNode).toBeDefined()
  })

  test('it calls deleteItem function when delete button is clicked', done => {
    const props = {
      items: [
        {
          id: 'Sun Mar 08 2020 21:30:20 GMT-0400',
          item: 'Couch',
          type: 'expense',
          date: 'Sun Mar 08 2020 21:30:20 GMT-0400',
          cost: '600'
        }
      ],
      deleteItem: () => deleteItem()
    }

    function deleteItem() {
      done()
    }

    const { getByText } = render(
      <Ledger {...props} onClick={() => deleteItem()} />
    )

    fireEvent.click(getByText('Delete'))
  })
})
