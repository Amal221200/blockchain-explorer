import { Separator } from '@/components/ui/separator'
import TransactionsTable from './_components/transactions-table'

const TransactionsPage = () => {
  return (
    <>
      <h2 className='ml-4 text-xl font-semibold'>Transactions</h2>
      <Separator className='my-4 bg-zinc-300' />
      <section className='my-4 px-3'>
        <div className='grid grid-cols-[repeat(auto-fit,280px)] justify-center gap-3'>
          <article className='rounded-md bg-white p-3'>
            <h6 className='text-[0.7rem] uppercase text-zinc-500'>Transactions (24h)</h6>
            <p className='text-xl font-medium'>1,088,203</p>
          </article>
          <article className='rounded-md bg-white p-3'>
            <h6 className='text-[0.7rem] uppercase text-zinc-500'>Pending Transactions (1h)</h6>
            <p className='text-xl font-medium'>103,110 (Average)</p>
          </article>
          <article className='rounded-md bg-white p-3'>
            <h6 className='text-[0.7rem] uppercase text-zinc-500'>Network Transaction Fee (1h)</h6>
            <p className='text-xl font-medium'>220.55 ETH</p>
          </article>
          <article className='rounded-md bg-white p-3'>
            <h6 className='text-[0.7rem] uppercase text-zinc-500'>Average Transaction Fee (1h)</h6>
            <p className='text-xl font-medium'>0.86 USD</p>
          </article>
        </div>
      </section>
      
      <main className='my-3 px-3'>
        <div className='mx-auto max-w-7xl rounded-md bg-white p-3'>
          <TransactionsTable />
        </div>
      </main>
    </>
  )
}

export default TransactionsPage