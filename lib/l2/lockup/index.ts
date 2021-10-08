import { ethers } from 'ethers'
import { Provider } from '@ethersproject/abstract-provider'
import { Signer } from '@ethersproject/abstract-signer'
import { lockupAbi } from './abi'
import { createTotalLockedCaller } from './totalLocked'
import { createTotalLockedForPropertyCaller } from './totalLockedForProperty'
import { createWithdrawByPositionCaller } from '../../ethereum/lockup/withdrawByPosition'
import { createcalculateWithdrawableInterestAmountByPositionCaller } from '../../ethereum/lockup/calculateWithdrawableInterestAmountByPosition'
import { createCalculateCumulativeHoldersRewardAmountCaller } from '../../ethereum/lockup/calculateCumulativeHoldersRewardAmount'
import { createCalculateCumulativeRewardPricesCaller } from '../../ethereum/lockup/calculateCumulativeRewardPrices'
import { createCalculateRewardAmountCaller } from '../../ethereum/lockup/calculateRewardAmount'
import { createCapCaller } from '../../ethereum/lockup/cap'
import { createDepositToPropertyCaller } from '../../ethereum/lockup/depositToProperty'
import { createDepositToPositionCaller } from '../../ethereum/lockup/depositToPosition'
import {
	createGetLockedupPropertiesCaller,
	LockedupProperty,
} from './getLockedupProperties'

export type LockupContract = {
	readonly withdrawByPosition: (
		positionTokenId: string,
		amount: string
	) => Promise<boolean>
	readonly calculateWithdrawableInterestAmountByPosition: (
		positionTokenId: string
	) => Promise<string>
	readonly calculateCumulativeHoldersRewardAmount: (
		propertyAddress: string
	) => Promise<string>
	readonly calculateCumulativeRewardPrices: () => Promise<
		readonly [string, string, string, string]
	>
	readonly calculateRewardAmount: (
		propertyAddress: string
	) => Promise<readonly [string, string]>
	readonly cap: () => Promise<string>
	readonly depositToProperty: (
		propertyAddress: string,
		amount: string
	) => Promise<boolean>
	readonly depositToPosition: (
		positionTokenId: string,
		amount: string
	) => Promise<boolean>
	readonly totalLocked: () => Promise<string>
	readonly totalLockedForProperty: (address: string) => Promise<string>
	readonly getLockedupProperties: () => Promise<readonly LockedupProperty[]>
}

export const createLockupContract =
	(provider: Provider | Signer) =>
	(address: string): LockupContract => {
		const contract = new ethers.Contract(address, [...lockupAbi], provider)

		return {
			withdrawByPosition: createWithdrawByPositionCaller(contract),
			calculateWithdrawableInterestAmountByPosition:
				createcalculateWithdrawableInterestAmountByPositionCaller(contract),
			calculateCumulativeHoldersRewardAmount:
				createCalculateCumulativeHoldersRewardAmountCaller(contract),
			calculateCumulativeRewardPrices:
				createCalculateCumulativeRewardPricesCaller(contract),
			calculateRewardAmount: createCalculateRewardAmountCaller(contract),
			cap: createCapCaller(contract),
			depositToProperty: createDepositToPropertyCaller(contract),
			depositToPosition: createDepositToPositionCaller(contract),
			totalLocked: createTotalLockedCaller(contract),
			totalLockedForProperty: createTotalLockedForPropertyCaller(contract),
			getLockedupProperties: createGetLockedupPropertiesCaller(contract),
		}
	}
