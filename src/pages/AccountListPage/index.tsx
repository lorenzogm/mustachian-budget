import React from 'react'
import CSVReader from 'react-csv-reader'

import getTransactionsFromCSV from './getTransactionsFromCSV'
import getTransactionsFromCSVMappings from './getTransactionsFromCSVMappings'
import createTransactions from './createTransactions'

const AccountListPage = () => {
  const ACCOUNTS = ['RAIFFEISEN', 'ARQUIA']

  return (
    <div>
      {ACCOUNTS.map((account) => {
        return (
          <div key={account}>
            {account}
            <CSVReader
              onFileLoaded={(data) => {
                const transactions = getTransactionsFromCSV({
                  mapping: getTransactionsFromCSVMappings[account],
                  data,
                })

                createTransactions({ accountId: account, transactions })
              }}
            />
          </div>
        )
      })}
    </div>
  )
}

export default AccountListPage
