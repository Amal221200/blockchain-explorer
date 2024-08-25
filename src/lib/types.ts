export interface Transaction {
    hash: string;
    from: string;
    to: string;
    amount: number;
    age: string;
    method: string;
    blockNumber: number;
    transactionFee: number;
}

export interface Block {
    blockNumber: number;
    slot: number;
    age: string;
    transactions: number;
    feeRecipient: string;
    gasUsed: number;
    gasLimit: number;
    baseFee: number;
    reward: number;
    burntFees: number;
}