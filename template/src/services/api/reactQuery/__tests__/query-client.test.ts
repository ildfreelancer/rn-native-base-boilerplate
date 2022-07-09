import {queryClient} from '../query-client'

describe('queryClient tests', () => {
  it('Should create a query client', async () => {
    expect(queryClient.getDefaultOptions().queries?.suspense).toBeTruthy()
  })
})
