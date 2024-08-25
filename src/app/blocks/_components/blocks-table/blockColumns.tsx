import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ColumnDef } from "@tanstack/react-table"
import { MoreHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Block } from "@/lib/types"
import Link from "next/link"
import { relativeTimeInSeconds, stringShortner } from "@/lib/utils"
import { toast } from "sonner"

export const blockColumns: ColumnDef<Block>[] = [
  {
    accessorKey: "block",
    header: "Block",
    cell: ({ row }) => (
      <Link href={`/blocks/${row.getValue('block')}`} className="address-link font-medium">
        {row.getValue('block')}
      </Link>
    )
  },
  {
    accessorKey: "slot",
    header: "Slot",
    cell: ({ row }) => (
      <p>
        {row.getValue('slot')}
      </p>
    )
  },
  {
    accessorKey: "age",
    header: "Age",
    cell: ({ row }) => (
      <p>
        {relativeTimeInSeconds(new Date(row.getValue('age')))}
      </p>
    )
  },
  {
    accessorKey: "transactions",
    header: "Txn",
    cell: ({ row }) => (
      <Link href={`/blocks/${row.getValue('block')}`} className="text-blue-600">
        {row.getValue('transactions')}
      </Link>
    )
  },
  {
    accessorKey: "feeRecipient",
    header: "Fee Recipient",
    cell: ({ row }) => (
      <Link href={`#`}>
        {stringShortner(row.getValue('feeRecipient'), 10)}
      </Link>
    )
  },
  {
    accessorKey: "gasUsed",
    header: "Gas Used",
    cell: ({ row }) => (
      <p>
        {row.getValue('gasUsed')}
      </p>
    )
  },
  {
    accessorKey: "gasLimit",
    header: "Gas Limit",
    cell: ({ row }) => (
      <Link href={`/blocks/${row.getValue('block')}`}>
        {row.getValue('gasLimit')}
      </Link>
    )
  },
  {
    accessorKey: "baseFee",
    header: "Base Fee",
    cell: ({ row }) => (
      <Link href={`/blocks/${row.getValue('block')}`}>
        {row.getValue('baseFee')}
      </Link>
    )
  },
  {
    accessorKey: "reward",
    header: "Reward",
    cell: ({ row }) => (
      <p>
        {row.getValue('reward')}
      </p>
    )
  },
  {
    accessorKey: "burntFees",
    header: "Burnt Fees",
    cell: ({ row }) => (
      <p>
        {row.getValue('burntFees')}
      </p>
    )
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const block = row.original

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
              onClick={async() => {
                await navigator.clipboard.writeText(block.block.toString())
                toast.success("Copied")
              }}
            >
              Copy Block Number
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              onClick={async() => {
                await navigator.clipboard.writeText(block.slot.toString())
                toast.success("Copied")
              }}
            >
              Copy Slot Number
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={async() => {
                await navigator.clipboard.writeText(block.feeRecipient)
                toast.success("Copied")
              }}
            >
              Copy Recipient&apos;s Hash
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]