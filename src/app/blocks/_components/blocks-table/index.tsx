"use client"
import { blockColumns } from "./blockColumns"
import useDataTable from "@/hooks/useDataTable"
import DataTable from "@/components/DataTable"
import { blocksData } from "@/lib/data"

export default function BlocksTable() {
  const { table, columnFilters, columnVisibility, pagination, sorting } = useDataTable(blocksData, blockColumns, { pagination: { pageSize: 50, pageIndex: 0 } })

  return (
    <DataTable table={table} columns={blockColumns} filterColumn="block" label="blocks" pagination={pagination} />
  )
}
