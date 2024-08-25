"use client"
import { transactionColumns } from "./TransactionColumns"
import useDataTable from "@/hooks/useDataTable"
import DataTable from "@/components/DataTable"
import { transactionsData } from "@/lib/data"


export default function TransactionsTable() {
  const { table, columnFilters, columnVisibility, pagination, sorting } = useDataTable(transactionsData, transactionColumns)

  return (
    <DataTable table={table} columns={transactionColumns} filterColumn="hash" label="transaction hash" pagination={pagination} />
  )
}
