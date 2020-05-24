import { Contract } from 'web3-eth-contract/types'
import { Event } from './web3-txs'
import { watchEvent } from './watchEvent'

const mock = (err: Readonly<Error> | null, event: Event): Contract =>
	(({
		events: {
			allEvents(
				_: any,
				callback: (err: Readonly<Error> | null, e: Event) => void
			): void {
				callback(err, event)
			},
		},
	} as unknown) as Contract)

describe('watchEvent.ts', () => {
	describe('watchEvent', () => {
		it('Returns promise that solves by emitting an event matches passed options', async () => {
			const res = await watchEvent({
				contract: mock(null, ({
					event: 'test',
					returnValues: {
						MyParam: 1,
					},
				} as unknown) as Event),
				resolver: async (e) =>
					e.event === 'test' && e.returnValues.MyParam === 1 ? true : false,
			})
			expect(res).toEqual({
				event: 'test',
				returnValues: {
					MyParam: 1,
				},
			})
		})

		it('Throw an error when that occurred an error on passed contract', async () => {
			const res = await watchEvent({
				contract: mock(new Error('Test'), ({} as unknown) as Event),
				resolver: async () => true,
			}).catch((err: Error) => err)
			expect((res as Error).message).toBe('Test')
			expect(res).toBeInstanceOf(Error)
		})
	})
})
