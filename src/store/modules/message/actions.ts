export const readMessage = (message: string): any => {
  return {
    type: 'READ_MESSAGE',
    payload: message
  }
}
