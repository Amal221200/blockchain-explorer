import BlocksTable from "./BlocksTable"
import TransactionsTable from "./TransactionsTable"

const TablesSection = () => {
  return (
    <section className="p-3">
      <div className="mx-auto grid max-w-[85rem] grid-cols-1 gap-2 lg:grid-cols-2">
          <BlocksTable />
          <TransactionsTable />
      </div>
    </section>
  )
}

export default TablesSection