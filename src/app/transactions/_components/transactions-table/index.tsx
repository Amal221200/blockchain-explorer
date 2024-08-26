"use client"
import { transactionColumns } from "./transactionColumns"
import useDataTable from "@/hooks/useDataTable"
import DataTable from "@/components/DataTable"
import { transactionsData } from "@/lib/data"


export default function TransactionsTable() {
  const { table, columnFilters, columnVisibility, pagination, sorting } = useDataTable(transactionsData, transactionColumns, { pagination: { pageSize: 50, pageIndex: 0 } })

  return (
    <DataTable table={table} columns={transactionColumns} filterColumn="hash" label="transaction hash" pagination={pagination} />
  )
}
