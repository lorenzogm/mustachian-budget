export type mapping = {
  hasHeader: boolean
  hasAmmount: boolean
  date: number
  payee: number
  amount: number
  inflow: number
  outflow: number
}

type getTransactionsFromCSVMappingsType = {
  [key: string]: mapping
}

const getTransactionsFromCSVMappings: getTransactionsFromCSVMappingsType = {
  RAIFFEISEN: {
    hasHeader: true,
    hasAmmount: true,
    date: 1,
    payee: 2,
    amount: 3,
    inflow: 0,
    outflow: 0,
  },
  ARQUIA: {
    hasHeader: true,
    hasAmmount: false,
    date: 1,
    payee: 2,
    amount: 0,
    inflow: 3,
    outflow: 4,
  },
}

export default getTransactionsFromCSVMappings
