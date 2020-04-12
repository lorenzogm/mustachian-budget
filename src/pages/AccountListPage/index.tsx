import React from 'react'
import CSVReader from 'react-csv-reader'

import { useFirebaseContext } from 'context/FirebaseContext'
import getTransactionsFromCSV from './getTransactionsFromCSV'
import getTransactionsFromCSVMappings from './getTransactionsFromCSVMappings'

const AccountListPage = () => {
  const ACCOUNTS = ['RAIFFEISEN', 'ARQUIA']
  const { db } = useFirebaseContext()

  React.useEffect(() => {
    db.collection('users')
      .add({
        first: 'Ada',
        last: 'Lovelace',
        born: 1815,
      })
      .then(function (docRef) {
        console.log('Document written with ID: ', docRef.id)
      })
      .catch(function (error) {
        console.error('Error adding document: ', error)
      })
  }, [db])

  return (
    <div>
      {ACCOUNTS.map((account) => {
        return (
          <div key={account}>
            {account}
            <CSVReader
              onFileLoaded={async (data) => {
                const transactions = getTransactionsFromCSV({
                  mapping: getTransactionsFromCSVMappings[account],
                  data,
                })

                const batch = db.batch()

                console.log(transactions)

                transactions.forEach((transaction) => {
                  const docRef = db.collection('accounts').doc()
                  console.log(docRef)
                  batch.set(docRef, transaction)
                })
                console.log('pre')

                batch
                  .commit()
                  .then((response) => {
                    console.log('success', response)
                  })
                  .catch((error) => console.log('asdf', error))
                console.log('post')
              }}
            />
          </div>
        )
      })}
    </div>
  )
}

export default AccountListPage
