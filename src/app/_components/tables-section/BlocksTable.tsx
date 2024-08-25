import {
    Table,
    TableBody,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { blocksData } from "@/lib/data"
import { relativeTimeInSeconds, stringShortner } from "@/lib/utils"
import { ArrowRight, BoxIcon } from "lucide-react"
import Link from "next/link"

const BlocksTable = () => {
    return (
        <Table className="mx-auto max-w-xl rounded-md bg-white lg:max-w-none">
            <TableHeader>
                <TableRow>
                    <TableHead colSpan={3}>Latest Blocks.</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {blocksData.map((transaction) => (
                    <TableRow key={transaction.blockNumber} className="">
                        <TableCell className="">
                            <div className="flex gap-x-1">
                                <BoxIcon size={35} />
                                <div>
                                    <Link className="address-link" href={`/blocks/${transaction.blockNumber}`}>{transaction.blockNumber}</Link>
                                    <p className="text-[0.75rem] font-light">{relativeTimeInSeconds(new Date(transaction.age))}</p>
                                </div>
                            </div>
                        </TableCell>
                        <TableCell>
                            <p>Fee Recipient <Link href={`/accounts/${transaction.feeRecipient}`} className="address-link">{stringShortner(transaction.feeRecipient, 10)}</Link></p>
                            <p>
                                <span className="font-medium">{transaction.transactions}</span> txns in 12 secs
                            </p>
                        </TableCell>
                        <TableCell>
                            <span className="rounded border-2 border-black px-1 py-0.5 text-[0.65rem]">
                                {transaction.reward.toFixed(4)} ETH
                            </span>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
            <TableFooter>
                <TableRow>
                    <TableCell colSpan={3}>
                        <Link href={'/blocks'} className="flex items-center justify-center gap-x-2">
                            View All Blocks <ArrowRight />
                        </Link>
                    </TableCell>
                </TableRow>
            </TableFooter>
        </Table>
    )
}

export default BlocksTable