import { Separator } from "@/components/ui/separator"
import { transactionsData } from "@/lib/data"
import { relativeTimeInSeconds, stringShortner } from "@/lib/utils"
import Link from "next/link"


const TransactionPage = () => {
  const tx = transactionsData[0]

  const actionStatement = `Transfer ${tx.amount} ETH by to `
  return (
    <>
      <h2 className='my-2 ml-4 text-xl font-semibold'>Transaction Details</h2>
      <Separator className='my-4 bg-zinc-300' />

      <main className='my-3 px-3'>
        <div className='mx-auto max-w-7xl overflow-x-auto rounded-md bg-white p-3'>
          <div className="grid grid-cols-3 gap-y-3 text-sm">
            <strong className="font-normal text-zinc-600">Transaction Hash:</strong> <p className="col-span-2">{tx.hash}</p>
            <strong className="font-normal text-zinc-600">Status:</strong> <p className="col-span-2">{tx.status}</p>
            <strong className="font-normal text-zinc-600">Block :</strong> <p className="col-span-2">{tx.block}</p>
            <strong className="font-normal text-zinc-600">Time Stamp:</strong> <p className="col-span-2">{relativeTimeInSeconds(new Date(tx.age))} {(new Date(tx.age)).toUTCString()}</p>
            <Separator className='col-span-full my-2 bg-zinc-300' />
            <strong className="font-normal text-zinc-600">Transaction Action:</strong> 
            <p className="col-span-2">Transfer {tx.amount} ETH by <Link href={`#`} className="address-link">{stringShortner(tx.from, 9)}</Link> to <Link href={`#`} className="address-link">{stringShortner(tx.to, 9)}</Link></p>
            <Separator className='col-span-full my-2 bg-zinc-300' />
            <strong className="font-normal text-zinc-600">From:</strong> <Link href={`#`} className="address-link col-span-2">{tx.from}</Link>
            <strong className="font-normal text-zinc-600">To:</strong> <Link href={`#`} className="address-link col-span-2">{tx.to}</Link>
            <Separator className='col-span-full my-2 bg-zinc-300' />
            <strong className="font-normal text-zinc-600">Value:</strong> <p className="col-span-2">{tx.amount} ETH</p>
            <strong className="font-normal text-zinc-600">Transaction Fee:</strong> <p className="col-span-2">{tx.transactionFee} ETH</p>
            <strong className="font-normal text-zinc-600">Gas Price:</strong> <p className="col-span-2">
              {tx.gasPrice} gwei <span className="text-sm">({tx.gasPrice * (10 ** -9)} ETH)</span>
            </p>
            {/* <Separator className='col-span-full bg-zinc-300' /> */}
          </div>
        </div>
      </main>
    </>
  )
}

export default TransactionPage