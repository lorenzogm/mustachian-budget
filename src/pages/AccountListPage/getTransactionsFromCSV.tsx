import { mapping } from './getTransactionsFromCSVMappings'

type getTransactionsFromCSVProps = {
  mapping: mapping
  data: Array<string>
}

type getTransactionsFromCSVReturn = {
  date: string
  payee: string
  inflow: number
  outflow: number
}

const getTransactionsFromCSV = ({
  mapping,
  data,
}: getTransactionsFromCSVProps): Array<getTransactionsFromCSVReturn> => {
  return data.reduce((acc: Array<getTransactionsFromCSVReturn>, row, index) => {
    // skip the header if exists
    if (mapping.hasHeader && index === 0) {
      return acc
    }

    const date = row[mapping.date]
    const payee = row[mapping.payee]

    if (!date || !payee) {
      return acc
    }

    if (mapping.hasAmmount) {
      const inflow = Number(row[mapping.amount]) > 0 ? Number(row[mapping.amount]) : 0
      const outflow = Number(row[mapping.amount]) < 0 ? Math.abs(Number(row[mapping.amount])) : 0
      return [...acc, { date, payee, inflow, outflow }]
    }

    const inflow = Number(row[mapping.inflow])
    const outflow = Math.abs(Number(row[mapping.outflow]))
    return [...acc, { date, payee, inflow, outflow }]
  }, [])
}

export default getTransactionsFromCSV
