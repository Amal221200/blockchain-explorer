import { Separator } from '@/components/ui/separator'
import { blocksData } from '@/lib/data'
import { relativeTimeInSeconds, stringShortner } from '@/lib/utils'
import Link from 'next/link'
import React from 'react'

const BlockPage = () => {
  const blockData = blocksData[0]
  return (
    <>
      <h2 className='my-2 ml-4 text-xl font-semibold'>Transaction Details</h2>
      <Separator className='my-4 bg-zinc-300' />

      <main className='my-3 space-y-3 px-3'>
        <div className='mx-auto max-w-7xl overflow-x-auto rounded-md bg-white p-3'>
          <div className="grid grid-cols-3 gap-y-3 text-sm">
            <strong className="font-normal text-zinc-600">Block Height:</strong> <p className="col-span-2">{blockData.block}</p>
            <strong className="font-normal text-zinc-600">Status:</strong> <p className="col-span-2">{blockData.status}</p>
            <strong className="font-normal text-zinc-600">Time Stamp:</strong> <p className="col-span-2">{relativeTimeInSeconds(new Date(blockData.age))} {(new Date(blockData.age)).toUTCString()}</p>

            <strong className="font-normal text-zinc-600">Proposed On:</strong>
            <p className="col-span-2">Block proposed on <Link href={`#`} className="address-link">{blockData.slot}</Link>, epoch <Link href={`#`} className="address-link">{blockData.epoch}</Link></p>

            <strong className="font-normal text-zinc-600">Transactions:</strong>
            <p className="col-span-2">{blockData.transactions} transactions and {blockData.internalTransactions} contract internal transactions in this block.</p>

            <strong className="font-normal text-zinc-600">Withdrawals:</strong>
            <p className="col-span-2">{blockData.withdrawals} withdrawals in this block.</p>

            <Separator className='col-span-full my-2 bg-zinc-300' />

            <strong className="font-normal text-zinc-600">Fee Recipient:</strong>
            <p className="col-span-2">{blockData.feeRecipient}</p>
            <strong className="font-normal text-zinc-600">Block Reward:</strong>
            <p className="col-span-2">{blockData.reward}</p>
            <strong className="font-normal text-zinc-600">Total Difficulty:</strong>
            <p className="col-span-2">{blockData.totalDifficulty}</p>
            <strong className="font-normal text-zinc-600">Size:</strong>
            <p className="col-span-2">{blockData.size}</p>

            <Separator className='col-span-full bg-zinc-300' />

            <strong className="font-normal text-zinc-600">Gas Used:</strong>
            <p className="col-span-2">{blockData.gasUsed}</p>
            <strong className="font-normal text-zinc-600">Gas Limit:</strong>
            <p className="col-span-2">{blockData.gasLimit}</p>
            <strong className="font-normal text-zinc-600">Base Fee Per Gas:</strong>
            <p className="col-span-2">{blockData.baseFee} ETH</p>
            <strong className="font-normal text-zinc-600">Burnt Fees:</strong>
            <p className="col-span-2">🔥{blockData.burntFees} ETH</p>
          </div>
        </div>

        <div className='mx-auto max-w-7xl overflow-x-auto rounded-md bg-white p-3'>
          <div className="grid grid-cols-3 gap-y-3 text-sm">
            <strong className="font-normal text-zinc-600">Hash:</strong>
            <p className="col-span-2">{blockData.hash}</p>
            <strong className="font-normal text-zinc-600">Parent Hash:</strong>
            <p className="col-span-2">{blockData.parentHash}</p>
            <strong className="font-normal text-zinc-600">State Root:</strong>
            <p className="col-span-2">{blockData.stateRoot}</p>
            <strong className="font-normal text-zinc-600">Withdrawals Root:</strong>
            <p className="col-span-2">{blockData.withdrawalsRoot}</p>
            <strong className="font-normal text-zinc-600">Nonce:</strong>
            <p className="col-span-2">{blockData.nonce}</p>
          </div>
        </div>
      </main>
    </>
  )
}

export default BlockPage