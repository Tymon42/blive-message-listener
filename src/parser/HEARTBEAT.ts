import type { Message } from '../types/app'

export interface AttentionChangeMsg {
  /** 直播间热度 */
  attention: number
}

const parser = (data: any): AttentionChangeMsg => {
  return {
    attention: data,
  }
}

export const HEARTBEAT = {
  parser,
  eventName: 'heartbeat' as const,
  handlerName: 'onAttentionChange' as const,
}

export type Handler = {
  /** 直播间热度更新消息 */
  onAttentionChange: (msg: Message<AttentionChangeMsg>) => void
}
