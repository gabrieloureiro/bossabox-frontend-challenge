export interface ToolsInterface {
  id: string
  title: string
  link: string
  description: string
  tags: string[]
}

export const formToolsItems = [
  {
    label: 'Tool name',
    name: 'title'
  },
  {
    label: 'Tool description',
    name: 'description'
  },
  {
    label: 'Tool link',
    name: 'link'
  },
  {
    label: 'Tags',
    name: 'tags'
  }
]
