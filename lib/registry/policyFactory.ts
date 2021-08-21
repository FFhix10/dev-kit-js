import { ethers } from 'ethers'
import { execute, QueryOption } from '../utils/ethers-execute'
import { always } from 'ramda'

export type CreatePolicyFactoryCaller = (
	contract: ethers.Contract
) => () => Promise<string>

export const createPolicyFactoryCaller: CreatePolicyFactoryCaller = (
	contract: ethers.Contract
) =>
	always(
		execute<QueryOption>({
			contract,
			method: 'policyFactory',
			mutation: false,
		})
	)
