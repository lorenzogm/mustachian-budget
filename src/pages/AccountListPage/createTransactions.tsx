import * as firebase from 'firebase/app'

import { Transaction } from './getTransactionsFromCSV'

type ImportTransactionsFromCSV = {
  accountId: string
  transactions: Array<Transaction>
}

const createTransactions = ({ accountId, transactions }: ImportTransactionsFromCSV) => {
  const user = firebase.auth().currentUser
  if (!user) {
    throw new Error('Undefined user')
  }

  const item = `${user.uid}/${accountId}/transactions`
  console.log(localStorage.getItem(item) || '[]')
  const currentTransactions = JSON.parse(localStorage.getItem(item) || '[]')

  localStorage.setItem(item, JSON.stringify([...currentTransactions, ...transactions]))
  // const batch = db.batch()

  // transactions.forEach((transaction) => {
  //   const docRef = db.collection('accounts').doc()
  //   console.log(docRef)
  //   batch.set(docRef, transaction)
  // })

  // batch
  //   .commit()
  //   .then((response) => {
  //     console.log('success', response)
  //   })
  //   .catch((error) => console.log('asdf', error))
}

export default createTransactions
