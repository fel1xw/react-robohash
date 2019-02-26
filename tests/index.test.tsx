import * as React from 'react'
import { shallow } from 'enzyme'
import { parse } from 'url'

import Robohash from '../lib'

const baseProps = {
  name: 'react-robohash',
  alt: 'custom-alt',
  className: 'custom-class',
  size: 200,
  type: 'robot',
  fileType: 'png',
  background: 0,
  gravatar: true,
}

const parseToQueryObject = (query: string) => JSON.parse('{"' + decodeURI(query.replace(/&/g, "\",\"").replace(/=/g, "\":\"")) + '"}')

describe('<Robohash />', () => {
  it('renders with baseProps', () => {
    const wrapper = shallow(<Robohash {...baseProps} />)
    const img = wrapper.find('img')
    expect(img).toBeTruthy()
    expect(img.prop('src')).toContain('.png')
    expect(img.prop('alt')).toBe(baseProps.alt)
    expect(img.hasClass(baseProps.className)).toBe(true)
  })

  it('render with function as children', () => {
    const props = {
      name: 'robo',
      children: (url: string) => <span>{url}</span>
    }
    const wrapper = shallow(<Robohash {...props} />)
    expect(wrapper.text().length).toBeGreaterThan(0)
  })

  it('properly formats the url', () => {
    const wrapper = shallow(<Robohash {...baseProps} />)
    const query = parseToQueryObject(parse(wrapper.find('img').prop('src')!).query!)
    expect(query.bgset).toBe('bg0')
    expect(query.gravatar).toBe('yes')
    expect(query.set).toBe('set1')
    expect(query.size).toBe('200x200')
  })

  it('accepts size as string', () => {
    const wrapper = shallow(<Robohash name="robo" size="100x100" />)
    const query = parseToQueryObject(parse(wrapper.find('img').prop('src')!).query!)
    expect(query.size).toBe('100x100')
  })

  it('passes no when gravatar is false', () => {
    const wrapper = shallow(<Robohash name="robo" gravatar={false} />)
    const query = parseToQueryObject(parse(wrapper.find('img').prop('src')!).query!)
    expect(query.gravatar).not.toBeDefined()
  })

  it('has default class and alt value', () => {
    const wrapper = shallow(<Robohash name="robo" />)
    expect(wrapper.find('img').hasClass('Robohash')).toBe(true)
    expect(wrapper.find('img').prop('alt')).toBe('Robohash-robo')
  })

  it('ignores custom props in query', () => {
    const wrapper = shallow(<Robohash name="robo" alt="abc" onClick={console.log} />)
    expect(wrapper.find('img').prop('src')).not.toContain('onClick')
  })

  it('accepts string or number for type', () => {
    const cases = [
      ['robot', 'set1'],
      ['alien', 'set2'],
      ['head', 'set3'],
      ['cat', 'set4'],
      ['xyz', 'set1'],
      [1, 'set1'],
      [2, 'set2'],
      [3, 'set3'],
      [4, 'set4'],
    ]

    cases.forEach(([ type, expected ]) => {
      const wrapper = shallow(<Robohash name="robo" type={type} />)
      expect(wrapper.find('img').prop('src')).toContain(expected)
    })
  })
})
