import * as Yup from 'yup'

const toolsSchema = Yup.object().shape({
  title: Yup.string().required('Name is required'),
  link: Yup.string().required('Link is required').url('Invalid url'),
  description: Yup.string().required('Description is required'),
  tags: Yup.array().required('Tags are required').typeError('Tags are required')
})

export default toolsSchema
