import { Checkbox } from "@/components/ui/checkbox"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown, MoreHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Transaction } from "@/lib/types"
import Link from "next/link"
import { relativeTimeInSeconds, stringShortner } from "@/lib/utils"
import { toast } from "sonner"

export const transactionColumns: ColumnDef<Transaction>[] = [
  {
    accessorKey: "hash",
    header: "Transaction Hash",
    cell: ({ row }) => (
      <Link href={`/transactions/${row.getValue('hash')}`} className="address-link">
        {stringShortner(row.getValue('hash'), 12)}
      </Link>
    )
  },
  {
    accessorKey: "method",
    header: "Method",
    cell: ({ row }) => (
      <p>
        {row.getValue('method')}
      </p>
    )
  },
  {
    accessorKey: "block",
    header: "Block",
    cell: ({ row }) => (
      <Link href={`/blocks/${row.getValue('block')}`} className="font-medium text-blue-600">
        {row.getValue('block')}
      </Link>
    )
  },
  {
    accessorKey: "age",
    header: "Age",
    cell: ({ row }) => (
      <p className="font-medium">
        {relativeTimeInSeconds(new Date(row.getValue('age')))}
      </p>
    )
  },
  {
    accessorKey: "from",
    header: "From",
    cell: ({ row }) => (
      <Link href={`#`} className="address-link">
        {stringShortner(row.getValue('from'), 12)}
      </Link>
    )
  },
  {
    accessorKey: "to",
    header: "To",
    cell: ({ row }) => (
      <Link href={`#`} className="address-link">
        {stringShortner(row.getValue('to'), 12)}
      </Link>
    )
  },
  {
    accessorKey: "amount",
    header: "Amount",
    cell: ({ row }) => (
      <p>
        {row.getValue('amount')} ETH
      </p>
    )
  },
  {
    accessorKey: "transactionFee",
    header: "TXN Fee",
    cell: ({ row }) => (
      <p>
        {row.getValue('transactionFee')}
      </p>
    )
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const transaction = row.original
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={async () => {
                await navigator.clipboard.writeText(transaction.hash)
                toast.success("Copied")
              }}
            >
              Copy transaction hash
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              onClick={async () => {
                await navigator.clipboard.writeText(transaction.block.toString())
                toast.success("Copied")
              }}
            >
              Copy transaction block number
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              onClick={async () => {
                await navigator.clipboard.writeText(transaction.from)
                toast.success("Copied")
              }}
            >
              Copy sender&apos;s hash
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={async () => {
                await navigator.clipboard.writeText(transaction.to)
                toast.success("Copied")
              }}
            >
              Copy reciever&apos;s hash
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]