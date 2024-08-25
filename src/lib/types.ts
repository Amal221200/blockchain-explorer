export interface Transaction {
    hash: string;
    status:string;
    from: string;
    to: string;
    amount: number;
    age: string;
    method: string;
    block: number;
    transactionFee: number;
    gasPrice: number;
}

export interface Block {
    block: number;
    status: string;
    epoch: number;
    slot: number;
    age: string;
    transactions: number;
    internalTransactions: number;
    withdrawals: number;
    feeRecipient: string;
    gasUsed: number;
    gasLimit: number;
    baseFee: number;
    reward: number;
    burntFees: number;
    totalDifficulty: number;
    size: number;
    hash: string;
    parentHash: string;
    stateRoot: string;
    withdrawalsRoot: string;
    nonce: string;
}