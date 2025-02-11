import { ethers } from 'ethers'
import { Provider } from '@ethersproject/abstract-provider'
import { Signer } from '@ethersproject/abstract-signer'
import { marketFactoryAbi } from './abi'
import { createCreateCaller } from '../../ethereum/market-factory/create'
import { createGetEnabledMarketsCaller } from './getEnabledMarkets'
import { TransactionResponse } from '@ethersproject/abstract-provider'
import { always } from 'ramda'

export type MarketFactoryContract = {
	readonly create: (
		marketBehaviorAddress: string
	) => Promise<TransactionResponse>
	readonly getEnabledMarkets: () => Promise<readonly string[]>
	readonly contract: () => ethers.Contract
}

export const createMarketFactoryContract =
	(provider: Provider | Signer) =>
	(address: string): MarketFactoryContract => {
		const contract = new ethers.Contract(
			address,
			[...marketFactoryAbi],
			provider
		)
		return {
			create: createCreateCaller(contract),
			getEnabledMarkets: createGetEnabledMarketsCaller(contract),
			contract: always(contract),
		}
	}
