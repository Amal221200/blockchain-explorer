import { CircleCheck, CircleX, Hourglass } from 'lucide-react'
import React from 'react'

const TransactionStatus = ({ status }: { status: string }) => {

    if (status === 'success') {
        return (
            <span className='inline-flex items-center gap-x-1 rounded border bg-emerald-50 px-1 py-0.5 text-[0.7rem] font-medium text-emerald-600'>
                <CircleCheck size={10} /> Success
            </span>
        )
    } else if (status === 'uninitialized') {
        return (
            <span className='inline-flex items-center gap-x-1 rounded border bg-zinc-100 px-1 py-0.5 text-[0.7rem] font-medium'>
                <Hourglass size={10} /> Uninitialized
            </span>
        )
    } else {
        return (
            <span className='inline-flex items-center gap-x-1 rounded border bg-red-50 px-1 py-0.5 text-[0.7rem] font-medium text-red-600'>
              <CircleX size={10} />  Failed
            </span>
        )
    }
}

export default TransactionStatus