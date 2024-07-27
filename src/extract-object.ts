import type * as types from './types.js'
import { type AIChainParams, createAIChain } from './create-ai-chain.js'

export type ExtractObjectParams<Result extends types.AIChainResult = string> =
  types.Simplify<
    types.SetRequired<
      Omit<AIChainParams<Result>, 'tools' | 'toolCallConcurrency' | 'params'>,
      'schema'
    > & {
      params: types.SetRequired<Partial<types.ChatParams>, 'messages'>
    }
  >

export function extractObject<Result extends types.AIChainResult = string>(
  args: ExtractObjectParams<Result>
): Promise<Result> {
  const chain = createAIChain(args)
  return chain()
}
