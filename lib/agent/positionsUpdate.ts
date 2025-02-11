import { FallbackableOverrides } from '../common/utils/execute'
import { Provider } from '@ethersproject/abstract-provider'
import { UndefinedOr } from '@devprotocol/util-ts'
import { ApproveIfNeededResult } from './common/approveIfNeeded'

type PositionsUpdate = (options: {
	readonly provider: Provider
	readonly positionId: number
	readonly additionalAmount: string
	readonly overrides?: FallbackableOverrides
}) => Promise<UndefinedOr<ApproveIfNeededResult>>
