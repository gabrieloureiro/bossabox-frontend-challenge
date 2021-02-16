import { ToolsInterface } from '@/models/tools'
import { ModalInterface } from '../Modal/types'

export interface ModalToolsInterface extends ModalInterface {
  title: string
  initialData?: ToolsInterface
}
