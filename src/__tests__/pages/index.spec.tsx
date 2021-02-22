import React from 'react'
import Home from '@/pages'
import { render } from '@testing-library/react'
// Don't work
describe('VUTTR Homepage', () => {
  it('should be able search some tool', () => {
    const { debug } = render(<Home />)
    debug()
  })
})
