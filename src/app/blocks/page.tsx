import React from 'react'
import BlocksTable from './_components/blocks-table'
import { Separator } from '@/components/ui/separator'


const BlocksPage = () => {
  return (
    <>
      <h2 className='ml-4 text-xl font-semibold'>Blocks</h2>
      <Separator className='my-4 bg-zinc-300' />
      <section className='my-4 px-3'>
        <div className='grid grid-cols-[repeat(auto-fit,280px)] justify-center gap-3'>
          <article className='rounded-md bg-white p-3'>
            <h6 className='text-[0.7rem] uppercase text-zinc-500'>Network Utilization (24h)</h6>
            <p className='text-xl font-medium'>50.6%</p>
          </article>
          <article className='rounded-md bg-white p-3'>
            <h6 className='text-[0.7rem] uppercase text-zinc-500'>Last Safe Block</h6>
            <p className='text-xl font-medium'>20604790</p>
          </article>
          <article className='rounded-md bg-white p-3'>
            <h6 className='text-[0.7rem] uppercase text-zinc-500'>Produced By MEV Builders (24h)</h6>
            <p className='text-xl font-medium'>89.7%</p>
          </article>
          <article className='rounded-md bg-white p-3'>
            <h6 className='text-[0.7rem] uppercase text-zinc-500'>Burnt Fees🔥</h6>
            <p className='text-xl font-medium'>4,365,155.86 ETH</p>
          </article>
        </div>
      </section>
      <main className='my-3 px-3'>
        <div className='mx-auto max-w-7xl rounded-md bg-white p-3'>
          <BlocksTable />
        </div>
      </main>
    </>
  )
}

export default BlocksPage