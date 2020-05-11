export interface Event {
	readonly address: string
	readonly blockHash: string
	readonly blockNumber: number
	readonly event: string
	readonly logIndex: number
	readonly raw: {
		readonly data: string
		readonly topics: string
	}
	readonly returnValues: {
		readonly [key: string]: string | number
	}
	readonly signature: string
	readonly transactionHash: string
	readonly transactionIndex: number
}
export interface ReceiptEvent {
	readonly [key: string]: Event
}
export interface TxReceipt {
	readonly blockHash: string
	readonly blockNumber: number
	readonly contractAddress: string | null
	readonly cumulativeGasUsed: number
	readonly events: ReceiptEvent
	readonly from: string
	readonly gasUsed: number
	readonly logsBloom: string
	readonly status: boolean
	readonly to: string
	readonly transactionHash: string
	readonly transactionIndex: number
}
export interface SendTx extends Thenable<TxReceipt> {
	readonly on: <T extends 'transactionHash' | 'confirmation' | 'error'>(
		type: T,
		callback: T extends 'transactionHash'
			? (hash: string) => void
			: T extends 'confirmation'
			? (confirmationNumber: number, receipt: TxReceipt) => void
			: (err: Readonly<Error>) => void
	) => SendTx
}
