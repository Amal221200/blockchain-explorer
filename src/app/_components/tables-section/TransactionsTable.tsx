"use client"
import {
    Table,
    TableBody,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { transactionsData } from "@/lib/data"
import { relativeTimeInSeconds, stringShortner } from "@/lib/utils"
import { ArrowRight,  NotebookTextIcon } from "lucide-react"
import Link from "next/link"

const TransactionsTable = () => {
    
    return (
        <Table className="mx-auto max-w-xl overflow-scroll rounded-md bg-white lg:max-w-none">
            <TableHeader>
                <TableRow>
                    <TableHead colSpan={3}>Latest transactions.</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {transactionsData.map((transaction) => (
                    <TableRow key={transaction.hash} className="">
                        <TableCell className="">
                            <div className="flex gap-x-1">
                                <NotebookTextIcon size={35} />
                                <div>
                                    <Link className="address-link" href={`/transactions/${transaction.hash}`}>{stringShortner(transaction.hash, 14)}</Link>
                                    <p className="text-[0.75rem] font-light">{relativeTimeInSeconds(new Date(transaction.age))}</p>
                                </div>
                            </div>
                        </TableCell>
                        <TableCell>
                            <p>From: <Link href={`#`} className="address-link">{stringShortner(transaction.from, 10)}</Link></p>
                            <p>To: <Link href={`#`} className="address-link">{stringShortner(transaction.to, 10)}</Link></p>
                        </TableCell>
                        <TableCell>
                            <span className="rounded border-2 border-black px-1 py-0.5 text-[0.65rem]">
                            {transaction.amount}&nbsp;ETH
                            </span>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
            <TableFooter>
                <TableRow>
                    <TableCell colSpan={3}>
                        <Link href={'/transactions'} className="flex items-center justify-center gap-x-2">
                            View All Transactions <ArrowRight />
                        </Link>
                    </TableCell>
                </TableRow>
            </TableFooter>
        </Table>
    )
}

export default TransactionsTable