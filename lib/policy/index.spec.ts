import Web3 from 'web3'
import { createPolicyContract, PolicyContract } from '.'
import { policyAbi } from './abi'
import { CustomOptions } from '../option'
import { createHoldersShareCaller } from './holdersShare'
import { createRewardsCaller } from './rewards'
import { createAuthenticationFeeCaller } from './authenticationFee'
import { createMarketApprovalCaller } from './marketApproval'
import { createPolicyApprovalCaller } from './policyApproval'
import { createMarketVotingBlocksCaller } from './marketVotingBlocks'
import { createPolicyVotingBlocksCaller } from './policyVotingBlocks'
import { createShareOfTreasuryCaller } from './shareOfTreasury'
import { createTreasuryCaller } from './treasury'

describe('policy/index.ts', () => {
	describe('createPolicyContract', () => {
		it('check return object', () => {
			const host = 'localhost'
			const client = new Web3()
			client.setProvider(new Web3.providers.HttpProvider(host))

			const expected: (
				address?: string,
				options?: CustomOptions
			) => PolicyContract = (address?: string, options?: CustomOptions) => {
				const policyContract = new client.eth.Contract(
					[...policyAbi],
					address,
					{
						...options,
					}
				)

				return {
					holdersShare: createHoldersShareCaller(policyContract),
					rewards: createRewardsCaller(policyContract),
					authenticationFee: createAuthenticationFeeCaller(policyContract),
					marketApproval: createMarketApprovalCaller(policyContract),
					policyApproval: createPolicyApprovalCaller(policyContract),
					marketVotingBlocks: createMarketVotingBlocksCaller(policyContract),
					policyVotingBlocks: createPolicyVotingBlocksCaller(policyContract),
					shareOfTreasury: createShareOfTreasuryCaller(policyContract),
					treasury: createTreasuryCaller(policyContract),
					contract: () => policyContract,
				}
			}

			const result = createPolicyContract(client)

			expect(JSON.stringify(result)).toEqual(JSON.stringify(expected))
			expect(
				JSON.stringify(result('0x0000000000000000000000000000000000000000'))
			).toEqual(
				JSON.stringify(expected('0x0000000000000000000000000000000000000000'))
			)
		})
	})
})
