import * as Yup from 'yup'

const toolsSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  link: Yup.string().required('Link is required'),
  description: Yup.string().required('Description is required'),
  tags: Yup.array().required()
})

export default toolsSchema
