import { AbiItem } from 'web3-utils'

export const policyAbi = [
	{
		constant: true,
		inputs: [
			{
				internalType: 'uint256',
				name: '_lockups',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: '_assets',
				type: 'uint256',
			},
		],
		name: 'rewards',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
		],
		payable: false,
		stateMutability: 'view',
		type: 'function',
	},
	{
		constant: true,
		inputs: [
			{
				internalType: 'uint256',
				name: '_amount',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: '_lockups',
				type: 'uint256',
			},
		],
		name: 'holdersShare',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
		],
		payable: false,
		stateMutability: 'view',
		type: 'function',
	},
	{
		constant: true,
		inputs: [
			{
				internalType: 'uint256',
				name: '_value',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: '_lockups',
				type: 'uint256',
			},
		],
		name: 'assetValue',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
		],
		payable: false,
		stateMutability: 'view',
		type: 'function',
	},
	{
		constant: true,
		inputs: [
			{
				internalType: 'uint256',
				name: '_assets',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: '_propertyAssets',
				type: 'uint256',
			},
		],
		name: 'authenticationFee',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
		],
		payable: false,
		stateMutability: 'view',
		type: 'function',
	},
	{
		constant: true,
		inputs: [
			{
				internalType: 'uint256',
				name: '_agree',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: '_opposite',
				type: 'uint256',
			},
		],
		name: 'marketApproval',
		outputs: [
			{
				internalType: 'bool',
				name: '',
				type: 'bool',
			},
		],
		payable: false,
		stateMutability: 'view',
		type: 'function',
	},
	{
		constant: true,
		inputs: [
			{
				internalType: 'uint256',
				name: '_agree',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: '_opposite',
				type: 'uint256',
			},
		],
		name: 'policyApproval',
		outputs: [
			{
				internalType: 'bool',
				name: '',
				type: 'bool',
			},
		],
		payable: false,
		stateMutability: 'view',
		type: 'function',
	},
	{
		constant: true,
		inputs: [],
		name: 'marketVotingBlocks',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
		],
		payable: false,
		stateMutability: 'view',
		type: 'function',
	},
	{
		constant: true,
		inputs: [],
		name: 'policyVotingBlocks',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
		],
		payable: false,
		stateMutability: 'view',
		type: 'function',
	},
	{
		constant: true,
		inputs: [
			{
				internalType: 'uint256',
				name: '_count',
				type: 'uint256',
			},
		],
		name: 'abstentionPenalty',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
		],
		payable: false,
		stateMutability: 'view',
		type: 'function',
	},
	{
		constant: true,
		inputs: [],
		name: 'lockUpBlocks',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
		],
		payable: false,
		stateMutability: 'view',
		type: 'function',
	},
] as readonly AbiItem[]
