import { MessageInterface } from '@/models/message'

export const readMessage = (message: MessageInterface): any => {
  return {
    type: 'READ_MESSAGE',
    payload: message
  }
}
