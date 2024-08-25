import MainInput from "./MainInput"

const ETHER_PRICE = "$2,767.31"
const PER_BTC = "@ 0.043165 BTC (+4.30%)"
const TRANSACTIONS_PRICE = "2,485.50 M"
const TPS = "(12.3 TPS)"
const MED_GAS_PRICE = "0.905 Gwei"
const MED_GAS_PRICE_DOLLARS = " ($0.05)"
const MARKET_PRICE = "$332,903,413,234.00"
const LAST_FINALIZED_BLOCK = "20598097"
const LAST_SAFE_BLOCK = "20598129"

const Main = () => {
  return (
    <main className="relative mb-[18rem] flex h-[30vh] items-center justify-stretch bg-zinc-900 bg-main md:mb-[8rem]">
      <div className="ml-7 max-w-7xl p-4 text-white">
        <h1 className="text-xl font-bold">Ethereum Blockchain Explorer</h1>
        <MainInput />
      </div>

      <div className="absolute -bottom-[115%] left-[50%] mx-4 w-[85vw] max-w-5xl -translate-x-[53%] rounded-md bg-white p-4 md:-bottom-[44%] md:-translate-x-[50%]">
        <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
          <article className="border-b p-2 md:border-r">
            <div>
              <h6 className="text-sm font-semibold">Ether Price</h6>
              <p className="text-[0.95rem]">{ETHER_PRICE} <span className="text-muted-foreground">{PER_BTC}</span></p>
            </div>
          </article>
          <article className="border-b p-2 md:border-l">
            <div className="flex justify-between">
              <div>
                <h6 className="text-sm font-semibold">Transactions</h6>
                <p className="text-[0.95rem]">{TRANSACTIONS_PRICE} <span className="text-muted-foreground">{TPS}</span></p>
              </div>
              <div>
                <h6 className="text-sm font-semibold">MED Gas Price</h6>
                <p className="text-[0.95rem]">{MED_GAS_PRICE} <span className="text-muted-foreground">{MED_GAS_PRICE_DOLLARS}</span></p>
              </div>
            </div>
          </article>
          <article className="border-b p-2 md:border-b-0 md:border-r md:border-t">
            <div>
              <h6 className="text-sm font-semibold">MARKET CAP</h6>
              <p className="text-[0.95rem]">{MARKET_PRICE}</p>
            </div>
          </article>
          <article className="p-2 md:border-l md:border-t">
            <div className="flex justify-between">
              <div>
                <h6 className="text-sm font-semibold">Last Finalized Block</h6>
                <p className="text-[0.95rem]">{LAST_FINALIZED_BLOCK}</p>
              </div>
              <div>
                <h6 className="text-sm font-semibold">Last Safe Block</h6>
                <p className="text-[0.95rem]">{LAST_SAFE_BLOCK}</p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </main>
  )
}

export default Main