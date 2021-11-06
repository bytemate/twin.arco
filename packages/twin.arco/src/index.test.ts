import { extend } from './index'

describe('Output snapshot', () => {
  it('should got all arco theme variable name', () => {
    expect(Object.keys(extend.colors).sort()).toMatchSnapshot()
  })
})