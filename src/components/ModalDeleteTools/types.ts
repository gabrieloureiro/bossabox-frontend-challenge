import { ModalInterface } from '../Modal/types'

export interface ModalDeleteToolsInterface extends ModalInterface {
  title: string
  onConfirm: () => void
  toolTitle?: string
}
